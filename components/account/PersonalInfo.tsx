export default function PersonalInfo() {
  return (
    <div className="p-4 text-white border-2 rounded-2xl shadow-md mt-7">
      <div className="flex text-lg font-bold items-center justify-between">
        <p>Personal Information</p>
        <p className="font-medium text-sm px-5 py-2 cursor-pointer duration-300 hover:scale-105 active:scale-100 bg-red-500 rounded-md">
          Edit
        </p>
      </div>
      <div className="grid mt-5 grid-cols-4 gap-4">
        <div className="">
          <p className="text-gray-400">Fullname </p>
          <p className="font-semibold">Anne Mayers Paige</p>
        </div>
         
        <div className="">
          <p className="text-gray-400">Email </p>
          <p className="font-semibold">anne@gmail.com</p>
        </div>
        <div className="">
          <p className="text-gray-400">Phone </p>
          <p className="font-semibold">+2313432342</p>
        </div>
        <div className="">
          <p className="text-gray-400">Gender </p>
          <p className="font-semibold">Female</p>
        </div>
        <div className="">
          <p className="text-gray-400">Date of Birth </p>
          <p className="font-semibold">20-04-1975</p>
        </div>
        <div className="">
          <p className="text-gray-400">Occupation </p>
          <p className="font-semibold">Nurse</p>
        </div>
        <div className="">
          <p className="text-gray-400">Marital Status </p>
          <p className="font-semibold">Divorced</p>
        </div>
        <div className="">
          <p className="text-gray-400">Nationality </p>
          <p className="font-semibold">American</p>
        </div>
      </div>
    </div>
  );
}
