import React from 'react';

import { fade, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import { lightGreen } from '@material-ui/core/colors';
import Logo from '../assets/img/camaltilogomini.png'

import { Row, Col } from 'reactstrap';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot:{
        textAlign:"center",
        paddingLeft:"10%"
    },
    iconGroup:{
        display:"flex",
        justifyContent:"flex-end"
    },
    fontset:{
        fontSize:20
    }
}))

const TopHeader = props => {

    const classes = useStyles();

    return <div >
        <Row style={{ height: "10%",display:"flex",justifyContent: "center", alignItems: "center" }} >
            <Col xs="3" style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
                <img src={Logo} alt="Logo" />
            </Col>
            <Col xs="5" style={{ margin: "2%" }}>
                <div className={classes.search} style={{ border: '2px solid #244f2c', borderColor: lightGreen[900] }}>
                    <div className={classes.searchIcon}>
                        <SearchIcon style={{ color: lightGreen[900] }} />
                    </div>
                    <InputBase
                        placeholder="Site İçinde Arama Yap"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>

            </Col>
            <Col xs="3" className={classes.iconGroup}>
                
            <IconButton aria-label="delete" >
                    <AccountCircleTwoToneIcon style={{ color: lightGreen[900],fontSize:35 }}  />
                </IconButton>
                
                <IconButton aria-label="delete">
                    <ShoppingCartTwoToneIcon style={{ color: lightGreen[900],fontSize:35 }} />
                </IconButton>

            </Col>

        </Row>

    </div>
}

export default TopHeader;