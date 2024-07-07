
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


function App() {
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
      <Route path='/recommendations' element={<RecommendationsPage />} />
      <Route path='/register' element={<Register />} />
      <Route path='/*' element={<Navigate to={'/error'}/>} />
      <Route path='/error' element={'error'} />
    </Routes>

    <Footer/>


    </>
  );
}

export default App;
