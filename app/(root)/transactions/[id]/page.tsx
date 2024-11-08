import TransactionDetail from "@/components/transaction/TransactionDetail";
import Framer from "@/lib/Framer";
import { TTransaction } from "@/redux/slices/transaction";
import { Pencil, Trash } from "lucide-react";

type Params = {
  params: {
    id: string;
  };
};

export default async function page({ params }: Params) {
  const { id } = params
  const transaction = await fetch(`${process.env.ROOT_URL}/${id}`)
  const result: TTransaction = transaction.data
  return (
    <Framer>
      <div className="p-2 sm:p-4">
        <TransactionDetail result={result}/>
      </div>
    </Framer>
  );
}
