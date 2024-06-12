import { HOME_VID } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-900">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-5xl font-bold">
            Welcom to Dropbox. <br />
            <br />
            Storing everything for you and your business needs. All in one
            place.
          </h1>

          <p className="pb-20">
            Enhance your personal storage with Dropbox, offering a simple and efficient way to upload, organize, and access files from anywhere.
            Securely store important documents and media, and experience the convenience of easy file management and sharing in one centralized solution.
          </p>

          <Link href='/dashboard' className="flex cursor-pointer bg-blue-500 p-5 w-fit">
            Try it for free!
            <ArrowRight className="ml-10" />
          </Link>
        </div>

        <div className="bg-[#1E1919] dark:bg-slate-900 h-full p-10">
          <video autoPlay loop muted className="rounded-lg">
            <source src={HOME_VID}/>
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </main>
  );
}
