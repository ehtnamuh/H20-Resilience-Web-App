
import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="bg-white dark:bg-gray-800 shadow-md px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                <Link href="\">
                    H2O.RESILIENCE
                </Link>
                </h1>
            <div className="flex gap-4">
                <Link className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100" href="\">
                    Home
                </Link>
                <Link className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100" 
                href="https://www.h20resilience.com"  rel="noopener noreferrer" target="_blank">
                    About
                </Link>
                <Link className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100" href="\Landuse">
                    Services
                </Link>
            </div>
        </nav>
    )
}