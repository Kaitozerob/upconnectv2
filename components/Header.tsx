import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs';

import {
    BellDot,
    Briefcase,
    Handshake,
    HomeIcon,
    MessageSquare,
    Rocket,
    SearchIcon,
    Settings,
    UserIcon
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

function Header() {
    return (
    
    <div className="flex items-center p-2 max-w-6xl mx-auto">
        {/* Logo */}
        <Image
            className="rounded-log"
            src="/img/logo.png"
            width={40}
            height={40}
            alt="logo"
        />

        {/* Search */}
        {/* Search Icon */}
        <div className="flex-1">
            <form className="flex items-center space-x-1 bg-gray-100 p-2
            rounded-md flex-1 mx-2 max-w-96">
                <SearchIcon className="h-4 text-gray-600" />
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent flex-1 outline-none"
                />
            </form>
        </div>

        <div className="flex items-center space-x-4 px-6">
            <Link href="/" className="icon">
                <HomeIcon className="h-6" />
                <p>Home</p>
            </Link>

            <Link href="/" className="icon hidden md:flex">
                <UserIcon className="h-6" />
                <p>Network</p>
            </Link>

            <Link href="/" className="icon hidden md:flex">
                <Briefcase className="h-6" />
                <p>Jobs</p>
            </Link>

            <Link href="/" className="icon hidden md:flex relative">
                <MessageSquare className="h-6" />
                <p>Messaging</p>
                <span className="bg-red-700 h-4 w-4 rounded-full pl-[1px] text-center absolute ml-5 -top-1 text-white text-[11px]">3
                </span>
            </Link>

            <Link href="/" className="icon hidden md:flex relative">
                <BellDot className="h-6" />
                <p>Notifications</p>
                <span className="bg-red-700 h-4 w-4 rounded-full pl-[1px] text-center absolute ml-5 -top-0.5 text-white text-[11px]">2
                </span>
            </Link>

            <div className="h-6 border-l border-gray-400 mx-2"></div>
            
            <Link href="/" className="icon hidden md:flex">
                <Handshake className="h-6" />
                <p>For Businesss</p>
            </Link>


            <Link href="/" className="icon">
                <Rocket className="h-6" />
                <p>Publicity</p>
            </Link>

            <Link href="/" className="icon hidden md:flex">
                <Settings className="h-6" />
                <p>Settings</p>
            </Link>
            
            {/* User Botton wif signed in*/}
                <SignedIn>
                    <UserButton />
                </SignedIn>
            
            {/* Sign In Button if not signed in*/ }
                <SignedOut>
                    <Button asChild variant="secondary">
                        <SignInButton />
                    </Button>
                </SignedOut>
            
        </div>
    </div>
    );
}

export default Header;