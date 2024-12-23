import React from "react";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const NavMenuDropDown = ({navDataTest}) => {
  const [visible, setVisible] = useState(false);
  const key = Object.keys(navDataTest)
  console.log(navDataTest[`${key[0]}`])
  return (
      <>
      <div className="bg-white border-t-2 hidden lg:block">
            <nav className="flex flex-wrap mx-auto gap-5 text-[16px] px-5 py-5">      
                  <div className='relative'>
                    <div className="flex justify-center items-center gap-2 transition-[color] duration-300 ease-in-out hover:text-blue-500" >{key[0]}
                    <span className="mt-1 rotate-90">{<IoIosArrowForward/>}</span>
                    </div>
                    {/* <div className="px-5 py-4 absolute bg-zinc-400">
                        {
                          
                        }
                    </div> */}
                  </div>
                  <div className='relative'>
                    <div className="flex justify-center items-center gap-2 transition-[color] duration-300 ease-in-out hover:text-blue-500" >{key[1]}
                    <span className="mt-1 rotate-90">{<IoIosArrowForward/>}</span>
                    </div>
                  </div>
                  <div className='relative'>
                    <div className="flex justify-center items-center gap-2 transition-[color] duration-300 ease-in-out hover:text-blue-500" >{key[2]}
                    <span className="mt-1 rotate-90">{<IoIosArrowForward/>}</span>
                    </div>
                  </div>
              <div>
                About Us
              </div>      
            </nav>
        </div>
      </>
  );
};

export default NavMenuDropDown;
