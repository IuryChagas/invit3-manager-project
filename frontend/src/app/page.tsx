import LogoBigger from "@/components/template/LogoBigger";
import Link from "next/link";

export default function Home() {
  
   return (
          <div className="
            h-screen flex flex-col justify-center items-center gap-10
            bg-[url('/main-background.svg')] bg-cover
          
          ">
            <div className="flex flex-col items-center gap-4">
              <LogoBigger />
              <p className="text-zinc-500 font-light w-96 leading-6 text-center select-none">
                Create and manage your event invitations quickly, easily and without complications
              </p>
            </div>
            <Link href={"/event"} className="button green text-lg uppercase select-none">Create your event right now</Link>
          </div>
  );
}
