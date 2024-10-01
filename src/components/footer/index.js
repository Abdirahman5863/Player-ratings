import { FacebookIcon, InstagramIcon, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4  flex justify-center flex-col items-center  gap-4">
          <div className="flex justify-center items-center gap-4">
          <FacebookIcon/>
        <Linkedin/>
        <InstagramIcon/>
            
            
            </div>  
       

            
            <span className="text-center">© 2024 Your Company. All rights reserved.</span>
        </footer>
    );
}