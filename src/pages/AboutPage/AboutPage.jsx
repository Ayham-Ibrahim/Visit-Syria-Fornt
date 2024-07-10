import React from 'react'
import PageLayout from '../../shared/PageLayout/PageLayout'
import Img from '../../assets/images/Rectangle 140.png'
import { mainURL } from '../../helpers/AboutSyriaServices/AboutSyriaURLs';
import * as aboutservices from '../../helpers/AboutSyriaServices/AboutSyriaServices'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import AboutSyriaDetails from '../../shared/AboutSyriaDetails/AboutSyriaDetails';
import './AboutPage.css'
import ImagesGallery from '../../components/ImagesGallery/ImagesGallery';

function AboutPage() {
  const { section } = useParams();

  console.log(section);
  const [singleAboutItem, setSingleAboutItem] = useState();
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState('السياحة');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handlePageChange = (number) => {
    setCurrentPage(number);
  };


  const getAllCategoryData = async () => {
    setLoading(true);
    try {
      setLoading(false);
      const response = await aboutservices.getAllAboutData(currentPage, category);
      setSingleAboutItem(response.data[0]);
      setTotalPages(response.pagination.total_pages);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };



  useEffect(() => {
    setLoading(true);
    switch (section) {
      case 'visit':
        setCategory('السياحة');
        break;
      case 'nature':
        setCategory('الطبيعة');

        break;
      case 'civil':
        setCategory('الحضارات');

        break;
      case 'marks':
        setCategory('الآثار');

        break;
      case 'history':
        setCategory('التاريخ');

        break;
      default:
        setCategory(' السياحة');

    }
    setCurrentPage(1);
  }, [section]);

  useEffect(() => {
    getAllCategoryData();
  }, [category])



  useEffect(() => {

    if (singleAboutItem) {
      setImages(singleAboutItem.images.map((str) => mainURL + str));
    }
    setLoading(false);
  }, [singleAboutItem]);



  useEffect(() => {
    getAllCategoryData();
  }, [currentPage]);


  // useEffect(() => {
  //   if (images)
  //     console.log("images list", images);
  // }, [images])

  return (
    <div className="BY_AboutSyria about-AY">
      {!loading && singleAboutItem &&
        <PageLayout img={(singleAboutItem ? mainURL + singleAboutItem.main_image : Img)}>

          <AboutSyriaDetails
            name={singleAboutItem.title}
            description={[<><br /></>, singleAboutItem.content.split('.').join('.\n\n').split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            )), " ... المزيد"]}
          />
          <ImagesGallery images={singleAboutItem.images.map((str) => mainURL + str)} />

          <div className='BY_pginationSection'>
            <div className='buttons-slider desktop d-flex justify-content-center gap-3' >
              {Array.from({ length: totalPages }, (_, index) => (
                <div
                  key={index}
                  className={`${currentPage == index + 1 ? 'active' : ''}`}
                  onClick={() => handlePageChange(index + 1)}
                />
              ))}
            </div>
          </div>
        </PageLayout>
      }
    </div>


  )
}

export default AboutPage