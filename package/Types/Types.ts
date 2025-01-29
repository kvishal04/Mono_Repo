

enum Role {
  ADMIN,
  USER
}
export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    role: Role;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number; // Assuming Prisma's Decimal is handled as a number
    tags: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date | null;
  }
  