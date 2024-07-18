"use client"
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { auth } from "@/auth";
export  async function  Navbar(){
  async function handlesubmit(){
    await SignInAction('google')}
  const getsession=await auth()
  return (
    <div className="flex items-center justify-between max-sm:gap-7  bg-fixed p-6">
      <div>
        <Link
          href="/"
          className="text-xl  font-mono md:3xl md:text-[40px] text-[#1A237E] font-extrabold "
        >
          <h3>
            Player<span className="text-[#6d663c]">Ratings</span>
          </h3>
        </Link>
      </div>
      <div>
        { getsession && getsession.user ? <Link href="/profile"><CgProfile size={35} /></Link> :
           <form acttion={handlesubmit }> 
            <Button className="bg-[#1A237E]" type="submit">Sign in</Button>
           </form>
          
        
      
        }
        </div>{" "}
        
    </div>
  );
};

export default Navbar;
