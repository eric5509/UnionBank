import AccountModal from "@/components/account/AccountModal"
import Sidebar from "@/components/nav/Sidebar"
import Backdrop from "@/components/shared/Backdrop"

type Props = {
    children: React.ReactNode
}

export const navHeight = "64px"
export default function layout({ children }: Props) {
    return (
        <div className="h-screen w-full grid grid-cols-[auto_1fr]">
            <Sidebar />
            <div className="flex flex-col h-full overflow-y-auto">
                <div style={{height: `${navHeight}`}} className={` border-b-2 w-full`}></div>
                <div className="flex-1 overflow-y-auto">
                    {children}
                </div>
            </div>
            <Backdrop>
                <AccountModal />
            </Backdrop>
        </div>
    )
}
