import Link from "next/link";
import { Input } from "../ui/input";

export function  Hero() {
    return (
        <div className="flex flex-col justify-center  gap-5 items-center">
            <h1 className="text-white  md:text-3xl font-bold  sm:text-[18px]">
            Discover and Rate your favorite player
            </h1>
            <div className="mt-10 flex justify-center items-center">
                <Input placeholder="Search players " className=" rounded-full md:w-[900px] w-[300px]" />
                
            </div>
            <div className="text-white"><Link href="/players">All Players</Link></div>
        </div>
    );
}