'use client'
import Framer from "@/lib/Framer";
import { useAppDispatch } from "@/redux/store/hooks";
import { Plus, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

export default function AccountTitle() {
  const dispatch = useAppDispatch()
  const values = ['pending', 'active', 'inactive', 'on-hold', 'blocked', 'verified']
  const [active, setActive] = useState(0)
  return (
    <Framer>
      <div className="flex items-center justify-between p-5 text-white">
        <p className="text-2xl font-semibold text-white">Accounts</p>
        <div className="flex gap-3">
          <div className="px-4">
            <div className="h-12 rounded-lg border-2 w-96 relative">
              <Search
                size={20}
                className="absolute top-1/2 -translate-y-1/2 left-3 text-white"
              />
              <input
                type="text"
                className="h-full w-full bg-transparent outline-none pl-11"
              />
            </div>
          </div>
          <Link href={'/accounts/create'} className="px-5 cursor-pointer duration-300 hover:scale-105 active:scale-100 font-semibold text-sm bg-green-500 py-3 rounded-md h-fit">
            {" "}
            <Plus size={15} strokeWidth={5} className="inline text-xs" />{" "}
            Create Account
          </Link>
          <div className="w-44 relative capitalize rounded-md flex items-center justify-center gap-2 bg-blue-600 h-12">
            <p>{values[active]}</p>
            <TiArrowSortedDown />
            <div className="absolute bg-blue-500 w-full flex justify-center items-center flex-col top-full left-1/2 -translate-x-1/2">
              {values.map((el, key) => (
                <div key={key} className={`${el === values[active] && 'hidden'} capitalize `}><p>{el}</p></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Framer>
  );
}
