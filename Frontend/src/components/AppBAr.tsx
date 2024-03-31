import { useState } from "react";
import { Link } from "react-router-dom";

export const Appbar = () => {
  return (
    <div className="">
      <div className="flex justify-between border-b border-slate-950 ">
        <div className="p-2 flex items-center text-lg text-red-900 font-bold">
          <div className="hidden lg:block sm:hidden">
            EventBrite
          </div>
          <div className="lg:hidden sm:block pl-2 flex justify-center items-center text-[30px] pb-2">
            𝖊
          </div>
        </div>
        <div className="flex p-2 font-semibold">
          <div className="hidden sm:block">
            <button type="button" className="hover:bg-slate-100 focus:outline-none text-black p-2 rounded-full py-1.5 text-center me-1 mb-2 mr-2 text-sm hover:underline underline-offset-2">Create Event</button>
          </div>
          <div className="hidden sm:block">
            <button type="button" className="hover:bg-slate-100 focus:outline-none text-black p-2 rounded-full py-1.5 text-center me-1 mb-2 mr-2 text-sm hover:underline underline-offset-2">Your Tickets</button>
          </div>
          <div>
            <button type="button" className="hover:bg-slate-100 focus:outline-none text-black p-2 rounded-full py-1.5 text-center me-1 mb-2 mr-2 text-sm hover:underline underline-offset-2">Log In</button>
          </div>
          <div className="lg:hidden sm:block">
            <DropDown />
          </div>
        </div>
      </div>
    </div>
  );
  
}

export function DropDown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        id="dropdownDividerButton"
        className="text-black font-medium rounded-lg text-sm px-3 py-1.5 text-center inline-flex items-center"
        type="button"
        onClick={toggleMenu}
      >
        More 
        <svg
          className={`w-2.5 h-2.5 ms-2 transition-transform transform ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 z-10 bg-white divide-y divide-gray-200 rounded-lg shadow w-40 dark:bg-gray-800 dark:divide-gray-600">
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <Link to={'/dashboard'} className="block px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to={'/create-event'} className="block px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700">
                Create Event
              </Link>
            </li>
            <li>
              <Link to={'/tickets'} className="block px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700">
                Tickets
              </Link>
            </li>
          </ul>
          <div className="py-1">
            <Link
              to={'/'}
              className="block px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200"
            >
              Help & Support
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
