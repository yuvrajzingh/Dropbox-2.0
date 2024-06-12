import { SignIn, SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
        <div className="">
          <Image 
            src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4s3ECJJwiCX0hLvu4r9XHOEXMjqhxJ6T-PQ&s'}
            alt="logo"
            width={50}
            height={50}
          />
        </div>
        <h1 className="font-bold text-2xl">Dropbox 2.0</h1>
      </Link>    
      <div className="px-5 flex space-x-2 items-center">
        <UserButton afterSignOutUrl="/" />
        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal"/>
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
