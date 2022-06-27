import React from 'react'
import { carsdata } from '../adata/carsdata'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Cars = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };
    return (
        <Slider {...settings}>
            {carsdata.map((cars) => {
                const { id, imgUrl, name } = cars;
                return (
                   
                    <div className=''>
                        <div className='flex justify-center'>
                            <img src={imgUrl} alt="" />
                        </div>
                        <div className='flex justify-center'>
                            <div className='px-2 '>{id}.</div>
                            <div>{name}</div>
                        </div>
                    </div>
                    
                )
            })}
        </Slider>
    )

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1
    //   };
    //   return (
    //     <div >
    //       <h2> Single Item</h2>
    //       <Slider {...settings}>
    //         <div>
    //           <h3 className='bg-purple-700 h-32 m-2' >1</h3>
    //         </div>
    //         <div>
    //           <h3 className='bg-purple-700 h-32 m-2' >2</h3>
    //         </div>
    //         <div>
    //           <h3 className='bg-purple-700 h-32 m-2' >3</h3>
    //         </div>
    //         <div>
    //           <h3 className='bg-purple-700 h-32 m-2' >4</h3>
    //         </div>
    //         <div>
    //           <h3 className='bg-purple-700 h-32 m-2' >5</h3>
    //         </div>
    //         <div>
    //           <h3 className='bg-purple-700 h-32 m-2' >6</h3>
    //         </div>
    //       </Slider>
    //     </div>
    //   );
}

export default Cars