import { useState, useEffect, useContext, createContext, useMemo } from "react";


const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [search, setSearch] = useState(""); 
  const [AllSpareParts, setAllSpareParts] = useState([]);
  const [cartItem,setCartItem] = useState([]);
  const [totalItemInCart,setTotalItemInCart] = useState(0);
  useEffect(() => {
    seregateData(); 
  }, []);

  useEffect(() => {
    if (search) {
      const filteredParts = tabsData.flatMap((val) =>
        val.data
          .filter((part) =>
            part.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((part) => ({
            category: val.name,
            data: part,
          }))
      );
      setAllSpareParts(filteredParts);
    } else {
      seregateData(); 
    }
  }, [search]);
  const seregateData = () => {
    setAllSpareParts(
      tabsData
        .map((val) =>
          val.data.map((data) => ({
            category: val.name,
            data: data,
          }))
        )
        .flat()
    );
  };

  useEffect(()=>{
    console.log(cartItem)
  },[totalItemInCart])

  const addItemsToTheCart = (data) => {
    setTotalItemInCart(prev=>prev+1);
    const quantity = 1;
    const existingItemIndex = cartItem.findIndex((item) => item.title === data.title);
  
    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItem];
      updatedCart[existingItemIndex].quantity += quantity;
      setCartItem(updatedCart); 
    } else {

      const newItem = { ...data, quantity }; 
      setCartItem((prev) => [...prev, newItem]); 
    }
  };
  
  const removeItemsFromTheCart = (data) => {
    const existingItemIndex = cartItem.findIndex((item) => item.title === data.title);
  
    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItem];
      
      if (updatedCart[existingItemIndex].quantity > 1) {
        updatedCart[existingItemIndex].quantity -= 1;
      } else {
        updatedCart.splice(existingItemIndex, 1);
      }
  
      setCartItem(updatedCart);
    }
  };
  
  
