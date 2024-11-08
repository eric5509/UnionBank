export default function IdentificationTaxInfo() {
    return (
      <div className="p-4 text-white border-2 rounded-2xl shadow-md mt-7">
        <div className="flex text-lg font-bold items-center justify-between">
          <p> Identification & Tax Information</p>
          <p className="font-medium text-sm px-5 py-2 cursor-pointer duration-300 hover:scale-105 active:scale-100 bg-red-500 rounded-md">
            Edit
          </p>
        </div>
        <div className="grid mt-5 grid-cols-3 gap-4">
        <div className="">
            <p className="text-gray-400">Social Security Number (SSN) </p>
            <p className="font-semibold">2873763552</p>
          </div>
         
          <div className="">
            <p className="text-gray-400">TAX ID Number </p>
            <p className="font-semibold">35261552727</p>
          </div>
          <div className="">
            <p className="text-gray-400">IMF Number </p>
            <p className="font-semibold">877646463634</p>
          </div>
        </div>
      </div>
    );
  }
  