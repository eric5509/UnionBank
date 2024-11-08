import Framer from "@/lib/Framer";
import AccountTitle from "@/components/account/AccountTitle";
import State from "@/components/account/State";
import AccountsTables from "@/components/account/AccountsTables";

export default async function AccountsPage() {
  const data = await fetch('http://localhost:5000/accounts')
  const response = await data.json()
  const results = response.data
  return (
    <Framer>
        <AccountTitle />
        <State results={results}/>
        <AccountsTables />
    </Framer>
  );
}
