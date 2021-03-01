import React from 'react';
import Carousel from 'react-multi-carousel';
import Product from './Product'
import "react-multi-carousel/lib/styles.css";

const DailySales = props => {


    return <div style={{marginTop:"3%"}}>
        <h3>Tezgahımız</h3>
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={5000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
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
            sliderClass=""
            slidesToSlide={2}
            swipeable
        >
            {props.items.map((item, i) => <Product key={i} item={item} />)}
        </Carousel>
    </div>
}

export default DailySales;