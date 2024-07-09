
import { Routes ,Route, Navigate } from 'react-router-dom'
import './App.css'
import Footer from './layout/Footer/Footer'
// import RateStars from './shared/RateStars/RateStars'
// import SearchBox from './shared/SearchBox/SearchBox'
// import SectionRating from './shared/SectionRating/SectionRating'
import AboutPage from './pages/AboutPage/AboutPage'
import BlogPage from './pages/BlogPage/BlogPage'
import BookPage from './pages/BookPage/BookPage'
import Navbar from './layout/Navbar/Navbar'
import RecommendationsPage from './pages/RecommendationsPage/RecommendationsPage'
import Explorer from './pages/ExplorerPage/Explorer'
// import ExploreBlog from './pages/ExploreBlog/ExploreBlog'
import Register from './components/Register/Register'
// import {  ToastContainer } from 'react-toastify'
import HomePage from './pages/HomePage/Homepage'
import PlaceDetailsHotel from './components/PlaceDetails/PlaceDetailsHotel/PlaceDetailsHotel'

import imagecover from './assets/images/betalwalicover.png'
import restuarantcover from './assets/images/restuarant-cover.png'
import { TfiHome } from "react-icons/tfi";
import { IoRestaurantOutline ,IoWifiSharp } from "react-icons/io5";
import { PiPersonSimpleSwim } from "react-icons/pi";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { CiParking1 } from "react-icons/ci";
import { BsAirplane } from "react-icons/bs";
import { TbHierarchy3 } from "react-icons/tb";
import PlaceDetailsRestaurant from './components/PlaceDetails/PlaceDetailsRestaurant/PlaceDetailsRestaurant'
import restaurantCover from './assets/images/wardtalsham.png'
import img1 from './assets/images/betalwai1.png'
import img2 from './assets/images/betalwai2.png'
import img3 from './assets/images/betalwai3.png'
import img4 from './assets/images/betalwai4.png'
import img5 from './assets/images/blog4.jpg'
import img6 from './assets/images/slider1.jpg'
import img7 from './assets/images/slider2.jpg'
import img8 from './assets/images/slider3.jpg'
import BlogDetails from './components/PlaceDetails/BlogDetails/BlogDetails'
import PlaceDetailsLandmark from './components/PlaceDetails/PlaceDetailsLandmark/PlaceDetailsLandmark'
function App() {
  // const arrayImages = [img1, img2, img3, img4, img7, img5, img6, img8];
//   const services = [

//     {
//         title:'مسبح و أنشطة أطفال',
//         icon:<LiaSwimmingPoolSolid />,
//     },
//     {
//         title:'انتظار مجاني للسيارات',
//         icon:<CiParking1 />,
//     },
//     {
//         title:'انترنت عالي السرعة',
//         icon:<IoWifiSharp />,
//     },
//     {
//         title:'خدمة توصيل من و إلى المطار',
//         icon:<BsAirplane />,
//     },
// ]
//   const restuarant = {
//     title: 'مطعم وردة الشام',
//     location: 'اللاذقية',
//     rating: 4,
//     logo : restaurantCover ,
//     description : 'انقل ذوقك إلى قلب الشرق الأوسط في مطعمنا، واحة الطهي حيث تجتمع التقاليد مع الابتكار. ادخل إلى أجواء مزينة بألوان نابضة بالحياة وأنماط معقدة، تستحضر النسيج الثقافي الغني للمنطقة.',
//     images : arrayImages,
//     services: services,
//   }

  return (
    <>

  <Navbar />
        {/* <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      /> */}

    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/explore/:section' element={<Explorer />} />
      <Route path='/about/:section' element={<AboutPage />} />
      <Route path='/blogs/:section' element={<BlogPage />} />
      {/* <Route path='/blog' element={<BlogPage />} /> */}
      <Route path='/booking' element={<BookPage />} />
      <Route path='/recommendations/:section' element={<RecommendationsPage />} />
      <Route path='/register' element={<Register />} />
      <Route path='/hotel-details/:id' element={<PlaceDetailsHotel />} />
      <Route path='/restaurant-details/:id' element={<PlaceDetailsRestaurant />} />
      <Route path='/blog-details/:id' element={<BlogDetails />} />
      <Route path='/landmark-details/:id' element={<PlaceDetailsLandmark/>} />
      <Route path='/*' element={<Navigate to={'/error'}/>} />
      <Route path='/error' element={'error'} />
    </Routes>

    <Footer/>


    </>
  );
}

export default App;
