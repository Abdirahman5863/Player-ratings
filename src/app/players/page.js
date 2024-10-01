import { getAllPlayers } from "@/actions/players";
import { auth } from "@/auth";
import AddNewPlayer from "@/components/add-player";
import { SinglePlayer } from "@/components/single-player";
import { redirect } from "next/navigation";

export default async function Players() {
    const getsession = await auth()
    console.log(getsession)
    const getPlayers= await getAllPlayers()
    if(getsession){
        redirect('/players')
    }
    return (
        < main className="min-h-screen bg-gray-100 flex flex-col items-center p-10">
        <div className="flex justify-between items-center flex-col  gap-10" >
            <h1 className="text-3xl font-bold">{getPlayers.data.length}  Players availabe in this site</h1>
            <AddNewPlayer/>
        </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8 p-20">
            {
                getPlayers.data && getPlayers.data.length > 0
                ? getPlayers.data.map((item) => (
                    <SinglePlayer item={item} key={item._id}/>
                    
                 )):<h1>No Players found</h1> }
          </div>
          </main>
    );
}