import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import { Row } from 'reactstrap';
import { lightGreen } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        maxWidth: 400,
    },
    icons: {
        color: lightGreen[900], fontSize: 40
    },
    sube: {
        color: lightGreen[900],
        marginTop:"2em"
    }
}));
const SocialMedia = props => {
    const classes = useStyles();

    return <div>
        <Typography gutterBottom variant="h5" component="h2" className={classes.icons} >
            İletişim
        </Typography>
        <Row>
            <IconButton className={classes.iconButton} aria-label="menu">
                <InstagramIcon className={classes.icons} />
            </IconButton>
            <IconButton className={classes.iconButton} aria-label="menu">
                <FacebookIcon className={classes.icons} />
            </IconButton>
            <IconButton className={classes.iconButton} aria-label="menu">
                <TwitterIcon className={classes.icons} />
            </IconButton>
        </Row>

        <h3 className={classes.sube}>Şubelerimiz</h3>
        <p>Merkez: Yükseltepe</p>
       
    </div>
}

export default SocialMedia;