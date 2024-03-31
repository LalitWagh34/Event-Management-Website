
import { useState } from 'react';

export const Category =()=>{
    return <div className='border-b border-black pb-10 bg-gray-300'>
        <div className="text-3xl pl-14 pt-10 ">
            Trusted by <br/>
            Thousands of <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
              <span className="relative text-white">Events</span>
            </span> and <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
    <span className="relative text-white">peoples</span>
  </span>
        </div>
        <div className='pt-10 lg:flex justify-center sm:gap-6  '>
            <div className='sm:pb-9 '>
                < DropdownSearch />
            </div>
            <div className=" sm:pl-24">
                <Search/>
            </div>
        </div>
      
    </div>
}



export function DropdownSearch({}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleCategoryClick = ({category}:{category:string}) => {
      setSelectedCategory(category);
      toggleDropdown();
    };
  
    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Selected category:', selectedCategory);
      console.log('Search query:', searchQuery);
      // Add your search logic here
    };
  
    return (
      <div className="max-w-lg mx-auto">
        <div className="flex items-center">
          <div className="relative">
            <button
              id="dropdown-button"
              className="py-2.5 px-4 text-sm font-medium flex justify-center items-center text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
              onClick={toggleDropdown}
            >
              {selectedCategory || 'All categories'}{' '}
              <svg
                className={`w-2.5 h-2.5 ml-2  transition-transform ${
                  isOpen ? 'transform rotate-180' : ''
                }`}
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {isOpen && (
              <div className="absolute top-full left-0 w-48 bg-white border border-gray-300 shadow-lg rounded-lg mt-1">
                <ul className="py-2 text-sm text-gray-700">
                  <li
                    className="py-1 px-4 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleCategoryClick( {category :'Music'})}
                  >
                 Music
                  </li>
                  <li
                    className="py-1 px-4 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleCategoryClick({category:'Dance'})}
                  >
                    Dance
                  </li>
                  <li
                    className="py-1 px-4 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleCategoryClick({category:'Dance'})}
                  >
                    Science
                  </li>
                  <li
                    className="py-1 px-4 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleCategoryClick({category:'Dance'})}
                  >
                    Logos
                  </li>
                </ul>
              </div>
            )}
          </div>
          <form className="ml-4 flex" onSubmit={handleSubmit}>
            <input
              type="search"
              className="p-2.5 text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[225px]"
              value={selectedCategory ? ` ${selectedCategory}` : 'Search'}
              onChange={handleSearchChange}
            />
            <button
              type="submit"
              className="py-2.5 px-4 ml-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }


  export function Search() {
    return (
      <div>
        <form className="lg:w-[400px] max-w-sm mx-auto">
          <label
            id="default-search"
            className="mb-2 text-sm font-medium sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
            <button
              type="submit"
              className="text-white absolute  end-1 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
  