// import React, { useEffect, useRef, useState } from 'react'
// import PageLayout from '../../shared/PageLayout/PageLayout'
// import Img from '../../assets/images/Rectangle 140.png'
// import { useParams } from 'react-router-dom'
// import axios from 'axios';
// import Pagination from '../../components/Pagination/Pagination';
// import './AboutPage.css'
// import PhotoSlider from '../../shared/PhotoSlider/PhotoSlider';
// import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";

// function AboutPage() {
//     const { section } = useParams();
//     const [currentPage, setcurrent_page] = useState(1)
//     const [About, setAbout] = useState([])

//     const [images, setimages] = useState([])

//     useEffect(() => {
//         const fetchAboutData = async () => {
//             try {
//                 let category = '';
//                 switch (section) {
//                     case 'visit':
//                         category = 'السياحة';
//                         setimages(About.images)
//                         break;
//                     case 'nature':
//                         category = 'الطبيعة';
//                         setimages(About.images)

//                         break;
//                     case 'civil':
//                         category = 'الحضارات';
//                         setimages(About.images)

//                         break;
//                     case 'marks':
//                         category = 'الآثار';
//                         setimages(About.images)

//                         break;
//                     case 'history':
//                         category = 'التاريخ';
//                         setimages(About.images)

//                         break;
//                     default:
//                         return { category: '', imageFileName: '' };
//                 }

//                 const response = await axios.get(`http://127.0.0.1:8000/api/about?page=${currentPage}&category=${category}&perPage='1'`);
//                 setAbout(response.data.data);
//                 console.log(response.data.data.images);
//                 // setMainImage(response.data.data.main_image);
//                 // setimages(response.data.data.data.images);
//                 console.log(response.data.data[images]);

//             } catch (error) {
//                 console.error('Error fetching about data:', error);
//                 setAbout(null);
//             }
//         };

//         fetchAboutData();
//     }, [section, currentPage]);


//     const settings = {
//         dots: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: true,
//         autoplay: false,
//         autoplaySpeed: 500,
//     };

//     ;


//     return (

//         <div className="position-relative">

//             {/* <PageLayout img={`http://127.0.0.1:8000/${mainImage}`}> */}


//             {/* Render the content based on the section and category */}

//             {['visit', 'nature', 'civil', 'marks', 'history'].includes(section) && (

//                 <div>

//                     {/* <PageLayout img={`http://127.0.0.1:8000${mainImage}`}> */}




//                     <Slider {...settings}>

//                         {About?.map((item, index) => (
//                             <PageLayout img={`http://127.0.0.1:8000${item.main_image}`}>

//                                 <div className="Section_About" key={index}>
//                                     <div>
//                                         <h1 className="title_About">{item.title}</h1>
//                                         <p className="content_About">{item.content}</p>
//                                     </div>
//                                     <div className="photo-About">
//                                         <div className="container">
//                                             <div className="row">
//                                                 {About && item.images?.map((image, imageIndex) => (
//                                                     <div key={imageIndex}>
//                                                         {imageIndex === 0 ? (
//                                                             <div className="col-12">
//                                                                 <img src={`http://127.0.0.1:8000${image}`} />
//                                                             </div>
//                                                         ) : (
//                                                             <div className="col-4">
//                                                                 <img src={`http://127.0.0.1:8000${image}`} />
//                                                             </div>
//                                                         )}
//                                                     </div>
//                                                 ))}

//                                             </div>
//                                         </div>

//                                     </div>
//                                 </div>
//                             </PageLayout>


//                         ))}
//                     </Slider>


//                 </div>

//             )}

//         </div>

//     )
// }

// export default AboutPage