import { SearchIcon } from "@heroicons/react/outline";

export const Search = () => {
    return (
        <form action="" className="flex justify-center bg-white rounded-xl border-2 overflow-hidden">
            <input type="search" placeholder="Search..." className="block rounded-md border-0 focus:outline-none focus:ring-0 focus:border-blue-500 flex-grow p-2" />
            <button type="submit">
                <SearchIcon className="h-6 w-6 my-auto m-2 text-gray-600" />
            </button>
        </form>
    );
};
