import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Row, Col } from 'reactstrap';


const useStyles = makeStyles({
    root: {
        maxWidth: 370,
        textAlign:"center"
    }, 
    media: {
        height: "70%",
    },
    center:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }
});
const BestCategory = props => {
    const classes = useStyles();
    var items = props.items;
    return <Row style={{marginTop:"3%",paddingLeft:"2%"}}>
        {items.map((item, i) => <Col md={3} xs={6}><Card className={classes.root} > 
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    imageUrl={item.url}
                >
                    <img style={{ height: "200px", overflow: "hidden" }} src={item.url} />
                </CardMedia>
                <CardContent >
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.title}
                </Typography>
                </CardContent>
            </CardActionArea>

        </Card></Col>)}
        </Row>
}

export default BestCategory;