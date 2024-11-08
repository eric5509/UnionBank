"use client";
import { motion } from "framer-motion";
import { transferData } from "./data";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TransfersTable() {
    const router = useRouter()
  return (
    <div>
      <table className="w-full rounded-md bg-black/20 text-white text-sm">
        <thead className="">
          <motion.tr
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className=" border-b-2"
          >
            <th className=" px-4 py-5 font-medium text-start flex items-center gap-3 text-base">
              Sender
            
            </th>
            <th className="px-4 py-5 font-medium text-start ">Date</th>
            <th className="px-4 py-5 font-medium text-start ">
              Transaction ID
            </th>
            <th className="px-4 py-5 font-medium text-start ">Amount</th>
            <th className="px-4 py-5 font-medium text-start ">Beneficiary</th>
            <th className="px-4 py-5 font-medium text-start ">Transfer Type</th>
            <th className="px-4 py-5 font-medium text-start ">Status</th>
          </motion.tr>
        </thead>
        <tbody>
          {transferData.map((row, key) => (
            <motion.tr
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              onClick={() => router.push('/transfers/6')}
              transition={{ duration: 0.5, delay: key * 0.05 }}
              className={`from-transparent relative origin-bottom-right to-black ${
                key !== transferData.length - 1 && "border-b-2 border-gray-900"
              } bg-gradient-to-br hover:from-[#15154a] hover:to-black hover:via-[#0101b4] duration-500 cursor-pointer`}
              key={key}
            >
              <td className="px-4 py-3 flex items-center gap-2">
                <span className="h-12 w-12 inline-block align-middle rounded-full border-2"></span>
                <span className="inline-block font-semibold">{row.sender}</span>
              </td>
              <td className="px-4 py-3">{row.date}</td>
              <td className="px-4 py-3">{row.transactionId}</td>
              <td className="px-4 py-3">{row.amount}</td>
              <td className="px-4 py-3">{row.beneficiary}</td>
              <td className="px-4 py-3">{row.transferType}</td>
              <td
                className={`px-4 ${
                  row.status === "Completed" && "text-green-500"
                } ${row.status === "Failed" && "text-red-500"} ${
                  row.status === "Pending" && "text-amber-500"
                } py-3`}
              >
                {row.status}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
