
import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core';
import { makeStyles ,useTheme  } from '@material-ui/core/styles';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Discount from './Discount';
import { Row, Col,Button } from 'reactstrap';
import { lightGreen,red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      width:"100%"
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 100,
    },
    price:{
        textDecorationLine: "line-through",
        color: red[900],display: "inline-block",
        padding:"5px",
        fontSize:"16px"
    },
    title:{
      fontSize:'15px'
    }
  }));

const MiniProduct = props => {
    const classes = useStyles();
    const theme = useTheme();

    return <Card className={classes.root}>
       
        <div className={classes.details}>
        <CardActionArea>
        
        
   
        <CardContent className={classes.content}>

            <div className={classes.title}> {props.item.title}</div>
               
                       
        </CardContent>
       
        </CardActionArea>
        </div>
        {props.item.discount && <Discount item={props.item} />}
        <CardMedia
             className={classes.cover}
        >
            <img style={{ height: "50px",width:"auto", overflow: "hidden" }} src={props.item.url} />
        </CardMedia>
       

    </Card>
}

export default MiniProduct;