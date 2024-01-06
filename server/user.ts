"use server";
import { currentUser } from "@clerk/nextjs";

export async function getUser() {
  const user = await currentUser();
  if (!user) {
    throw new Error("You must be signed in to add an item to your cart");
  }
  const { firstName, lastName } = user;
  if (firstName !== null && lastName !== null) {
    return {
      user_id: user.id,
      user_name: user.firstName + " " + user.lastName,
    };
  }
  if (firstName === null && lastName !== null) {
    return {
      user_id: user.id,
      user_name: user.lastName,
    };
  }
  if (firstName !== null && lastName === null) {
    return {
      user_id: user.id,
      user_name: user.firstName,
    };
  }
}
