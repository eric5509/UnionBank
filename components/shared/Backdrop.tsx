'use client'
import { closeBackdrop } from "@/redux/slices/backdrop"
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks"
import { Dispatch, SetStateAction } from "react"

type Props = {
    style?: string
    children: React.ReactNode
}

export default function Backdrop({ children, style }: Props) {
    const dispatch = useAppDispatch()
    const opened = useAppSelector(store => store.backdrop.value)
    return (
        <div className={`${style} ${opened ? "opacity-100 visible" : "invisible opacity-0"} duration-500 h-screen w-full grid place-content-center top-0 left-0 delay-200 backdrop-blur-md bg-black/10 fixed z-[5000]`}>
            {children}
            <div onClick={() => dispatch(closeBackdrop())} className="h-screen fixed z-[-20] top-0 left-0 w-full"></div>
        </div>
    )
}
