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
        </Card>
                    </div>
                ))
                : <h1>No Players found</h1>
            }
        </div>
    )
}