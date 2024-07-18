"use server";

import { signIn } from "@/auth";
import connectToDb from "@/database";
import Player from "@/model/player";

export async function AddPostPlayers(formData) {
  await connectToDb();
  try {
    const newlyaddedplayer = await Player.create(formData);
    if (newlyaddedplayer) {
      return {
        success: true,
        message: "player added successfully",
      };
    } else {
      return {
        success: false,
        message: "player not added",
      };
    }
  } catch (error) {
    console.log(error);
    return;
  }
}
export  async function getAllPlayers() {
  await connectToDb();
  try {
    const extractallPlayer = await Player.find({});
    return {
        success: true,
        data: JSON.parse(JSON.stringify(extractallPlayer)),
    }
  } catch (error) {
    console.log(error);
    return;
  }
}
export async function SignInAction(){
    await signIn('google')

}
export async function SignOutAction(){
  try {
    await signOut({ callbackUrl: '/' });
    console.log("Signed out successfully");
} catch (error) {
    console.error("Error signing out: ", error);
}
}