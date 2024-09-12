// src/types/customTypes.d.ts

// Define a type for a generic item
export interface Item {
    id: number;
    name: string;
    description?: string; // Optional field
  }
  
  // Define a type for a user
  export interface User {
    id: number;
    username: string;
    email: string;
  }
  