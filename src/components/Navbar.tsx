import Image from "next/image"
import Link from "next/link"
import SearchBar from "./SearchBar"
import { Bell, Home, ShoppingBag } from "lucide-react"

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center border-b border-gray-200 pb-4">
            {/* Left */}
            <Link href={"/"} className="flex items-center">
                <Image
                    src='/logo.png'
                    alt="X shop logo"
                    width={36}
                    height={36}
                    className="w-6 h-6 md:w-9 md:h-9" />
                <p className="hidden md:block font-medium text-md trackin ">X Shop</p>
            </Link>
            {/* Right */}
            <div className="flex items-center gap-6">
                <SearchBar />
                <Link className="w-4 h-4 text-gray-600 hover:text-gray-700 hover:scale-110 transition-all" href={'/'}><Home /></Link>
                <Link className="w-4 h-4 text-gray-600 hover:text-gray-700 hover:scale-110 transition-all" href={'/'}><Bell /></Link>
                <Link className="w-4 h-4 text-gray-600 hover:text-gray-700 hover:scale-110 transition-all" href={'/'}><ShoppingBag /></Link>
                <Link className="text-sm " href={"/"}>Sign in</Link>
            </div>
        </nav>
    )
}

export default Navbar