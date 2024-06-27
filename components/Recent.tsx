import { BsPeopleFill, BsPlusLg } from 'react-icons/bs';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

function Recent() {
  return (
    <div className="bg-[#FFFFFF] shadow-sm border-2 w-full rounded-lg mt-5">
      <div className="flex items-center pl-3 pt-1">
        <h1 className="text-[13px]">Recent</h1>
        <div className="w-[180px] pl-[150px] text-white hover:text-[#00000099]">
          <p className="h-10 w-10 pl-1 pt-1 hover:bg-gray-200 rounded-full">
            <MdOutlineKeyboardArrowUp className="h-8 w-8" />
          </p>
        </div>
      </div>
      <div className="cursor-pointer">
        <ul className="text-[#00000099]">
          <li className="flex items-center pt-[2px] space-x-2 hover:bg-gray-200 text-[#00000099] h-6 pl-4 hover:text-[#000000E6]">
            <BsPeopleFill className="text-[#00000099]" />
            <span className="text-[13px] hover:text-[#000000E6]">All thing JavaSript</span>
          </li>
          <li className="flex items-center pt-[2px] space-x-2 hover:bg-gray-200 h-6 pl-4">
            <BsPeopleFill className="text-[#00000099]" />
            <span className="text-[13px] hover:text-[#000000E6]">User Experience Design (UX)</span>
          </li>
          <li className="flex items-center pt-[2px] space-x-2 hover:bg-gray-200 h-6 pl-4">
            <BsPeopleFill className="text-[#00000099]" />
            <span className="text-[13px] hover:text-[#000000E6]">Comunidad Practica Ya!</span>
          </li>
          <li className="flex items-center pt-[2px] space-x-2 hover:bg-gray-200 h-6 pl-4">
            <BsPeopleFill className="text-[#00000099]" />
            <span className="text-[13px] hover:text-[#000000E6]">Digital Marketing</span>
          </li>
          <li className="flex items-center pt-[2px] space-x-2 hover:bg-gray-200 h-6 pl-4">
            <BsPeopleFill className="text-[#00000099]" />
            <span className="text-[13px] hover:text-[#000000E6]">Java Developers Community</span>
          </li>
        </ul>
      </div>
      <div className="flex items-center cursor-pointer">
        <p className="hover:underline text-[#0A66C2] text-[14px] font-semibold pl-3 pt-1">Groups</p>
        <div className="w-[180px] pl-[142px] text-white hover:text-[#00000099]">
          <p className="h-10 w-10 pl-1 pt-1 hover:bg-gray-200 rounded-full">
            <MdOutlineKeyboardArrowUp className="h-8 w-8" />
          </p>
        </div>
      </div>

      
      <div className="cursor-pointer">
        <ul className="text-[#00000099]">
          <li className="flex items-center pt-[2px] space-x-2 hover:bg-gray-200 text-[#00000099] h-6 pl-4 hover:text-[#000000E6]">
            <BsPeopleFill className="text-[#00000099]" />
            <span className="text-[13px] hover:text-[#000000E6]">MySQL</span>
          </li>
          <li className="flex items-center pt-[2px] space-x-2 hover:bg-gray-200 h-6 pl-4">
            <BsPeopleFill className="text-[#00000099]" />
            <span className="text-[13px] hover:text-[#000000E6]">User Experience Design (UX)</span>
          </li>
          <li className="flex items-center pt-[2px] space-x-2 hover:bg-gray-200 h-6 pl-4">
            <BsPeopleFill className="text-[#00000099]" />
            <span className="text-[13px] hover:text-[#000000E6]">Python Developers</span>
          </li>
        </ul>
      </div>
      <div className="hover:bg-gray-200 pl-4 mt-2 w-[245px] hover:text-[#000000E6] cursor-pointer flex items-center text-[#00000099] text-[14px] font-semibold">
        <h1>Show More</h1>
        <p>
          <MdOutlineKeyboardArrowUp className="h-8 w-8 rotate-180" />
        </p>
      </div>
      <div className="flex items-center cursor-pointer">
        <p className="hover:underline text-[#0A66C2] text-[14px] font-semibold pl-3 pt-1">Groups</p>
        <div className="w-[143px] pl-[148px] text-[#00000099]">
          <p className="h-10 w-10 pl-3 pt-3 hover:bg-gray-200 rounded-full">
            <BsPlusLg className="h-4 w-4" />
          </p>
        </div>
      </div>
      <div className="cursor-pointer">
        <p className="hover:underline text-[#0A66C2] text-[14px] font-semibold pl-3 pt-1">Followed Hashtags</p>
      </div>
      <div className="hover:bg-gray-200 rounded-br-lg rounded-bl-lg text-center border-t mt-2 h-12">
        <h1 className="pt-3 cursor-pointer text-[#00000099] text-[15px] font-semibold">See more</h1>
      </div>
    </div>
  );
}

export default Recent;
