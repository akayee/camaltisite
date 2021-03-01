
import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core';
import { makeStyles ,useTheme  } from '@material-ui/core/styles';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Discount from './Discount';
import { Row, Col,Button } from 'reactstrap';
import { lightGreen,red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    price:{
        textDecorationLine: "line-through",
        color: red[900],display: "inline-block",
        padding:"5px",
        fontSize:"16px"
    }
  }));

const PrefferedProduct = props => {
    const classes = useStyles();
    const theme = useTheme();

    return <Card className={classes.root}>
       
        <div className={classes.details}>
        <CardActionArea>
        {props.item.discount && <Discount item={props.item} />}
        
   
        <CardContent className={classes.content}>

            <Typography gutterBottom variant="h5" component="h2">
                {props.item.title}
            </Typography>

            <div>
            <Col> {props.item.discount ? <div> 
                   
                <p className={classes.price}>{props.item.price} ₺</p>
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
        </div>

        <CardMedia
             className={classes.cover}
        >
            <img style={{ height: "250px",width:"auto", overflow: "hidden" }} src={props.item.url} />
        </CardMedia>
       

    </Card>
}

export default PrefferedProduct;