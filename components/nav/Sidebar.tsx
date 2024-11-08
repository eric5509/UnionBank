import { Users } from "lucide-react";
import LoggedInUser from "./LoggedInUser";
import NavCard from "./NavCard";
import { IoHome } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { TbTransferVertical } from "react-icons/tb";
import { CgCreditCard } from "react-icons/cg";
import { FcBiohazard } from "react-icons/fc";
import { FaRegMessage } from "react-icons/fa6";
import { RiPassValidLine } from "react-icons/ri";
import { PiMoneyWavy } from "react-icons/pi";
import { TLink } from "./type";

export default function Sidebar() {
  const links: TLink[] = [
    {
      title: "Home",
      link: "",
      icon: <IoHome size={15} />,
    },
    {
      title: "Accounts",
      link: "accounts",
      icon: <Users size={15} />,
    },
    {
      title: "Cards",
      link: "cards",
      icon: <CgCreditCard size={15} />,
    },
    {
      title: "Transfer",
      link: "transfers",
      icon: <TbTransferVertical size={15} />,
    },
    {
      title: "Transactions",
      link: "transactions",
      icon: <GrTransaction size={15} />,
    },
    {
      title: "Loans",
      link: "loans",
      icon: <PiMoneyWavy size={18} />,
    },
    {
      title: "Message",
      link: "message",
      icon: <FaRegMessage size={18} />,
    },
    {
      title: "KYC",
      link: "kyc",
      icon: <RiPassValidLine size={18} />,
    },
  ];
  
  

  return (
    <div className="border-r-2 flex flex-col w-[300px]">
      <div className="h-16 border-b-2a flex items-center px-4">
        <div className="flex items-center gap-2">
          <FcBiohazard className="text-[42px]" />
          <p className="text-lg text-white font-semibold">
            Capital Trust Bank.
          </p>
        </div>
      </div>
      <div className="flex-1 p-4 flex-col flex justify-between">
        <div className="space-y-2">
          {links.map((el, key) => (
            <NavCard
              title={el.title}
              key={key}
              data={el?.data}
              link={el.link}
              icon={el.icon}
            />
          ))}
        </div>
        <LoggedInUser />
      </div>
    </div>
  );
}
