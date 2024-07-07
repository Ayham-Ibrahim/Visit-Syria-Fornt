// import React from 'react'

import "./ServiceSection.css"
function ServiceSection({services}) {
    

    return (
        <div className='services-section'>
            <div className="section-title-Ay mb-3">خدمات المنشأة</div>
            <div className="service-group" >
                {services.map(({index,title,icon})=>{
                    return (
                        <div className={services.length > 4 ? 'col-6 mb-3' : ' col-12 mb-3'} key={index}>
                            <div className="service">
                                <div className="icon">{icon}</div>
                                <div className="title">{title}</div>
                            </div>
                        </div>
                    )})
                }
        </div>
        </div>
    )
}

export default ServiceSection
