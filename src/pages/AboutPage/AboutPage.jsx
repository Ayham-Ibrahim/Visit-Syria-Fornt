import React from 'react'
import PageLayout from '../../shared/PageLayout/PageLayout'
import Img from '../../assets/images/Rectangle 140.png'
import { mainURL } from '../../helpers/AboutSyriaServices/AboutSyriaURLs';
import * as aboutservices from '../../helpers/AboutSyriaServices/AboutSyriaServices'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import PlaceDetails from '../../shared/PlaceDetails/PlaceDetails';
import PhotoSlider from '../../shared/PhotoSlider/PhotoSlider';


function AboutPage() {
  const { section } = useParams();

  console.log(section);
  const [aboutList, setAboutList] = useState([]);
  const [singleAbout, setSingleAbout] = useState();
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const getAllData = async () => {
    setLoading(true);
    try {
      setLoading(false);
      const response = await aboutservices.getAllAboutData();
      console.log('response', response);
      setAboutList(response.data);
      console.log('aboutlist', aboutList);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    console.log('currentPage', aboutList);
    console.log('loading', loading);
    getAllData();
  }, []);


  useEffect(() => {
    console.log('singleAboutbefore', singleAbout);
    setLoading(true);
    switch (section) {
      case 'visit':
        setSingleAbout(aboutList.find(item => item.category === 'السياحة'));
        break;
      case 'nature':
        setSingleAbout(aboutList.find(item => item.category === 'الطبيعة'));
        break;
      case 'civil':
        setSingleAbout(aboutList.find(item => item.category === 'الحضارات'));
        break;
      case 'marks':
        setSingleAbout(aboutList.find(item => item.category === 'الآثار'));
        break;
      case 'history':
        setSingleAbout(aboutList.find(item => item.category === 'التاريخ'));
        break;
      default:
        setSingleAbout(null);
    }
    setLoading(false);
    console.log('loading', loading);


  }, [section, aboutList]);

  useEffect(() => {
    console.log('singleAbout', singleAbout);
    if (singleAbout) {
      console.log("tttttt", singleAbout.content.split(".").join('.\n\n'));
      console.log("immm", singleAbout.images.map((str) => mainURL + str));
      setImages(singleAbout.images.map((str) => mainURL + str));

    }
  }, [singleAbout])

  useEffect(() => {
    if(images)
    console.log("immm", images);
  }, [images])

  return (
    <>
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
          {/* <PhotoSlider
            imgs={singleAbout.images.map((str) => mainURL + str)} /> */}

          {/* <PhotoSlider
            imgs={images} /> */}
        </PageLayout>
      }
    </>

  )
}

export default AboutPage