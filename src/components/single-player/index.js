"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
  
export function SinglePlayer({item}) {
  const router = useRouter()
    return (
    <Card>
         <CardHeader>
        <CardTitle>
          {item.playerName}
        </CardTitle>
      </CardHeader>
        <CardContent>
            <img src={item.PlayerImage} alt={item.PlayerName}/>
        </CardContent>

        <CardFooter className="flex justify-between">
            <div>{item.PlayerRating}</div>
            <div>{item.playerTeam}</div>
        </CardFooter>
        <CardFooter>
            <Button className="bg-[#1A237E]" onClick={() => router.push(`/${item.playerName}`)}>Player Details</Button>
        </CardFooter>

    </Card>
    );
}