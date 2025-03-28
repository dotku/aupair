import { VercelRequest, VercelResponse } from "@vercel/node";
import { PrismaClient } from "@prisma/client";

// Define Profile type to match database structure
interface Profile {
  id: string;
  full_name?: string;
  phone_number?: string;
  address?: string;
  city?: string;
  country?: string;
  postal_code?: string;
  bio?: string;
  avatar_url?: string;
  created_at: Date | string;
  updated_at: Date | string;
  [key: string]: unknown; // For any additional fields
}

// Define operation types
type ProfileOperation = 'create' | 'update' | 'get';

// Define response types for better type safety
interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
  details?: string;
  id?: string;
  data?: Profile;
}

interface ProfileOperationResult {
  status: number;
  body: ApiResponse;
}

// Log environment information for debugging
console.log("API Environment:", {
  NODE_ENV: process.env.NODE_ENV,
  DIRECT_URL_ENV: !!process.env.DIRECT_URL,
  DATABASE_URL_ENV: !!process.env.DATABASE_URL,
});

// Initialize Prisma client
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL || process.env.DIRECT_URL,
    },
  },
  log: ['query', 'error', 'warn'],
});

// Test database connection on startup
async function testConnection() {
  try {
    // Simple query to test connection
    await prisma.$queryRaw`SELECT 1 as test`;
    console.log("Database connection test successful");
    return true;
  } catch (error) {
    console.error("Database connection test failed:", error);
    return false;
  }
}

// Immediately test connection
testConnection().catch(console.error);

// Prepare profile data for insertion/update by removing non-column fields
function sanitizeProfileData(profileData: Partial<Profile>): Record<string, unknown> {
  // Create a copy to avoid modifying the original
  const sanitized: Record<string, unknown> = {};
  
  // Only allow specific fields to be updated - matching actual database columns
  const allowedFields = [
    'full_name',
    'phone_number',
    'address',
    'city',
    'country',
    'postal_code',
    'bio',
    'avatar_url'
  ];
  
  // Copy only the allowed fields
  for (const field of allowedFields) {
    if (field in profileData) {
      sanitized[field] = profileData[field as keyof typeof profileData];
    }
  }
  
  // Always update the updated_at timestamp
  const now = new Date().toISOString();
  sanitized.updated_at = now;
  
  return sanitized;
}

