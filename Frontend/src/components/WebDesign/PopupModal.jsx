import { IoClose } from "react-icons/io5";
import { Button } from "./Button";

export const PopupModal = ({ isOpen, setIsPopUpOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="min-h-screen bg-black/50 fixed w-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-blue-100 p-6 mx-4 gap-10 rounded-sm shadow-md shadow-indigo-100">
        <div className="flex flex-row justify-between text-lg font-semibold gap-2">
          <h2>Get your Free Web Design Sample Report</h2>
          <IoClose
            onClick={() => setIsPopUpOpen(false)}
            className="text-2xl"
          />
        </div>
        <form className="flex flex-col gap-10 w-full">
          <div className="flex flex-col gap-10">
            <input
              type="text"
              placeholder="Name"
              className="border-b border-gray-600 px-2 outline-0"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-b border-gray-600 px-2 outline-0"
            />
          </div>
          <Button text={"Download it Now!"} />
        </form>
      </div>
    </div>
  );
};