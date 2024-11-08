'use client'
import { useEffect } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

type Props = {
    value: string;
    label: string;
    error: string;
    name: string;
    style?: string;
    data: string[]
    onChange: (e: any) => void;
};


export default function Select({ value, label, name, error, data, onChange, style }: Props) {
    return (
        <div className="">
            <p className="text-white mb-1 text-[15px] ">{label}</p>
            <div className="h-12 relative">
                <select name={name} value={value || data[0]} onChange={onChange} className={`h-full cursor-pointer appearance-none pl-2 text-[15px] capitalize ${style} relative outline-none w-full border-2 ${error ? "border-red-500" : "border-gray-300"} duration-300`}>
                    {data?.map((el, key) => (
                        <option key={key} value={el} className="capitalize">{el}</option>
                    ))}
                </select>
                <TiArrowSortedDown className="absolute right-2 text-black top-1/2 -translate-y-1/2 pointer-events-none cursor-pointer" />
            </div>
            <p className={`${error ? 'h-5 opacity-100' : 'h-0 opacity-0'} overflow-hidden duration-300 text-red-500`}>{error}</p>
        </div>
    )
}
