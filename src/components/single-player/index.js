"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export function SinglePlayer({ item }) {
  const router = useRouter();

  return (
    <Card className="max-w-sm mx-auto p-4 space-y-4 shadow-lg rounded-lg bg-white">
      {/* Card Header */}
      <CardHeader>
        <CardTitle className="text-center text-xl font-bold">
          {item.playerName}
        </CardTitle>
      </CardHeader>

      {/* Player Image */}
      <CardContent className="flex justify-center items-center">
        <img
          src={item.PlayerImage}
          alt={item.playerName}
          className="w-32 h-32 object-cover rounded-full"
        />
      </CardContent>

      {/* Player Info */}
      <CardContent className="text-center">
        <CardTitle className="text-lg font-semibold">
          {item.playerName}
        </CardTitle>
        <div className="text-sm text-gray-500">
          Team: {item.playerTeam}
        </div>
      </CardContent>

      {/* Player Rating and Team */}
      <CardFooter className="flex justify-between text-sm text-gray-600">
        <span>Rating: {item.playerRating}</span>
        <span>{item.playerTeam}</span>
      </CardFooter>

      {/* Button */}
      <CardFooter className="flex justify-center">
        <Button
          className="bg-[#1A237E] text-white px-4 py-2 rounded-lg"
          onClick={() => router.push(`/${item.playerName}`)}
        >
          Player Details
        </Button>
      </CardFooter>
    </Card>
  );
}
