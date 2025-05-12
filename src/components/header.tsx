import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <div className=" w-full mt-0 mb-30 flex align-middle">
            <Image src='/premier.svg' alt='logo premier' width={250} height={120} />
            <div className="ml-auto flex align-middle">
                <Link href="#" className="text-base mr-2 border-2 border-black-100 inline-flex px-4 cursor-pointer
           py-2 rounded-xl hover:bg-blue-700 hover:border-blue-700
            hover:text-white transition-colors  duration-150 
        ease-in-out">Agenda</Link>


                <div className="menu-link">
                    <Link href="#" className="transition-colors text-base duration-150 cursor-pointer
        ease-in-out  border-2 border-indigo-600 bg-indigo-600 text-white inline-flex px-4 py-2 rounded-xl 
         hover:bg-blue-700 hover:border-blue-700
         "> Buy tickets </Link>
                    <span className="menu-icon"></span>
                </div>
            </div>
        </div>

    )
}


