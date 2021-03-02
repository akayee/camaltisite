import React from 'react';
import Carousel from 'react-multi-carousel';
import Product from './Product';
import StorefrontIcon from '@material-ui/icons/Storefront';
import { lightGreen } from '@material-ui/core/colors';
import "react-multi-carousel/lib/styles.css";

const DailySales = props => {


    return <div style={{marginTop:"2%"}}>
        <h3 style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:40}}><StorefrontIcon  style={{fontSize:40,color: lightGreen[900]}}/> Tezgahımız</h3> 
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={5000}
            centerMode={false}
            draggable
            focusOnSelect={false}
            infinite
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 4,
                    partialVisibilityGutter: 40
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 3,
                    partialVisibilityGutter: 30
                }
            }}
            showDots={false}
            slidesToSlide={2}
            swipeable
        >
            {props.items.map((item, i) => <Product key={i} item={item} />)}
        </Carousel>
    </div>
}

export default DailySales;