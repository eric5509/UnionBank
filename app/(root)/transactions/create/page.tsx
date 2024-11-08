import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import Title from "@/components/shared/Title";
import { names, status, transactionType } from "@/lib/data";
import { getFormattedDate } from "@/lib/helper";

export default function page() {
    const date  = getFormattedDate()
    
    return (
        <div className="flex flex-col h-full justify-between">
            <div className="">
                <div className="flex px-3">
                    <Title title="Add Transaction" />
                </div>
                <div className="p-3 grid grid-cols-3 gap-5">
                    <Input label="Account" select={true} data={names} style="rounded-lg" />
                    <Input label="Description" style="rounded-lg" />
                    <Input label="Date"  value={`${date}`} style="rounded-lg" />
                    <Input label="Amount" style="rounded-lg" />
                    <Input label="Status" select={true} data={status} style="rounded-lg" />
                    <Input label="Transaction Type" select={true} data={transactionType} style="rounded-lg" />
                </div>
            </div>
            <div className="flex justify-end p-5">
                <Button title="Submit" style="bg-emerald-500 text-white w-fit" />
            </div>
        </div>
    )
}
