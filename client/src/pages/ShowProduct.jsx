import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const ShowProduct = () => {
  const location = useLocation();
  const {subcategory} = useParams();
  const getProduct = location?.state || null;
  const Product = () => {
    return (
      <>
        <div className="grid  lg:grid-cols-2 gap-8 w-[80%] mx-auto py-10 ">
          <div className="flex flex-col gap-5 basis-[50%] overflow-hidden">
            <div className="border">
              <img
                src="https://eauto.co.in/cdn/shop/products/original-honda-front-brake-disc-caliper-for-cb-hornet-160-r-580_700x.jpg?v=1663771966"
                alt=""
              />
            </div>
            <div className="w-full border hidden lg:flex bg-white py-5 px-5 flex-col gap-10">
              <div className="flex flex-col gap-16 text-left">
                <h1 className="font-bold text-2xl">DESCRIPTION</h1>
                <p className="text-xl sm:text-2xl  font-semibold">
                  {getProduct.description} Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Adipisci, explicabo unde error
                  odio perferendis recusandae. Iusto impedit ut
                </p>
              </div>
              <div className="flex flex-col gap-8">
                <h1 className="font-bold text-2xl">Special Features</h1>
                <ul className="list-disc pl-5">
                  <li className="text-lg font-medium">
                    Constructed for better heat dissipation to reduce noise
                  </li>
                  <li className="text-lg font-medium">
                    High tear resistance and stability
                  </li>
                  <li className="text-lg font-medium">Long Service Life</li>
                  <li className="text-lg font-medium">
                    Use of quality construction material to ensure high level of
                    performance
                  </li>
                  <li className="text-lg font-medium">Beautiful aesthetics</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full h-fit md:sticky md:top-[30%]">
            <div className="w-full border bg-white py-5 px-5 flex flex-col gap-10">
            <div className="flex flex-col gap-3 text-justify">
                <h1 className="font-bold text-2xl">{getProduct.title}</h1>
                <p className="text-xl font-normal text-cyan-500">
                  {getProduct.sparebrand}
                </p>
            </div>
            <div className="py-5 border-y">
                <div className="flex gap-10 mb-4">
                  <p className="font-bold text-lg">Price :</p>
                  <h1 className="text-red-500 font-semibold text-xl">{getProduct.price}</h1>
                </div>
                <div className="flex gap-10 mb-4">
                  <p className="font-bold text-lg">Stock :</p>
                  <h1 className="text-green-700 capitalize font-semibold text-xl">{getProduct.stock || "in stock"}</h1>
                </div>
                <button className="px-5 py-3 bg-black text-white" onClick={()=>addItemsToTheCart({category:subcategory,image:getProduct.src,title:getProduct.title,sparebrand:getProduct.sparebrand})}>Add To Cart</button>
            </div>
              <div className="flex flex-col gap-5 text-justify">
                <h1 className="font-bold text-lg">Vehicle Compatibility</h1>
                <div className="grid grid-cols-3 gap">
                  {
                    getProduct.compatibleModal.map((val)=>{
                     return (
                    <div>
                    <button className="text-lg font-medium p-2 bg-black text-white rounded">
                    {val.bikeName}
                    </button>
                       <ul className="p-3 font-medium">
                       {
                          val.modelNumber.map((item)=>{
                            return (
                              <li className="text-[16px] font-medium">
                                {item}
                              </li>
                            )
                          })
                        }
                       </ul>
                    </div>
                     )
                    })
                  }
                </div>
              </div>
            </div>
            <div className="w-full border lg:hidden bg-white py-5 px-5 flex flex-col gap-10">
              <div className="flex flex-col gap-16 text-justify">
                <h1 className="font-bold text-2xl">DESCRIPTION</h1>
                <p className="text-2xl font-semibold">
                  {getProduct.description} Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Adipisci, explicabo unde error
                  odio perferendis recusandae. Iusto impedit ut
                </p>
              </div>
              <div className="flex flex-col gap-8">
                <h1 className="font-bold text-2xl">Special Features</h1>
                <ul className="list-disc pl-5">
                  <li className="text-lg font-medium">
                    Constructed for better heat dissipation to reduce noise
                  </li>
                  <li className="text-lg font-medium">
                    High tear resistance and stability
                  </li>
                  <li className="text-lg font-medium">Long Service Life</li>
                  <li className="text-lg font-medium">
                    Use of quality construction material to ensure high level of
                    performance
                  </li>
                  <li className="text-lg font-medium">Beautiful aesthetics</li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
      </>
    );
  };

  return <Product />;
};

export default ShowProduct;
