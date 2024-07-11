
import './HomePage.css'
import { Link } from 'react-router-dom'
import priefImage from './../../assets/images/prief-shape.png'
import syriaShImage from './../../assets/images/syria_sh.png'
import syriaImageLine from './../../assets/images/syria33.png'
import Hero from '../../components/Hero/Hero'
import blogCardImage from './../../assets/images/home-blog.jpg'
import shapeImage from './../../assets/images/shape-res.png'
import homeCover from './../../assets/images/home-cover.png'
import Button from '../../shared/Button/Button'
import { useNavigate } from "react-router-dom"
import HomeRecommendationSection from '../../components/HomeRecommendationSection/HomeRecommendationSection'

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className='home-page'>
      <Hero backgroundImage={homeCover} />
      <div className="public-preif-section">
        <div className="row">
          <div className="col-lg-7 col-md-12 order-lg-1 order-md-2 order-sm-2">
            <div className="image-syria-map">
              <div className="shape">
                <img src={priefImage} alt="shape - rectangle" />
              </div>
              <div className="shape-responsive">
                <img src={shapeImage} alt="shape - rectangle" />
              </div>
              <div className="syria-map">
                <img src={syriaShImage} alt="" className="syria-sh" />
                <img src={syriaImageLine} alt="map of syria" />
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 order-lg-2 order-md-1 order-sm-1">
            <div className="brief-text-container">
              <div className="brief-title">
                <h1>نبذة عامة</h1>
              </div>
              <div className="brief-text">
                <p>
                  تقع سوريا في منطقة الشرق الأوسط، وتتمتع بموقع جغرافي متميز، حيث تربط بين آسيا وأفريقيا وأوروبا. هذا الموقع جعلها مركزاً تجارياً وثقافياً مهماً من آلاف السنين تمتلك سوريا تاريخًا عريقًا يعود إلى آلاف السنين، حيث كانت موطنًا للعديد من الحضارات القديمة، مثل الحضارة الآشورية والحضارة البابلية والحضارة الفينيقية
                </p>
              </div>
              <Button
                btnText="اقرأ المزيد"
                onClick={() => navigate('/about/history')} />
            </div>
          </div>
        </div>
      </div>
      <div className='BY_RecommendationsHomeSection'>
        <div className="BY_RecommendationsSectionContainer">
          <div className="BY_HeaderSection">
            <h1>التوصيات</h1>
            <p>نقدم لكم افضل الاماكن الممكن زيارتها في سوريا بناءً على تجارب الزوار والأفضل تقييماً</p>
          </div>
          <div className="BY_RecommendationsCardsSection">
            <HomeRecommendationSection />
          </div>
          <div className='BY_RecommendationsButtonSection'>
            <button onClick={()=> navigate(`/explore/lands`)}>المزيد</button>
          </div>

        </div>
      </div>

      <div className="home-blog-card mb-5">
        <div className="home-blog-container">
          <div className="card-blog-title_responsive">
            <h1>المدونة </h1>
          </div>
          <div className="home-blog-content">
            <div className="home-blog-image">
              <div className="background-squre"></div>
              <img src={blogCardImage} alt="blog card - ruins of Palmyra" />
            </div>
            <img src={blogCardImage} alt="blog card - ruins of Palmyra" />
            <div className="home-blog-text">
              <div className="card-blog-title">
                <h1>المدونة </h1>
              </div>
              <div className="card-blog-text">
                <p>
                  اقرأ المدونات التي تتحدث عن طبيعة وآثار سوريا، وسوف تجد نفسك على رحلة استكشافية مثيرة في عالم غني بالتنوع البيئي و السياحي و الأثري والجمال الطبيعي
                </p>
              </div>
              <Button
                btnText="من هنا"
                className="BY_card_blog_button_home"
                onClick={() => navigate('/blogs/marks')} />

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default HomePage