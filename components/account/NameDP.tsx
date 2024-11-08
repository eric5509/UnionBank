import { Edit2 } from "lucide-react";
import { BiEdit } from "react-icons/bi";

export default function NameDP() {
  return (
    <div className="text-white">
        <div className="flex flex-col gap-5 items-center justify-center">
        <div className="h-36 w-36 rounded-full border-2 relative">
          <img src="https://img.freepik.com/free-photo/close-up-shot-adorable-dark-skinned-females-with-confident-look-has-curly-hair-ponders-about-something-african-american-woman-has-rest-against-cafe-interior_273609-2383.jpg" className="h-full w-full object-cover rounded-full" alt="" />
          <div className="h-10 w-10 grid place-content-center cursor-pointer duration-300 hover:scale-105 active:scale-100 rounded-full border-2 absolute bottom-0 right-3 activeBg">
            <BiEdit />
          </div>
        </div>
        <p className="text-[27px] font-medium uppercase">Anne Mayers Paige</p>

        </div>
    </div>
  )
}
