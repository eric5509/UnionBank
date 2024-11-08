'use client'
import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineWifi } from "react-icons/ai";
import { TiArrowSortedUp } from "react-icons/ti";

type Props = {
  track: number
}

export default function CreditCard({ track }: Props) {
  const [opened, setOpened] = useState(false)

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: track * 0.1 }}
      className={`flex border-2 rounded-2xl overflow-hidden text-white transition-colors relative bg-white/15 duration-300 hover:scale-[1.02] cursor-pointer backdrop-blur-md flex-col justify-between h-56 w-96 card p-5 `}>
      <div className={`h-full w-full absolute flex flex-col justify-center pl-10 z-10 ${opened ? "opacity-100 h-56 z-30" : "opacity-0 h-0 z-0"} duration-300 top-0 left-0 text-[15px] bg-black gap-2 backdrop-blur-3xl`} onClick={() => setOpened(false)}>
        <p>PIN: <b className="">3726</b></p>
        <p>CVV: <b className="">3726</b></p>
      </div>
      <div className={`h-full w-full absolute z-10 top-0 left-0`} onClick={() => setOpened(true)} ></div>
      <div className="flex font-semibold mb-2 justify-between items-center">
        <span>Chase Bank</span>
        <span>Credit Card</span>
      </div>
      <div className="flex justify-between mb-2 items-center w-full overflow-hidden ">
        <img src="chip.png" className="h-8" alt="" />
        <AiOutlineWifi className="rotate-90 text-2xl" />
      </div>
      <div className="">
        <p className="text-[17px] font-bold"> 4000 0566 5566 5556</p>
      </div>

      <div className="flex justify-end">
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-1">
            <div className="text-[9px] font-light">
              <p>VALID</p>
              <p>THRU</p>
            </div>
            <TiArrowSortedUp className="text-lg rotate-90" />
          </div>
          <p className={`text-base font-semibold`}>01/80</p>
        </div>
      </div>
      <p className="uppercase text-sm font-semibold">Tony Cordiela Johnson</p>
    </motion.div>)
}
