import { CiSearch } from "react-icons/ci";

export default function TopBar() {
 return (
   <div className="h-[13%] w-full border-b-2 flex justify-between pl-2">

    <span className="text-[200%] font-bold text-white self-end">xinga.me</span>

    <div className="w-2/3 flex">
        <input type="search" placeholder="Search" className="h-full w-full text-[150%] border-none text-white" />
        <button className="p-[2%] h-full w-1/6 items-center justify-center cursor-pointer"><CiSearch className="size-full" color="white" /></button>        
    </div>

   </div>
 );
}