const tabsData = [
    {
      // Brake Spare Part
      name: "Brake Clutch",
      src: "https://picsum.photos/200/300",
      data: [
        {
          title: "Front Disc Brake Master Cylinder Assembly",
          price: "Rs. 800.00",
          rating: null,
          sparebrand: "a",
          description: "Precision master cylinder for front disc brakes.",
          compatibleModal: [
            {
              bikeName: "Bajaj Pulsar",
              modelNumber: ["135", "150", "180", "200", "200 NS", "220"],
            },
          ],
          src: "https://picsum.photos/200/300",
        },
        {
          title: "Mukut Front Brake Disc Caliper",
          price: "Rs. 1,040.00",
          rating: null,
          sparebrand: "b",
          description:
            "High-performance brake disc caliper for specific models.",
          compatibleModal: [
            {
              bikeName: "Bajaj Pulsar",
              modelNumber: ["150", "150 NS", "160 NS", "180", "200", "220"],
            },
          ],
          src: "https://picsum.photos/200/300",
        },
        {
          title: "Rear Disc Brake Master Cylinder Assembly",
          price: "Rs. 1,710.00",
          rating: null,
          sparebrand: "b",
          description: "Rear master cylinder for reliable braking.",
          compatibleModal: [
            {
              bikeName: "Bajaj Pulsar",
              modelNumber: [
                "150 AS",
                "150 NS",
                "160 NS",
                "180",
                "200",
                "200 AS",
              ],
            },
          ],
          src: "https://picsum.photos/200/300",
        },
        {
          title: "Front Brake Disc Plate",
          price: "Rs. 1,790.00",
          rating: 14,
          sparebrand: "b",
          description: "Disc plate designed for enhanced braking performance.",
          compatibleModal: [
            {
              bikeName: "Bajaj Pulsar",
              modelNumber: ["200 NS", "200 RS"],
            },
          ],
          src: "https://picsum.photos/200/300",
        },
        {
          title: "Mukut Rear Disc Brake Plate",
          price: "Rs. 3,330.00",
          sparebrand: "a",
          rating: 11,
          description: "Rear brake disc plate for specific Pulsar models.",
          compatibleModal: [
            {
              bikeName: "Bajaj Pulsar",
              modelNumber: ["150", "150 NS", "160 NS", "180", "200", "220"],
            },
          ],
          src: "https://picsum.photos/200/300",
        },
        {
          title: "Rear Brake Disc Plate",
          price: "Rs. 950.00",
          rating: 10,
          sparebrand: "b",
          description: "High-quality rear disc plate for efficient braking.",
          compatibleModal: [
            {
              bikeName: "Bajaj Pulsar",
              modelNumber: ["150", "150 NS", "160 NS", "180", "200", "220"],
            },
          ],
          src: "https://picsum.photos/200/300",
        },
        {
          title: "Front Brake Disc Plate",
          price: "Rs. 1,470.00",
          rating: 3,
          sparebrand: "b",
          description: "High-performance disc plate for optimal braking.",
          compatibleModal: [
            {
              bikeName: "Bajaj Pulsar",
              modelNumber: ["150", "150 NS", "160 NS", "180", "200", "220"],
            },
          ],
          src: "https://picsum.photos/200/300",
        },
        {
          title: "Clutch Plate",
          price: "Rs. 4,229.00",
          rating: 7,
          sparebrand: "b",
          description: "High-quality clutch plate for smooth operation.",
          compatibleModal: [
            {
              bikeName: "Bajaj Pul",
              modelNumber: ["200 NS", "AS", "RS", "160 NS", "150 NS"],
            },
          ],
          src: "https://picsum.photos/200/300",
        },
        {
          title: "MK Clutch Assembly",
          price: "Rs. 1,210.00",
          rating: null,
          sparebrand: "a",
          description: "Clutch assembly for smooth and efficient performance.",
          compatibleModal: [
            {
              bikeName: "Bajaj Puls",
              modelNumber: ["200 NS", "AS", "RS", "160 NS", "150 NS"],
            },
          ],
          src: "https://picsum.photos/200/300",
        },
      ],
    },
    {
      name: "Sets",
      src: "https://picsum.photos/200/300",
      data: [
        {
          title: "Head Light Set",
          price: "Rs. 1,820.00",
          rating: 49,
          sparebrand: "a",
          description: "Complete headlight set for enhanced visibility.",
          compatibleModal: [
            {
              bikeName: "Bajaj Pulsar",
              modelNumber: ["200 NS", "160 NS"],
            },
          ],
          src: "https://picsum.photos/200/300",
        },
        {
          title: "MINDA Lock Set",
          price: "Rs. 1,040.00",
          rating: 44,
          sparebrand: "b",
          description: "Lock set for Bajaj Pulsar 200 NS models.",
          compatibleModal: [
            {
              bikeName: "Bajaj Pulsar",
              modelNumber: ["200 NS (BS3 Models)"],
            },
          ],
          src: "https://picsum.photos/200/300",
        },
        {
          title: "Spark Minda Ignition Lock Set",
          price: "Rs. 1,060.00",
          rating: 4,
          sparebrand: "c",
          description: "Ignition lock set for secure operation.",
          compatibleModal: [
            {
              bikeName: "Bajaj Pulsar",
              modelNumber: ["200 NS", "AS", "RS", "160 NS", "150 NS"],
            },
          ],
          src: "https://picsum.photos/200/300",
        },
        {
          title: "Spark Minda Ignition Lock Set",
          price: "Rs. 1,071.00",
          rating: 14,
          sparebrand: "d",
          description: "Ignition lock set for improved security.",
          compatibleModal: [
            {
              bikeName: "Bajaj Pulsar",
              modelNumber: ["200 NS", "AS", "RS", "160 NS", "150 NS"],
            },
          ],
          src: "https://picsum.photos/200/300",
        },
        {
          title: "Spark Minda Ignition Lock Set",
          price: "Rs. 750.00",
          rating: 8,
          sparebrand: "f",
          description: "High-security ignition lock set for BS4 models.",
          compatibleModal: [
            {
              bikeName: "Bajaj Pulsar",
              modelNumber: ["200 NS", "AS", "RS", "160 NS", "150 NS"],
            },
          ],
          src: "https://picsum.photos/200/300",
        },
        {
          title: "ROLON Chain Sprocket Kit",
          price: "Rs. 830.00",
          rating: 23,
          sparebrand: "a",
          description: "Chain sprocket kit for smooth gear shifts.",
          compatibleModal: [
            {
              bikeName: "Bajaj Pulsar",
              modelNumber: ["200 NS (BS3 Models)"],
            },
          ],
          src: "https://picsum.photos/200/300",
        },
      ],
    },
    {
      name: "Shock Absorber",
      src: "https://picsum.photos/200/300",
      data: [
        {
          title: "Rear Mono Shock Absorber",
          price: "Rs. 1,575.00",
          rating: null,
          description: "High-quality shock absorber for improved ride comfort.",
          compatibleModal: [
            {
              bikeName: "Bajaj Pulsar",
              modelNumber: ["200 NS", "AS", "RS", "160 NS", "150 NS"],
            },
          ],
          src: "https://picsum.photos/200/300",
        },
        {
          title: "ENDURANCE Rear Mono Shock Absorber",
          price: "Rs. 739.00",
          rating: null,
          description: "Rear mono shock absorber for smoother suspension.",
          compatibleModal: [
            {
              bikeName: "Bajaj Pulsar",
              modelNumber: ["200 NS", "AS", "RS", "160 NS", "150 NS"],
            },
          ],
          src: "https://picsum.photos/200/300",
        },
      ],
    },
    {
      name: "Fuel Pump Motor",
      src: "https://picsum.photos/200/300",
      data: [
        {
          title: "Mukut Fuel Pump Motor",
          price: "Rs. 2,600.00",
          rating: 16,
          description: "Fuel pump motor for efficient fuel delivery.",
          compatibleModal: [
            {
              bikeName: "Bajaj Pulsar",
              modelNumber: ["200 NS", "AS", "RS", "160 NS", "150 NS"],
            },
          ],
          src: "https://picsum.photos/200/300",
        },
        {
          title: "Techlon Starter Motor",
          price: "Rs. 919.00",
          rating: 7,
          description: "Reliable starter motor for quick engine ignition.",
          compatibleModal: [
            {
              bikeName: "Bajaj Pulsar",
              modelNumber: ["200 NS", "AS", "RS", "160 NS", "150 NS"],
            },
          ],
          src: "https://picsum.photos/200/300",
        },
      ],
    },
    {
      name: "CDI",
      src: "https://picsum.photos/200/300",
      data: [
        {
          title: "Eauto CDI",
          price: "Rs. 1,383.00",
          rating: 4,
          description: "Advanced CDI unit for efficient engine performance.",
          compatibleModal: [
            {
              bikeName: "Bajaj Pulsar",
              modelNumber: ["200 NS", "AS", "RS", "160 NS", "150 NS"],
            },
          ],
          src: "https://picsum.photos/200/300",
        },
      ],
    },
    {
      name: "Speedometer",
      src: "https://picsum.photos/200/300",
      data: [
        {
          title: "PRICOL Digital Speedometer",
          price: "Rs. 1,521.00",
          rating: 4,
          description: "Digital speedometer for accurate speed tracking.",
          compatibleModal: [
            {
              bikeName: "Bajaj Pulsar",
              modelNumber: ["200 NS", "AS", "RS", "160 NS", "150 NS"],
            },
          ],
          src: "https://picsum.photos/200/300",
        },
        {
          title: "PRICOL Digital Speedometer",
          price: "Rs. 1,313.00",
          rating: 5,
          description:
            "Speedometer for accurate speed tracking and diagnostics.",
          compatibleModal: [
            {
              bikeName: "Bajaj Pulsar",
              modelNumber: ["200 NS", "AS", "RS", "160 NS", "150 NS"],
            },
          ],
          src: "https://picsum.photos/200/300",
        },
        {
          title: "PRICOL Digital Speedometer",
          price: "Rs. 1,133.00",
          rating: 4,
          description: "Digital speedometer for improved tracking.",
          compatibleModal: [
            {
              bikeName: "Bajaj Pulsar",
              modelNumber: ["200 NS", "AS", "RS", "160 NS", "150 NS"],
            },
          ],
          src: "https://picsum.photos/200/300",
        },
      ],
    },
  ];

  const filteredSpareParts = useMemo(() => {
    return AllSpareParts.filter((part) =>
      part.data.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, AllSpareParts]);

  const transport = { tabsData,totalItemInCart,setSearch,cartItem,filteredSpareParts,setCartItem,addItemsToTheCart}; 

  return (
    <ShopContext.Provider value={transport}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;

export const useShop = () => {
  return useContext(ShopContext);
};