// Define the actual profile handler logic
async function handleProfileOperation(
  userId: string, 
  operation: ProfileOperation = 'get',
  profileData?: Partial<Profile>
): Promise<ProfileOperationResult> {
  try {
    console.log(`Performing ${operation} operation for profile with userId:`, userId);
    
    // Check if profile exists using raw query
    const existingProfiles = await prisma.$queryRaw<Array<Profile>>`
      SELECT * FROM "Profile" WHERE id = ${userId}::uuid LIMIT 1
    `;
    
    const profileExists = existingProfiles && existingProfiles.length > 0;
    
    // GET operation - just return profile if it exists
    if (operation === 'get') {
      if (profileExists) {
        return {
          status: 200,
          body: { 
            success: true,
            data: existingProfiles[0]
          }
        };
      } else {
        return {
          status: 404,
          body: {
            success: false,
            error: "Profile not found"
          }
        };
      }
    }
    
    // UPDATE operation - update existing profile
    if (operation === 'update') {
      if (!profileExists) {
        return {
          status: 404,
          body: {
            success: false,
            error: "Cannot update a non-existing profile"
          }
        };
      }
      
      if (!profileData) {
        return {
          status: 400,
          body: {
            success: false,
            error: "No profile data provided for update"
          }
        };
      }
      
      // Sanitize the profile data
      const sanitizedData = sanitizeProfileData(profileData);
      
      // If no valid fields to update, just return existing profile
      if (Object.keys(sanitizedData).length === 0) {
        return {
          status: 200,
          body: { 
            success: true, 
            message: "Profile already exists, no changes needed", 
            data: existingProfiles[0]
          }
        };
      }
      
      // Build SET clause for SQL update with proper timestamp casting
      const setClauses: string[] = [];
      const values: unknown[] = [];
      let paramIndex = 1;
      
      for (const [key, value] of Object.entries(sanitizedData)) {
        // Special handling for timestamp fields
        if (key === 'updated_at' || key === 'created_at') {
          setClauses.push(`"${key}" = $${paramIndex}::timestamp with time zone`);
        } else {
          setClauses.push(`"${key}" = $${paramIndex}`);
        }
        values.push(value);
        paramIndex++;
      }
      
      // Add userId as the last parameter
      values.push(userId);
      
      // Execute the update query
      const updateQuery = `
        UPDATE "Profile" 
        SET ${setClauses.join(', ')} 
        WHERE id = $${paramIndex}::uuid 
        RETURNING *
      `;
      
      console.log("Update query:", updateQuery, "Values:", values);
      
      const updatedProfiles = await prisma.$queryRawUnsafe<Array<Profile>>(
        updateQuery,
        ...values
      );
      
      if (updatedProfiles && updatedProfiles.length > 0) {
        console.log("Profile updated successfully:", updatedProfiles[0]);
        return {
          status: 200,
          body: { 
            success: true, 
            message: "Profile updated successfully", 
            data: updatedProfiles[0] 
          }
        };
      } else {
        throw new Error("Update operation did not return the updated profile");
      }
    }
    
    // CREATE operation - create new profile if it doesn't exist
    if (operation === 'create') {
      if (profileExists) {
        console.log("Profile already exists, updating with provided data:", existingProfiles[0]);
        
        // If no profile data provided for update, just return the existing profile
        if (!profileData) {
          return {
            status: 200,
            body: { 
              success: true, 
              message: "Profile already exists", 
              id: existingProfiles[0].id,
              data: existingProfiles[0]
            }
          };
        }
        
        // Update the existing profile with provided data
        // Sanitize the profile data
        const sanitizedData = sanitizeProfileData(profileData);
        
        // If no valid fields to update, just return existing profile
        if (Object.keys(sanitizedData).length === 0) {
          return {
            status: 200,
            body: { 
              success: true, 
              message: "Profile already exists, no changes needed", 
              data: existingProfiles[0]
            }
          };
        }
        
        // Build SET clause for SQL update with proper timestamp casting
        const setClauses: string[] = [];
        const values: unknown[] = [];
        let paramIndex = 1;
        
        for (const [key, value] of Object.entries(sanitizedData)) {
          // Special handling for timestamp fields
          if (key === 'updated_at' || key === 'created_at') {
            setClauses.push(`"${key}" = $${paramIndex}::timestamp with time zone`);
          } else {
            setClauses.push(`"${key}" = $${paramIndex}`);
          }
          values.push(value);
          paramIndex++;
        }
        
        // Add userId as the last parameter
        values.push(userId);
        
        // Execute the update query
        const updateQuery = `
          UPDATE "Profile" 
          SET ${setClauses.join(', ')} 
          WHERE id = $${paramIndex}::uuid 
          RETURNING *
        `;
        
        console.log("Auto-updating existing profile:", updateQuery, "Values:", values);
        
        const updatedProfiles = await prisma.$queryRawUnsafe<Array<Profile>>(
          updateQuery,
          ...values
        );
        
        if (updatedProfiles && updatedProfiles.length > 0) {
          console.log("Profile updated successfully:", updatedProfiles[0]);
          return {
            status: 200,
            body: { 
              success: true, 
              message: "Profile updated successfully", 
              data: updatedProfiles[0] 
            }
          };
        } else {
          throw new Error("Update operation did not return the updated profile");
        }
      }
      
      console.log("Creating new profile for user:", userId);
      
      // Prepare data for insert
      const now = new Date().toISOString();
      let insertData: Record<string, unknown> = {
        id: userId,
        created_at: now,
        updated_at: now
      };
      
      // Merge with provided profile data if available
      if (profileData) {
        insertData = { ...insertData, ...sanitizeProfileData(profileData) };
      }
      
      // Build columns and values for SQL insert
      const columns: string[] = [];
      const placeholders: string[] = [];
      const values: unknown[] = [];
      let paramIndex = 1;
      
      for (const [key, value] of Object.entries(insertData)) {
        columns.push(`"${key}"`);
        placeholders.push(`$${paramIndex}`);
        values.push(value);
        paramIndex++;
      }
      
      // Execute the insert query
      const insertQuery = `
        INSERT INTO "Profile" (${columns.join(', ')})
        VALUES (${placeholders.join(', ')})
        RETURNING *
      `;
      
      console.log("Insert query:", insertQuery, "Values:", values);
      
      const newProfiles = await prisma.$queryRawUnsafe<Array<Profile>>(
        insertQuery,
        ...values
      );
      
      if (newProfiles && newProfiles.length > 0) {
        console.log("Profile created successfully:", newProfiles[0]);
        return {
          status: 201,
          body: { 
            success: true, 
            message: "Profile created successfully", 
            data: newProfiles[0] 
          }
        };
      } else {
        throw new Error("Insert operation did not return the created profile");
      }
    }
    
    // Shouldn't reach here
    return {
      status: 400,
      body: {
        success: false,
        error: `Invalid operation: ${operation}`
      }
    };
  } catch (error) {
    console.error("Error in profile operation:", error);
    
    // Handle specific Prisma errors
    if (error instanceof Error) {
      if (error.message.includes('schema "public" does not exist')) {
        return {
          status: 500,
          body: {
            success: false,
            error: "Database schema not found. Check database configuration.",
            details: error.message
          }
        };
      }
      
      if (error.message.includes('permission denied')) {
        return {
          status: 500,
          body: {
            success: false,
            error: "Database permission error. Check user credentials.",
            details: error.message
          }
        };
      }
      
      return {
        status: 500,
        body: {
          success: false,
          error: "Database error",
          details: error.message
        }
      };
    }
    
    return {
      status: 500,
      body: {
        success: false,
        error: "Unknown error occurred"
      }
    };
  }
}

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  try {
    // Determine operation based on HTTP method
    let operation: ProfileOperation;
    
    switch (request.method) {
      case "GET":
        operation = 'get';
        break;
      case "POST":
        operation = 'create';
        break;
      case "PUT":
      case "PATCH":
        operation = 'update';
        break;
      default:
        return response.status(405).json({ error: "Method not allowed" });
    }
    
    // Extract user ID
    const userId = request.method === "GET" 
      ? (request.query.userId as string) 
      : request.body.userId;
    
    if (!userId) {
      return response.status(400).json({ error: "User ID is required" });
    }
    
    console.log(`Processing ${operation} profile request for user:`, userId);
    
    // Extract profile data for POST/PUT/PATCH requests
    const profileData = (request.method === "POST" || request.method === "PUT" || request.method === "PATCH")
      ? request.body.profileData
      : undefined;
    
    // Use the profile handler logic with the determined operation
    const result = await handleProfileOperation(userId, operation, profileData);
    
    // Return the response with the appropriate status and body
    return response.status(result.status).json(result.body);

  } catch (error: unknown) {
    console.error("Exception in profile handler:", error);
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
    return response.status(500).json({ 
      success: false, 
      error: errorMessage
    });
  } finally {
    // Clean up database connections
    await prisma.$disconnect();
  }
}
