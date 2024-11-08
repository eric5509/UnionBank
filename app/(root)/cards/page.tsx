import CreditCard from "@/components/creditcard/CreditCard";
import Title from "@/components/shared/Title";
import Framer from "@/lib/Framer";

export default function CardsPage() {
    return (
        <Framer>
            <div className="">
                <Title title="Credit Cards" />
                <div className="p-5 pt-0 grid grid-cols-3 gap-5">
                    {[1, 2, 3].map((el, key) => (
                        <CreditCard track={key} key={key}/>
                    ))}
                </div>
            </div>
        </Framer>
    )
}
