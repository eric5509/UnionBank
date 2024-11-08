"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { transactions } from "./data";
import { useRouter } from "next/navigation";
import { loadAllTransactions, TTransaction } from "@/redux/slices/transaction";
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";

type Props = {
  one: boolean;
  results: TTransaction[]
};

export default function TransactionsTable({ one, results }: Props) {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const transactions = useAppSelector(store => store.transaction.all)

  useEffect(() => {
    dispatch(loadAllTransactions(results))
  }, [])
  return (
    <div>
      <table className="w-full rounded-md bg-black/20 text-white text-sm">
        <thead className="">
          <tr className=" border-b-2">
            {!one && (
              <th className=" px-4 py-5 font-medium text-start flex items-center gap-3 text-base">
                Account Name
              </th>
            )}
            <th className="px-4 py-5 font-medium text-start ">
              Account Number
            </th>
            <th className="px-4 py-5 font-medium text-start ">
              Transaction ID
            </th>
            <th className="px-4 py-5 font-medium text-start ">Date</th>
            <th className="px-4 py-5 font-medium text-start ">Description</th>
            <th className="px-4 py-5 font-medium text-start ">Type</th>
            <th className="px-4 py-5 font-medium text-start ">Amount</th>
            <th className="px-4 py-5 font-medium text-start ">Status</th>
          </tr>
        </thead>
        <tbody>
          <AnimatePresence>
            {transactions.map((transaction, key) => (
              <motion.tr
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.5, delay: key * 0.05 }}
                onClick={() => router.push('/transactions/7')}
                className={`from-transparent to-black ${key !== transactions.length - 1 &&
                  "border-b-2 border-gray-900"
                  } bg-gradient-to-br origin-left hover:from-[#15154a] hover:to-black hover:via-[#0101b4] duration-500 cursor-pointer`}
                key={key}
              >
                {!one && (
                  <td className="px-4 py-3 flex items-center gap-2">
                    <span className="h-12 w-12 inline-block align-middle rounded-full border-2"></span>
                    <span className="inline-block font-semibold">
                      {transaction.accountName}
                    </span>
                  </td>
                )}
                <td className="px-4 py-3">{transaction.accountNumber}</td>
                <td className="px-4 py-3">{transaction.transactionID}</td>
                <td className="px-4 py-3">{transaction.date}</td>
                <td className="px-4 py-3">{transaction.description}</td>
                <td className="px-4 py-3">{transaction.transactionType}</td>
                <td className="px-4 py-3">{transaction.amount}</td>
                <td
                  className={`px-4 ${transaction.status === "Completed" && "text-green-500"
                    } ${transaction.status === "Failed" && "text-red-500"} ${transaction.status === "Pending" && "text-amber-500"
                    } py-3`}
                >
                  {transaction.status}
                </td>
              </motion.tr>
            ))}
          </AnimatePresence>
        </tbody>
      </table>
    </div>
  );
}
