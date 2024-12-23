import { Button } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useShop } from "../context/ShopProvider";

const Categories = () => {
  const { subcategory } = useParams();
  const [showFilter, setShowFilter] = useState(false);
  const [spareArray, setSpareArray] = useState([]);
  const [spareCategory, setSpareCategory] = useState([]); 
  const [productData, setProductData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [bikeNames, setBikeNames] = useState([]);
  const [bikeArray, setBikeArray] = useState([]);
  const [modelNumbers, setModelNumbers] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]); 
  const {tabsData} = useShop();
  const data = tabsData
  useEffect(() => {
    const foundData = data.find((val) => val.name === subcategory);
    if (foundData) {
      setProductData(foundData.data);
      segregateData(foundData.data);
    }
  }, [subcategory]);

  const navigate = useNavigate();
  const segregateData = (productData) => {
    const spareBrands = [...new Set(productData.map((val) => val.sparebrand))];
    const bikeNameSet = new Set();
    const modelNumberSet = new Set();
    productData.forEach((product) => {
      product.compatibleModal.forEach((val) => {
        bikeNameSet.add(val.bikeName);
        val.modelNumber.forEach((model) => {
          modelNumberSet.add(model);
        });
      });
    });
    setBikeArray([...bikeNameSet]);
    setModelNumbers([...modelNumberSet]);
    setSpareArray(spareBrands);
  };

  useEffect(() => {
    applyFilters();
  }, [spareCategory, selectedModels, bikeNames, productData]);

  function navigateToProduct(path, val) {
    navigate(path, { state: val });
  }
  const {addItemsToTheCart} = useShop();
  const applyFilters = () => {
    let filteredProducts = productData;

    if (spareCategory.length > 0) {
      filteredProducts = filteredProducts.filter((val) =>
        spareCategory.includes(val.sparebrand)
      );
    }

    if (selectedModels.length > 0) {
      filteredProducts = filteredProducts.filter((product) => {
        return product.compatibleModal.some((modal) =>
          modal.modelNumber.some((model) => selectedModels.includes(model))
        );
      });
    }

    if (bikeNames.length > 0) {
      filteredProducts = filteredProducts.filter((product) => {
        return product.compatibleModal.some((modal) =>
          bikeNames.includes(modal.bikeName)
        );
      });
    }

    setFilterData(filteredProducts);
  };

  const handleSpareCategorySelection = (brand) => {
    setSpareCategory((prevSelected) => {
      if (prevSelected.includes(brand)) {
        return prevSelected.filter((item) => item !== brand);
      } else {
        return [...prevSelected, brand];
      }
    });
  };

  const handleModelSelection = (model) => {
    setSelectedModels((prevSelected) => {
      if (prevSelected.includes(model)) {
        return prevSelected.filter((item) => item !== model); // Deselect model
      } else {
        return [...prevSelected, model]; // Select model
      }
    });
  };

  const handleBikeNameSelection = (bikeName) => {
    setBikeNames((prevSelected) => {
      if (prevSelected.includes(bikeName)) {
        return prevSelected.filter((item) => item !== bikeName); // Unselect bike name
      } else {
        return [...prevSelected, bikeName]; // Select bike name
      }
    });
  };

  return (
    <>
      <div className="bg-[#f3f5f6] flex flex-col md:flex-row gap-1 sm:gap-10 pt-10 border-t px-5 sm:px-10">
        <div className="min-w-60 bg-white h-fit p-8">
          <p
            className="my-2 text-xl flex items-center cursor-pointer gap-2"
            onClick={() => setShowFilter((prev) => !prev)}
          >
            FILTERS
            <img
              src="path-to-arrow-icon"
              className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
              alt=""
            />
          </p>

          {/* Filter by Spare Brand */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="mb-3 font-medium text-blue-600 text-xl">
              Spare Brand
            </p>
            {spareArray.map((val, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-2 font-light text-gray-700"
              >
                <p className="flex gap-2">
                  <input
                    type="checkbox"
                    name="sparebrand"
                    value={val}
                    checked={spareCategory.includes(val)}
                    onChange={() => handleSpareCategorySelection(val)}
                    className="w-3"
                  />
                  {val}
                </p>
              </div>
            ))}
          </div>

          {/* Filter by Vehicle Model */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="mb-3 text-xl font-medium text-blue-500">
              Vehicle Model
            </p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              {modelNumbers.map((model, idx) => (
                <p key={idx} className="flex gap-2">
                  <input
                    type="checkbox"
                    value={model}
                    checked={selectedModels.includes(model)}
                    onChange={() => handleModelSelection(model)}
                    className="w-3"
                  />
                  {model}
                </p>
              ))}
            </div>
          </div>

          {/* Filter by Bike Name */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="mb-3 text-xl font-medium text-blue-500">Bike Name</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              {bikeArray.map((bikeName, idx) => (
                <p key={idx} className="flex gap-2">
                  <input
                    type="checkbox"
                    value={bikeName}
                    checked={bikeNames.includes(bikeName)} // Use bikeNames to check if selected
                    onChange={() => handleBikeNameSelection(bikeName)}
                    className="w-3"
                  />
                  {bikeName}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex flex-col">
            <div className="bg-white text-black">
              {/* <img
                src="https://eauto.co.in/cdn/shop/collections/brake-disc-caliper-collection-eauto-co-in-banner_1500x.jpg?v=1619690193"
                alt=""
                className="w-full h-[150px] object-cover hidden sm:block"
              /> */}
              <p className="text-[18px] font-semibold px-5 py-8 sm:text-2xl lg:text-3xl">
                {subcategory}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y">
            {filterData.map((item, val) => {
              let classname =
                val === 0 || val === filterData.length - 1
                  ? " border-t-[1px] border-b-[1px]"
                  : "";
              return (
                <div className="bg-white border border-gray-200 shadow flex flex-col justify-between">
                  <img
                    className="h-[200px] w-full object-cover transition-[opacity] duration-300 hover:opacity-65"
                    src={item.src}
                    onClick={() => {
                      navigateToProduct(
                        `/collections/${subcategory}/${item.title}`,
                        item
                      )}}
                    alt=""
                  />
                  <div className="p-5">
                    <div>
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.title}
                      </h5>
                    </div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {item.sparebrand}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.price}
                    </p>
                    <div className="flex gap-4 flex-col sm:flex-row" onClick={()=>addItemsToTheCart({category:subcategory,image:item.src,title:item.title,sparebrand:item.sparebrand})}>
                      <button className="px-4 mx-auto w-full bg-cyan-400 py-2 rounded-lg text-white font-semibold transition duration-300 hover:bg-cyan-500">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
