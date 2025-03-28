/**
 * API Client service for making requests to backend API endpoints
 */
export class ApiClient {
  /**
   * Base URL for API requests
   * In development, Vite's proxy will forward /api requests to the API server
   * In production, Vercel will handle routing /api requests to the API functions
   */
  private static get baseUrl() {
    // Always use '/api' path prefix - this will work with Vite's dev server proxy
    return '/api';
  }

  /**
   * Makes a POST request to the specified API endpoint
   * 
   * @param endpoint - The API endpoint to call (without /api prefix)
   * @param data - The data to send in the request body
   * @returns Promise with the response data
   */
  static async post<T, D = Record<string, unknown>>(endpoint: string, data: D): Promise<T> {
    const url = `${this.baseUrl}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
    console.log(`Making API POST request to: ${url}`);
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `API request failed with status ${response.status}`);
    }

    return response.json();
  }

  /**
   * Makes a GET request to the specified API endpoint
   * 
   * @param endpoint - The API endpoint to call (without /api prefix)
   * @returns Promise with the response data
   */
  static async get<T>(endpoint: string): Promise<T> {
    const url = `${this.baseUrl}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
    console.log(`Making API GET request to: ${url}`);
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `API request failed with status ${response.status}`);
    }

    return response.json();
  }
}
