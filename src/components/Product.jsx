
import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Discount from './Discount';
import { Row, Col, Button } from 'reactstrap';
import { lightGreen, red } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: 450,
        textAlign: "center",
        margin: 5,
        zIndex:1,
        "&:hover": {
            zIndex: 100

        }
        
    },
    media: {
        height: "70%",
    },
    center: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    discountPrice: {
        textDecorationLine: "line-through", color: red[900], display: "inline-block", padding: "5px", fontSize: "20px"
    },
    price: {
        color: lightGreen[900], display: "inline-block", fontSize: "25px", fontWeight: "bold"
    },
    img: {
        height: "300px"
    },
    addcart: {
        color: lightGreen[900]
    },
    content: {
        height: "30%"
    },
    link:{
        textDecoration: 'none',
        color: "inherit",
        "&:hover": {
            textDecoration: 'none',
            color: "inherit"

        }
    },
});

const Product = props => {
    const classes = useStyles();


    return <Card className={classes.root} >
        <CardActionArea>
            <Link className={classes.link} to={{pathname: "/productdetail",
            state: {item:props.item}}}
            >
            {props.item.discount && <Discount item={props.item} />}
            <CardMedia
                className={classes.media}
                imageUrl={props.item.url}
            >
                <img className={classes.img} src={props.item.url} />
            </CardMedia>

            <CardContent className={classes.content}>

                <Typography gutterBottom variant="h5" component="h2">
                    {props.item.title}
                </Typography>

                <div>
                    <Col > {props.item.discount ? <div>

                        <p className={classes.discountPrice}>{props.item.price} ₺</p>
                        <p className={classes.price} > {props.item.price - (props.item.price / props.item.discount)} ₺</p>
                    </div> : <p className={classes.price}>{props.item.price} ₺</p>}</Col>
                </div>



                <CardActions className={classes.center}>
                    <div>
                        <IconButton >
                            <ShoppingCartOutlinedIcon className={classes.addcart} />
                    Sepete Ekle
               </IconButton>


                    </div>

                </CardActions>

            </CardContent>
            </Link>
        </CardActionArea>

    </Card>
}

export default Product;