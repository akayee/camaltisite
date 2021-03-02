import React from 'react';
import { Col, Row } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import EmailSub from './LittleParts/EmailSub';
import SiteMap from './LittleParts/SiteMap';
import { Divider } from '@material-ui/core';
import SocialMedia from './LittleParts/SocialMedia';

const useStyles = makeStyles({
    root: {       
        backgroundColor: "#FFFAFA",
    },
    main:{
        marginTop:"2em",        
        marginLeft:"2em", 
    }
});


const Footer = props =>{
    const classes = useStyles();
    return <div className={classes.root}>
        <Divider />
        <Row className={classes.main}>
            <Col md="3" xs="12">
            <EmailSub />
            
                
            </Col>
            <Col md="6" xs="12">
                <SiteMap />
            </Col>
            <Col md="3" xs="12">
                <SocialMedia />
            </Col>
        </Row>
    </div>
}

export default Footer;