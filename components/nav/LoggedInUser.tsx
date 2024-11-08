import { ChevronDown } from "lucide-react";

export default function LoggedInUser() {
    return (
        <div className="p-2 activeBg flex gap-2 items-center rounded-2xl border-2">
            <div className="h-14 w-14 rounded-full border-2"></div>
            <div className="text-white flex-1 justify-between flex text-[15px] font-semibold">
                <p>Jerome J. Peters</p>
                <ChevronDown />
            </div>
        </div>
    )
}
