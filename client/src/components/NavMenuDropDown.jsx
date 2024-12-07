import React from "react";
import { useState } from "react";

const NavMenuDropDown = ({title,subcategory,idx}) => {
  const [visible, setVisible] = useState(false);
  const categories = [
    {
      title:"Category-1",
      subcategory:new Array(5).fill(10)
    },
    {
      title:"Category-2",
      subcategory:new Array(5).fill(10)
    },
    {
      title:"Category-3",
      subcategory:new Array(5).fill(10)
    },
    {
      title:"Category-4",
      subcategory:new Array(5).fill(10)
    },
    {
      title:"Category-5",
      subcategory:new Array(5).fill(10)
    },
    {
      title:"Category-6",
      subcategory:new Array(5).fill(10)
    },
    {
      title:"Category-7",
      subcategory:new Array(5).fill(10)
    }
  ]
  return (
      // <div>
      //   <div className="text-white text-lg flex gap-2 items-center h">
      //     {title}
      //    {subcategory && <span
      //       className={`py-2 mt-1 ${
      //         visible ? " rotate-90" : " rotate-180"
      //       } transition-all`}
      //       onClick={() => setVisible((prev) => !prev)}
      //     >
      //       <img src="dropdown_icon.png" alt="" className="w-2" />
      //     </span>}
      //   </div>
      //   {
      //       visible &&
      //       <div className="absolute w-[fit-content] z-10 px-3 py-2 top-[46px] bg-zinc-700 text-white shadow-sm" key={idx}>
      //           {
      //               subcategory?.map((item,idx)=>{
      //                 return (
      //                   <li>{item}</li>
      //                 )  
      //               })
      //           }
      //       </div>
      //   }
      // </div>
      <>
      </>
  );
};

export default NavMenuDropDown;
