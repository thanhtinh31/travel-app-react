import { MdOutlineLocationOn, MdSearch } from "react-icons/md";
function Search({setLocation,city,handleClick,citySuggest,setCity}) {
  return (
    <div className="flex flex-row justify-center my-4 text-maintext">
      <div className="flex flex-row w-full pl-8 sm:w-3/4 items-center relative space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="Search..."
          className="bg-overlay text-slate-300 capitalize p-2 w-full rounded-md shadow-xl focus:outline-none"
        />

        <div className="absolute right-0 px-2 py-1 border-l-2 cursor-pointer text-slate-300">
          <MdSearch size={25} />
        </div>
        <div className="flex flex-col items-center absolute max-h-52 w-full overflow-y-scroll scroll-m-0 scrollbar bg-overlay left-0 top-12 rounded-md shadow-xl">
          {citySuggest.length > 0 &&
            citySuggest.map((city) => (
              <div
                onClick={() => {handleClick(city); setLocation(city)}}
                className=" flex w-full py-1 px-6 justify-center text-slate-300 border-b-2 border-red-50"
              >
                {city}
              </div>
            ))}
        </div>
      </div>
      <div className="flex flex-row w-1/4 justify-around items-center">
        <MdOutlineLocationOn
          size={25}
          className="text-slate-300 cursor-pointer transition ease-out hover:scale-110"
        />
      </div>
    </div>
  );
}

export default Search;