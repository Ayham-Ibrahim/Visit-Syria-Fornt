
import './HomePage.css'
import { Link } from 'react-router-dom'
import priefImage from './../../assets/images/prief-shape.png'
import syriaShImage from './../../assets/images/syria_sh.png'
import syriaImageLine from './../../assets/images/syria33.png'
import Hero from '../../components/Hero/Hero'
import blogCardImage from './../../assets/images/home-blog.jpg'
import shapeImage from './../../assets/images/shape-res.png'
import homeCover from './../../assets/images/home-cover.png'
function HomePage() {
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
              <Link to='/brief' className="brief-button pt-2">
                <button>{"<"}  اقرأ المزيد </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home-blog-card mb-5">
        <div className="home-blog-container">
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
              <Link to='/blog' className="brief-button ">
                <button>{"<"}  من هنا   </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage