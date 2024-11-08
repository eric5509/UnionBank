import SenderReciever from "@/components/transfer/TransferDetail";
import Framer from "@/lib/Framer";

type Params = {
  params: {
    id: string;
  };
};

export default function page({ params }: Params) {
  return (
    <Framer>
      <div className="p-2 md:p-3 lg:p-6">
        <SenderReciever />
      </div>
    </Framer>
  );
}
