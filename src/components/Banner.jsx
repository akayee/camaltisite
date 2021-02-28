import React from 'react';
import Carousel from 'react-material-ui-carousel'

import BannerItem from './BannerItem'


const Banner = props => {

    var items = props.items;

    return (
        <Carousel autoPlay
            stopAutoPlayOnHover
            animation="slide"
        >
            {
                items.map((item, i) => <BannerItem key={i} item={item} />)
            }
        </Carousel>
    )
}


export default Banner;