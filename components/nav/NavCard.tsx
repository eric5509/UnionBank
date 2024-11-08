'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { BsChevronRight } from "react-icons/bs"
import { TLink} from './type'


export default function NavCard({ icon, title, link, data }: TLink) {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()
    return (
        <div className="">
            {!data && <Link href={`/${link}`} className={`flex bgNav items-center gap-2 font-medium rounded-xl px-4 py-3 bg-white/15 backdrop-blur-lg shadow-md border border-white/80 text-white cursor-pointer duration-500 active:scale-95 ${pathname === `/${link}` && "activeBg"}   `}>
                {icon}
                <p className="text-sm">{title}</p>
            </Link>
            }
            {data && data?.length > 0 &&
                <div className="">
                    <div onClick={() => setOpen(!open)} className="flex bgNav items-center gap-2 relative font-medium rounded-xl px-4 py-3 bg-white/15 backdrop-blur-lg shadow-md border border-white/80 text-white cursor-pointer z-20 duration-500 active:scale-95">
                        {icon}
                        <p className="text-sm">{title}</p>
                        <BsChevronRight className={`absolute top-1/2 duration-300 right-3 stroke-1 text-sm -translate-y-1/2 ${open ? "rotate-90" : "rotate-0"}`} />
                    </div>
                    <div className={`grid z-10 relative ${open ? "grid-rows-[1fr] translate-y-0 px-2" : "-translate-y-3 grid-rows-[0fr]"} overflow-hidden duration-300`} onClick={() => setOpen(!open)}>
                        {data?.map((el, key) => (
                            <Link href={`${el.link}`} key={key} className={`duration-300 ${key === data.length - 1 ? "rounded-b-lg" : "rounded-none"} flex bgNav items-center hover:bg-[red] text-white overflow-hidden px-5 text-sm bg-gradient-to-br from-black/80 to-black ${open ? "h-10" : "h-0"}`}>{el.title}</Link>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}
