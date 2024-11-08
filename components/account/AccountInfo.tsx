export default function BankInfo() {
    return (
      <div className="p-4 text-white border-2 rounded-2xl shadow-md mt-7">
        <div className="flex text-lg font-bold items-center justify-between">
          <p>Bank Information</p>
          <p className="font-medium text-sm px-5 py-2 cursor-pointer duration-300 hover:scale-105 active:scale-100 bg-red-500 rounded-md">
            Edit
          </p>
        </div>
        <div className="grid mt-5 grid-cols-4 gap-4">
        <div className="">
            <p className="text-gray-400">Bank Name </p>
            <p className="font-semibold">First Union Bank</p>
          </div>
          <div className="">
            <p className="text-gray-400">Account Number </p>
            <p className="font-semibold">2635422428</p>
          </div>
          <div className="">
            <p className="text-gray-400">Routing Number </p>
            <p className="font-semibold">32332635428</p>
          </div>
          <div className="">
            <p className="text-gray-400">Account Type </p>
            <p className="font-semibold">Checking</p>
          </div>
          <div className="">
            <p className="text-gray-400">Status </p>
            <p className="font-semibold">Pending</p>
          </div>
        </div>
      </div>
    );
  }
  