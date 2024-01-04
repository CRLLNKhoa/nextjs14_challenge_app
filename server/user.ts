"use server"
import { auth, currentUser } from "@clerk/nextjs";

export async function getUser() {
    const user = await currentUser();
    if (!user) {
      throw new Error('You must be signed in to add an item to your cart');
    }
    return user.id
  }