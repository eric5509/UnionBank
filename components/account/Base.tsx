"use client";
import BankInfo from "@/components/account/AccountInfo";
import AddressInfo from "@/components/account/AddressInfo";
import IdentificationTaxInfo from "@/components/account/IdentificationTaxInfo";
import NameDP from "@/components/account/NameDP";
import PersonalInfo from "@/components/account/PersonalInfo";
import TransferTable from "@/components/transfer/TransfersTable";
import Title from "@/components/shared/Title";
import Framer from "@/lib/Framer";
import { useState } from "react";

export default function page() {
  const links = ["Profile", "Transactions", "Transfers"];
  const [active, setActive] = useState(0);
  return (
    <Framer>
      <div className="">
        <Title title="Profile" />
        <div className="flex sticky top-0 p-4 z-30 bg-black gap-5 ">
          {links.map((el, key) => (
            <p
              key={key}
              onClick={() => setActive(key)}
              className={`px-6 ${
                key === active ? "bg-[darkblue]" : ""
              } cursor-pointer duration-300 active:scale-95 text-white text-sm font-semibold py-3 rounded-md`}
            >
              {el}
            </p>
          ))}
        </div>
        {active === 0 && (
          <Framer>
            <div className="Profile activeBg p-4">
              <NameDP />
              <PersonalInfo />
              <AddressInfo />
              <BankInfo />
              <IdentificationTaxInfo />
            </div>
          </Framer>
        )}
        {active === 2 && <TransferTable />}
      </div>
    </Framer>
  );
}
