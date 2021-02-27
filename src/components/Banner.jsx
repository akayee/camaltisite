import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import { Row, Col } from 'reactstrap';

import BannerItem from './BannerItem'


const Banner = props => {

    var items = [
        {
            products: [{
                url: "https://image.freepik.com/free-photo/cupcakes_74190-20.jpg",
                description: "Probably the most random thing you have ever seen!",
                title: "Cup Kek",
                width:'40%'
            },
            {
                url: " https://image.freepik.com/free-photo/dessert-fruitcake_144627-10454.jpg",
                title: "İncirli Pasta",
                description: "Hello World!",                
                width:'30%'
            },
            {
                url: " https://image.freepik.com/free-photo/dessert-fruitcake_144627-10454.jpg",
                title: "İncirli Pasta",
                description: "Hello World!",                
                width:'30%'
            },
        ]
        },
        {
            products: [{
                url: "https://image.freepik.com/free-psd/valentines-chocolate-cake-isolated_351245-91.jpg",
                description: "Probably the most random thing you have ever seen!",
                title: "Cup Kek",
                width:'40%'
            },
            {
                url: " https://image.freepik.com/free-photo/front-view-sweet-chocolate-cake_23-2148834059.jpg",
                title: "İncirli Pasta",
                description: "Hello World!",
                width:'30%'
            },
            {
                url: " https://image.freepik.com/free-photo/dessert-fruitcake_144627-10454.jpg",
                title: "İncirli Pasta",
                description: "Hello World!",                
                width:'30%'
            },
            ]
        }
    ]

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


function Item(props) {
    return (
        <Paper >
            <Row >
                {props.item.products.map((product, i) => <Col style={{display:"flex",alignItems:"center",justifyContent:"center",}} key={i}> 
                    <img style={{width:"100%",height:"300px"}} src={product.img} alt="Logo" />
                    <div style={{position:"absolute",bottom:"2%",backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
                    <h4 style={{color:"white"}}>{product.name}</h4>
                    <p style={{color:"white"}}>{product.description}</p>

                    <Button variant="outlined" >
                        Check it out!
                </Button>
                    </div>
                    
                </Col>)}
            </Row>

        </Paper>
    )
}

export default Banner;