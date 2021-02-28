
import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Discount from './Discount';
import { Row, Col,Button } from 'reactstrap';
import { lightGreen,red } from '@material-ui/core/colors';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

const Product = props => {
    const classes = useStyles();


    return <Card style={{ height: "400px" }}>
         <CardActionArea>
        {props.item.discount && <Discount item={props.item} />}
        <CardMedia
            className={classes.media}
            imageUrl={props.item.url}
        >
            <img style={{ height: "250px", overflow: "hidden" }} src={props.item.url} />
        </CardMedia>

        <CardContent stlye={{ height: "30%" }}>

            <Typography variant="body2" color="textSecondary" component="p">
                {props.item.title}
            </Typography>

            <div>
            <Col> {props.item.discount ? <div> 
                   
                <p style={{ textDecorationLine: "line-through",color: red[900],display: "inline-block",padding:"5px",fontSize:"16px"}}>{props.item.price} ₺</p>
                <p style={{ color: lightGreen[900],display: "inline-block",fontSize:"20px",fontWeight:"bold" }}> {props.item.price - (props.item.price / props.item.discount)} ₺</p>
                </div> : <p style={{ color: lightGreen[900],fontSize:"20px",fontWeight:"bold"  }}>{props.item.price} ₺</p>}</Col>
            </div>

           

           <CardActions style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
               <div>
               <IconButton >
                    <ShoppingCartOutlinedIcon style={{ color: lightGreen[900] }} />
                    Sepete Ekle
               </IconButton>
              

               </div>
               
           </CardActions>
            
        </CardContent>
        </CardActionArea>

    </Card>
}

export default Product;