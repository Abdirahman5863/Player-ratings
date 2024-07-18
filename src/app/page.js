
import FearturedPlayer from "@/components/featured-players";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { SinglePlayer } from "@/components/single-player";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
  <Navbar/>
  <section className="h-[600px]  rounded-[35px]  bg-hero bg-no-repeat  flex items-center justify-center bg-cover bg-center bg-fixed bg-[#1a1913] opacity-100 bg-blend-overlay   "><Hero/></section>
   <section className="min-h-screen bg-gray-100 flex flex-col items-center p-10 ">
    <h1 className="text-3xl font-bold mt-20 text-blue-400">Feartured Players</h1>
<FearturedPlayer/>
  
   </section>
   <section></section>
   <section></section>
   <Footer/>
    </main>)
}