export default function AddressInfo() {
    return (
      <div className="p-4 text-white border-2 rounded-2xl shadow-md mt-7">
        <div className="flex text-lg font-bold items-center justify-between">
          <p>Address Information</p>
          <p className="font-medium text-sm px-5 py-2 cursor-pointer duration-300 hover:scale-105 active:scale-100 bg-red-500 rounded-md">
            Edit
          </p>
        </div>
        <div className="grid mt-5 grid-cols-3 gap-4">
          <div className="">
            <p className="text-gray-400">Country </p>
            <p className="font-semibold">United States of America</p>
          </div>
           
          <div className="">
            <p className="text-gray-400">ZIP Code </p>
            <p className="font-semibold">62701</p>
          </div>
          <div className="">
            <p className="text-gray-400">State </p>
            <p className="font-semibold">Illinois</p>
          </div>
          <div className="">
            <p className="text-gray-400">City </p>
            <p className="font-semibold">Springfield</p>
          </div>
          <div className="">
            <p className="text-gray-400">Street Address </p>
            <p className="font-semibold">1234 Maple Avenue</p>
          </div>
          <div className="">
            <p className="text-gray-400">Work Address </p>
            <p className="font-semibold">1234 Maple Avenue</p>
          </div>
        </div>
      </div>
    );
  }
  