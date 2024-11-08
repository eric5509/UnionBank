import TransactionTable from "@/components/transaction/TransactionsTable";
import Title from "@/components/shared/Title";
import Framer from "@/lib/Framer";
import Link from "next/link";
import { Plus } from "lucide-react";
import { TTransaction } from "@/redux/slices/transaction";

export default async function TransactionPage() {
  const transaction = await fetch(`${process.env.ROOT_URL}`)
  const results: TTransaction[] = transaction.data
  return (
    <Framer>
      <div>
        <div className="flex px-3 justify-between items-center">
          <Title title="Transactions" />
          <Link href={'/transactions/create'} className="px-5 cursor-pointer text-white duration-300 hover:scale-105 active:scale-100 font-semibold text-sm bg-green-500 py-3 rounded-md h-fit">
            {" "}
            <Plus size={15} strokeWidth={5} className="inline text-white text-xs" />{" "}
            Add Transaction
          </Link>
        </div>
        <TransactionTable one={false} results={results}/>
      </div>
    </Framer>
  )
}
