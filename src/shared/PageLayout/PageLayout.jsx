import { FaArrowDown, FaSearch } from 'react-icons/fa'
import { Link, useLocation, useParams } from 'react-router-dom'
import './PageLayout.css'
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
// import SearchBox from '../SearchBox/SearchBox';

function PageLayout({ img, value, setValue, onClickBtn, options1, options2, setFirstSelect, setSecondSelect, select1, select2, children }) {
  const [showSelect, setShowSelect] = useState(0);

  const { section } = useParams();

  const { pathname } = useLocation();

  return (
    <section className='explorer w-100'>
      <div className='explorer-hero w-100'>
        <div className='explorer-top-section w-100 position-relative z-0' style={!pathname?.includes('explore') ? { height: '100vh' } : {}}>
          <img src={img} alt={'Hero wallpaper - descripe the section'} className='hero-img object-fit-cover w-100 h-100' />
          <div className='search-filter position-absolute'>
            <span className='search-btn' onClick={onClickBtn}>ابحث</span>
            <input type='text' placeholder='اسم مؤسسة أو محافظة' value={value} onChange={setValue} />
            <FaSearch className='search-icon' />
          </div>
        </div>
        <div className={`tabs ${!pathname?.includes('explore') ? "bg-transparent" : ''}`}>
          {pathname?.includes('about')
            ?
            <div className='tabs-container container mx-auto position-relative z-2' style={{ marginTop: '-100px' }}>
              <Link className={section === 'visit' ? 'bg-white text-black' : 'text-white'} to={'/about/visit'}>السياحة</Link>
              <Link className={section === 'nature' ? 'bg-white text-black' : 'text-white'} to={'/about/nature'}>الطبيعة</Link>
              <Link className={section === 'marks' ? 'bg-white text-black' : 'text-white'} to={'/about/marks'}>الاثار</Link>
              <Link className={section === 'civil' ? 'bg-white text-black' : 'text-white'} to={'/about/civil'}>الحضارات</Link>
              <Link className={section === 'history' ? 'bg-white text-black' : 'text-white'} to={'/about/history'}>التاريخ</Link>
            </div>
            : pathname.includes('blogs')
              ?
              <div className='tabs-container container mx-auto justify-content-end position-relative z-2 gap-3' style={{ marginTop: '-100px' }}>
                <Link className={section === 'marks' ? 'bg-white text-black' : 'text-white'} to={'/blogs/marks'}>أثرية</Link>
                <Link className={section === 'nature' ? 'bg-white text-black' : 'text-white'} to={'/blogs/nature'}>طبيعية</Link>
              </div>
              :  pathname.includes('recommendations')
              ?
              <div className='tabs-container container mx-auto  position-relative z-2' style={{ marginTop: '-100px' }}>
                <Link className={section === 'hotels' ? 'bg-white text-black' : 'text-white'} to={'/recommendations/hotels'}>الفنادق</Link>
                <Link className={section === 'resturants' ? 'bg-white text-black' : 'text-white'} to={'/recommendations/resturants'}>المطاعم</Link>
                <Link className={section === 'lands' ? 'bg-white text-black' : 'text-white'} to={'/recommendations/lands'}>المعالم السياحية</Link>
              </div>
              :
              <div className='tabs-container container mx-auto'>
              <Link className={section === 'hotels' ? 'bg-white text-black' : ''} to={'/explore/hotels'}>الفنادق</Link>
              <Link className={section === 'resturants' ? 'bg-white text-black' : ''} to={'/explore/resturants'}>المطاعم</Link>
              <Link className={section === 'lands' ? 'bg-white text-black' : ''} to={'/explore/lands'}>المعالم السياحية</Link>
              <div className='break' />
              <div className={`position-relative select ${showSelect === 1 && 'active'}`}>
                <ul className={`list ${showSelect === 1 && 'active'}`}>{options1?.map((e, i) => <li key={i} onClick={() => setFirstSelect(e)}>{e}</li>)}</ul>
                <label onClick={() => setShowSelect(showSelect === 1 ? 0 : 1)}>المحافظة
                  <IoIosArrowDown />
                </label>
              </div>
              <div className={`position-relative select ${showSelect === 2 && 'active'}`}>
                <ul className={`list ${showSelect === 2 && 'active'}`}>{options2.map((e, i) => <li key={i} onClick={() => setSecondSelect(e.value)}>{e.label}</li>)}</ul>
                <label onClick={() => setShowSelect(showSelect === 2 ? 0 : 2)}>ترتيب حسب
                  <IoIosArrowDown />
                </label>
              </div>
            </div>
          }
        </div>
      </div>
      <div className='explorer-cards'>
        {(pathname.includes('explore') || pathname.includes('recommendations') ) &&
          <div className='mobile-select'>
            <div className={`position-relative select mobile ${showSelect === 1 && 'active'}`}>
              <ul className={`list ${showSelect === 1 && 'active'}`}>{options1?.map((e, i) => <li key={i} onClick={() => setFirstSelect(e)}>{e}</li>)}</ul>
              <label onClick={() => setShowSelect(showSelect === 1 ? 0 : 1)}>المحافظة
                <IoIosArrowDown />
              </label>
            </div>
            <div className='break-mobile' />
            <div className={`position-relative select mobile ${showSelect === 2 && 'active'}`}>
              <ul className={`list ${showSelect === 2 && 'active'}`}>
                {options2 && options2.map((option, i) => (
                  <li key={i} onClick={() => setSecondSelect(option.value)}>
                    {option.label}
                  </li>
                ))}
              </ul>
              <label onClick={() => setShowSelect(showSelect === 2 ? 0 : 2)}>ترتيب حسب
                <IoIosArrowDown />
              </label>
            </div>
          </div>
        }
        <div className={`mx-auto explorer-cards-grid h-auto ${(!pathname.includes('explore') && !pathname.includes('recommendations')) ? 'd-block' : ''}`} style={{ display: 'grid', maxWidth: '1200px', margin: '0 auto' }}>
          {children}
        </div>
      </div>

    </section>
  )
}

export default PageLayout
