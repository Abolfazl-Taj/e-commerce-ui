import { Search } from "lucide-react"

const SearchBar = () => {
    return (
        <div className="hidden md:flex items-center shaodw-md  gap-2 rounded-md ring-1 ring-gray-200 px-2 py-1 
        transition-all
          focus-within:ring-2
        focus-within:ring-blue-400">
            <Search className="w-4 h-4 text-gray-500" />
            <input id="search" placeholder="Search" className="text-sm outline-none" type="text" />
        </div>
    )
}

export default SearchBar