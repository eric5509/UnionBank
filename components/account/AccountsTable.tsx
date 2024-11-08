"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import { openBackdrop } from "@/redux/slices/backdrop";
import { openModal } from "@/redux/slices/modal";
import { loadAccount, setDisplayedAccounts } from "@/redux/slices/account";
import { colors } from "./data";

export default function AccountsTable() {
  const dispatch = useAppDispatch()
  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  const accounts = useAppSelector((store) => store.account.displayedAccount);
  const activeTable = useAppSelector((store) => store.account.active);


  return (
    <div className={` overflow-x-auto`}>
      <table className="w-full min-w-[1000px] rounded-md bg-black/20 text-white text-sm">
        <thead className="">
          <tr className=" border-b-2">
            <th className=" px-4 py-5 font-medium text-start flex items-center gap-3 text-base">
              Fullname
            </th>
            <th className="px-4 py-5 font-medium text-start ">Email</th>
            <th className="px-4 py-5 font-medium text-start ">Phone</th>
            <th className="px-4 py-5 font-medium text-start ">
              Account Number
            </th>
            <th className="px-4 py-5 font-medium text-start ">Balance</th>
            <th className="px-4 py-5 font-medium text-start ">Status</th>
            <th className="px-4 py-5 font-medium text-start ">Active</th>
          </tr>
        </thead>
        <tbody>
          {accounts?.map((account, key) => (
            <motion.tr
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: key * 0.05 }}
              onClick={() => {
                dispatch(loadAccount(account));
                dispatch(openBackdrop());
                dispatch(openModal("account"));
                dispatch(loadAccount(account));
              }}
              className={`from-transparent to-black ${key !== accounts.length - 1 && "border-b-2 border-gray-900"
                } bg-gradient-to-br hover:from-[#15154a] hover:to-black hover:via-[#0101b4] duration-500 cursor-pointer`}
              key={key}
            >
              <td className="px-4 py-3 flex items-center gap-2">
                <span
                  style={{ backgroundColor: `${getRandomColor()}` }}
                  className="h-12 w-12 grid place-content-center shrink-0 overflow-hidden align-middle rounded-full border-2"
                >
                  {account.admin ? (
                    <img
                      src={account.image}
                      className="h-full w-full rounded-full object-cover"
                      alt=""
                    />
                  ) : (
                    <p className="text-2xl">{account.firstName?.slice(0, 1)}</p>
                  )}
                </span>
                <span className="inline-block font-semibold">
                  {account.firstName} {account.middleName} {account.lastName}
                </span>
              </td>
              <td className="px-4 py-3">{account.email}</td>
              <td className="px-4 py-3">{account.phone}</td>
              <td className="px-4 py-3">{account.accountNumber}</td>
              <td className="px-4 py-3">
                ${account.currentBalance?.toLocaleString()}
              </td>
              <td
                className={`px-4 capitalize py-3 ${account.status === "pending" && "text-amber-500"
                  } ${account.status === "successful" && "text-green-500"}  ${account.status === "failed" && "text-red-500"
                  }`}
              >
                {account.status}
              </td>

              <td
                className={`px-4 capitalize py-3 duration-300 ${account.active ? "text-green-500" : "text-gray-400"}`}
              >
                {account.active ? "Active" : "Inactive"}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
