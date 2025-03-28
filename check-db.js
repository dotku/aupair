import { PrismaClient } from '@prisma/client';

async function checkDatabase() {
  const prisma = new PrismaClient();
  
  try {
    console.log("Checking database schema...");
    
    // Check for Profile table columns
    const profileColumns = await prisma.$queryRaw`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'Profile'
    `;
    
    console.log("Profile table columns:");
    console.log(JSON.stringify(profileColumns, null, 2));
    
  } catch (error) {
    console.error("Error checking database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

checkDatabase();
