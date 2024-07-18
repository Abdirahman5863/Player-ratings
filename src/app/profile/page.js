"use client";

import { useState, useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import { SignOutAction } from "@/actions/players";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default async function Profile() {
  const router = useRouter();
 
const getsession = await auth();

  async function handleLogout() {
    await SignOutAction();
    router.push("/");
    getsession(false)
  }

  if (!getsession) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
        <Card>
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8">
          <div className="flex justify-center">
            <img
              src={getsession.user.image}
              alt={getsession.user.name}
              className="w-32 h-32 rounded-full border-4 border-white"
            />
          </div>
          <div className="text-center mt-4">
            <h1 className="text-3xl font-semibold text-white">{getsession.user.name}</h1>
            <p className="text-white mt-2">{getsession.user.email}</p>
          </div>
  
          
          <div className="mt-8 flex justify-center">
            <form action={handleLogout}>
              <Button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-lg">Logout</Button>
            </form>
          </div>
        </div>
      </div>
      </Card>
    </div>
  );
}
