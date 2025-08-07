// import { useState, useEffect } from 'react';
import LeftView from "./components/LeftSide/LeftView";
import RightView from "./components/RightSide/RightView";

export default function Home() {
 return (
   <div className="bg-principal h-screen w-screen flex justify-center items-center">
      {/* //Main View */}
      <div className="bg-terciaria h-[80%] w-[90%] rounded-2xl flex">
        <div className="w-1/5 border-2 rounded-l-lg">
          <LeftView />
        </div>
        <div className="w-4/5 border-2 rounded-r-lg">
          <RightView section="home" />
        </div>
      </div>     
   </div>
 );
}