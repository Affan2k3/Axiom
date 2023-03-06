import React, { useState } from 'react';
import { countries } from './countries';
import { product } from './prodata';

const Dropup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropup = () => setIsOpen(!isOpen);

  return (
    <div className="">
      <button
        className="block w-full py-2 pl-3 pr-10 text-left text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={toggleDropup}
      >
        Select an option
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg
            className={`w-5 h-5 text-gray-400 transition ${
              isOpen ? '-rotate-180' : 'rotate-0'
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.707a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L10 4.414l-3.293 3.293a1 1 0 0 1-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
      {isOpen && (
        <ul>
            {countries.map((countries) =>(
                <li key={countries.cname}>
                    <div className='flex'>
                        
                            <div>{countries.flag}
                            <div>{countries.cname}</div>
                            </div>
                        
                    </div>
                </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Dropup;