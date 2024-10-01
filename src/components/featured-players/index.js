
// 861312042601739        
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { getAllPlayers } from "@/actions/players";

export default async function FearturedPlayer() { 

    const getFeaturedPlayers = await getAllPlayers()
    return (
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8 p-20">
            
            {
                getFeaturedPlayers.data && getFeaturedPlayers.data.length > 0
                ? getFeaturedPlayers.data.map((item) => (
                    <div>
      <Card className="w-full sm:w-[300px] mx-auto my-4 shadow-lg border border-gray-200">
      {/* Card Header */}
      <CardHeader className="text-center">
        <CardTitle className="text-lg font-bold">{item.playerName}</CardTitle>
      </CardHeader>

      {/* Card Content - Image */}
      <CardContent className="flex justify-center items-center">
        <img
          src={item.PlayerImage}
          alt={item.PlayerName}
          className="w-[150px] h-[150px] object-cover rounded-full" // Uniform size
        />
      </CardContent>

      {/* Card Title - Player Name */}
      <CardTitle className="text-center text-xl font-semibold my-2">
        {item.playerName}
      </CardTitle>

      {/* Card Footer - Rating and Team */}
      <CardFooter className="flex justify-between text-sm text-gray-600 px-4">
        <div>
          <span className="font-bold">Rating:</span> {item.playerRating}
        </div>
        <div>
          <span className="font-bold">Team:</span> {item.playerTeam}
        </div>
      </CardFooter>

    </Card>
        
                    </div>
                ))
                : <h1>No Players found</h1>
            }
        </div>
    )
}