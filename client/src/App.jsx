import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Collections from "./pages/Collections";
import CategoriesPage from "./pages/Categories";
import SignInModal from "./pages/SignIn";
import RegisterModal from "./pages/Register";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import ProfileOverview from "./components/ProfileOverview";
import Order from "./pages/Order";
import AddAddress from "./components/AddAddress";
import ShowProduct from "./pages/ShowProduct";
import BikeCollection from "./pages/BikeCollection";
import AboutUs from "./pages/AboutUs";
import OurPolicy from "./components/OurPolicy";
import { ContactUs } from "./pages/ContactUs";
import { useShop } from "./context/ShopProvider";
function App() {
  const NavbarData = {
    // "Spare by Bike":[
    //   {
    //     brandName:"Bajaj",
    //     model:[
    //       "Avenger 150 180 200",
    //       "Avenger 220",
    //       "Boxer(0/m)",
    //       "Caliber",
    //       "CT 100"
    //     ]
    //   },
    //   {
    //     brandName:"Hero",
    //     model:[
    //       "Acheiver",
    //       "Ambition",
    //       "CD 100",
    //       "CD deluxe"
    //     ]
    //   },
    //   {
    //     brandName:"Suzuki",
    //     model:[
    //       "Acheiver",
    //       "Ambition",
    //       "CD 100",
    //       "CD deluxe"
    //     ]
    //   },
    //   {
    //     brandName:"TVS",
    //     model:[
    //       "Acheiver",
    //       "Ambition",
    //       "CD 100",
    //       "CD deluxe"
    //     ]
    //   }
    // ],
    "Spare by Category":{
      "Brake":[
        "Brake Clutch",
        "Brake Disc Caliper",
        "Brake Disc Plate",
        "Brake Drum",
        "Master Cylinder Assembly",
        "Front brake Disk",
        "Front Drum Plate",
        "Rear Brake Plate",
      ],
      "Electricals":
      [
        "Body Control Unit",
        "CDI",
        "Sets",
        "Digital Meter Worm Speed Sensor",
        "Engine Control unit",
        "Handle Bar Switch",
        "Lock Set (Ignition switch)",
        "RR Unit"
      ],
      "Engine and Fuel System Parts":[
        "Cham Shaft Assembly",
        "Carburetor",
        "Carburetor repair Kit",
        "Connecting Rod Kit"
      ],

    },
    // "Bike Body Parts":[
    //   "Ball Racer set",
    //   "Engine Guard",
    //   "Floor Platform",
    //   "Front Footrest Rod"
    // ],   
  }
  const {tabsData} = useShop();
  var collections = Object.values(NavbarData['Spare by Category']).flat()
  return (
    <>
      <Navbar />
      <div className="w-full pt-40 md:pt-44">
      <Routes>
        <Route path="/" element={<Home newCategoriesData={NavbarData[`Spare by Category`]}/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collections" element={<Collections data={collections} />} />
        <Route path="/profile" element={<Profile />}>
          <Route index element={<ProfileOverview />} />
          <Route path="order" element={<Order />} />
          {/* <Route path="add-address" element={<AddAddress />} /> */}
        </Route>
        {/* <Route path="/bike/collections" element={<BikeCollection/>}/> */}
        <Route path="/collections/:subcategory" element={<CategoriesPage />} />
        <Route path="/register" element={<RegisterModal />} />
        <Route path="/login" element={<SignInModal />} />
        <Route path='/collections/:subcategory/:product' element={<ShowProduct/>}/>
        <Route path='/about' element={<AboutUs />}/>
        <Route path='/contact' element={<ContactUs />}/>
        <Route
          path="*"
          element={
            <div className="flex justify-center items-center text-2xl py-10">
              Error 404
            </div>
          }
        />
      </Routes>
      <OurPolicy/>
      </div>
      <Footer />
    </>
  );
}

export default App;
