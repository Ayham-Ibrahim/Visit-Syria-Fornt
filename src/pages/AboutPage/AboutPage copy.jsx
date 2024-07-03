import React from 'react'
import PageLayout from '../../shared/PageLayout/PageLayout'
import Img from '../../assets/images/Rectangle 140.png'
import { mainURL } from '../../helpers/AboutSyriaServices/AboutSyriaURLs';
import * as aboutservices from '../../helpers/AboutSyriaServices/AboutSyriaServices'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import PlaceDetails from '../../shared/PlaceDetails/PlaceDetails';
import './AboutPage.css'
import ImagesGallery from '../../components/ImagesGallery/ImagesGallery';

function AboutPage() {
  const { section } = useParams();

  console.log(section);
  const [aboutList, setAboutList] = useState([]);
  const [singleAbout, setSingleAbout] = useState();
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState('السياحة');
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalCategoryPages, setTotalCategoryPages] = useState(5);

  const handlePageChange = (number) => {
    setPageNumber(number);
  };


  const getAllCategoryData = async () => {
    setLoading(true);
    try {
      setLoading(false);
      const response = await aboutservices.getAllAboutData(1, category);
      setAboutList(response.data);
      setTotalCategoryPages(response.pagination.count);
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
    setPageNumber(1);
    console.log('loading', loading);
  }, [section]);

  useEffect(()=>{
    console.log('category', category);
    getAllCategoryData();
    setSingleAbout(null);
  },[category])



  useEffect(() => {
    setLoading(true);
    setSingleAbout(aboutList[pageNumber-1]);
    console.log('aboutListafter', aboutList);

  }, [aboutList]);

  useEffect(() => {
    setLoading(true);

    console.log('singleAbout', singleAbout);
    if (singleAbout) {
      setImages(singleAbout.images.map((str) => mainURL + str));
    }
    setLoading(false);
  }, [singleAbout])


  useEffect(() => {
    setSingleAbout(aboutList[pageNumber-1]);
  }, [pageNumber]);

  
  useEffect(() => {
    if (images)
      console.log("images list", images);
  }, [images])

  return (
    <div className="BY_AboutSyria">
      {!loading && singleAbout &&
        <PageLayout img={(singleAbout ? mainURL + singleAbout.main_image : Img)}>

          <PlaceDetails
            name={singleAbout.title}
            description={[<><br /></>, singleAbout.content.split('.').join('.\n\n').split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            )), " ... المزيد"]}
            locationVisible={false}
            starVisible={false}
          />
          <ImagesGallery images={singleAbout.images.map((str) => mainURL + str)} />

          <div className='buttons-slider desktop d-flex justify-content-center gap-3 position-absolute ' >
            {Array.from({ length: totalCategoryPages }, (_, index) => (
              <div
                key={index}
                className={`${pageNumber == index + 1 ? 'active' : ''}`}
                onClick={() => handlePageChange(index + 1)}
              />
            ))}
          </div>
        </PageLayout>
      }
    </div>


  )
}

export default AboutPage