import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { lightGreen } from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
    root: {
      flex: 1,
      paddingLeft:"10em"
    },
    list: {
      textAlign: "left",
      listStyleType: "none"
    },
    inlineList: {
      textAlign: "left",
      listStyleType: "none"
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
    link:{
        textAlign:"center",
        color:" #000000",
        fontSize:"20px"
        
    },
    icons: {
        color: lightGreen[900], fontSize: 40
    }
  }));
  

const SiteMap = props =>{
    const classes = useStyles();

    return <div className={classes.root}>
        <Typography gutterBottom variant="h5" component="h2" className={classes.icons} >
                Site haritası
        </Typography>
        <ul>
            
        <Link className={classes.link} to="/">
            <li className={classes.list}>Ana Sayfa</li>
        </Link>
        <Link  className={classes.link} to={{
                pathname: "/productlist",
                state: { category: "all" }
            }}>
            <li className={classes.list}>Ürünler</li>
        </Link>
        <Link  className={classes.link} to={{
                pathname: "/productlist",
                state: { category: 0 }
            }}>
            <li className={classes.list}>Pastalar</li>
        </Link>
        <Link  className={classes.link} to={{
                pathname: "/productlist",
                state: { category: 13,}
            }}>
            <li className={classes.list}>Çocuk Pastaları</li>
        </Link>
        <Link  className={classes.link} to={{
                pathname: "/productlist",
                state: { category: 14}
            }}>
            <li className={classes.list}>Özel Gün Pastaları</li>
        </Link>
        <Link  className={classes.link} to={{
                pathname: "/productlist",
                state: { category: 11}
            }}>
            <li className={classes.list}>Tüm Pastalar</li>
        </Link>
        <Link  className={classes.link} to={{
                pathname: "/productlist",
                state: { category: 1 }
            }}>
            <li className={classes.list}>Çikolatalar</li>
        </Link>
        <Link  className={classes.link} to={{
                pathname: "/productlist",
                state: { category: 2 }
            }}>
            <li className={classes.list}>Tatlı Tuzlu</li>
        </Link>
        <Link  className={classes.link} to={{
                pathname: "/productlist",
                state: { category: 3 }
            }}>
            <li className={classes.list}>Baklavalar</li>
        </Link>
        <Link  className={classes.link} to={{
                pathname: "/productlist",
                state: { category: 4 }
            }}>
            <li className={classes.list}>Sütlü Tatlılar</li>
        </Link>
        <Link className={classes.link} to="/about">
            <li className={classes.list}>Hakkımızda</li>
        </Link>
        <Link className={classes.link} to="/contact">
            <li className={classes.list}>İletişim</li>
        </Link>
        </ul>
    </div>
}

export default SiteMap;