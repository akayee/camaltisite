import React, { useEffect, useState } from 'react';

import { fade, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import { lightGreen } from '@material-ui/core/colors';
import Logo from '../assets/img/camaltilogomini.png'

import { Row, Col } from 'reactstrap';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import MiniProduct from './MiniProduct';
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
    },
    searchedItems:{
        position:"absolute",
        maxHeight:'200px',
        width:"400px",
        zIndex:100
    }
}))

const allproducts=[
    {
        url: "https://image.freepik.com/free-photo/cupcakes_74190-20.jpg",
        description: "Probably the most random thing you have ever seen!",
        title: "Cup Kek",
        width: '40%',
        category: 'Tekli Pasta',
        price: 20,
        discount: 10,
        category:0,
        category:12
      },
      {
        url: " https://image.freepik.com/free-photo/dessert-fruitcake_144627-10454.jpg",
        title: "İncirli Pasta",
        description: "Hello World!",
        category: 'Bütün Pasta',
        width: '30%',
        price: 30,
        category:11
      },
      {
        url: " https://image.freepik.com/free-photo/purple-glitter-blueberry-cake-with-chocolate-glaze-white-surface-copy-space_107760-509.jpg",
        title: "İncirli Pasta",
        description: "Hello World!",
        category: 'Özel Pasta',
        width: '30%',
        price: 40,
        category:14
      },
      {
        url: "https://image.freepik.com/free-photo/high-angle-shot-homemade-simits-chopping-board-white-surface_181624-21981.jpg",
        title: "Simit",
        price: 2,
        category:6
      },
      {
        url: "https://image.freepik.com/free-photo/woman-s-hand-is-holding-white-cup-hot-milky-beverage-with-cinnamon-called-turkish-salep-sahlep-background-rippling-water-misty-maiden-s-tower-distance-istanbul_152904-7789.jpg",
        title: "Sahlep",
        price: 8,
        category:6
      },
      {
        url: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRCqSF6ocMHkS7Ql7U5bsOvgOr2Mu1xPuVRW9ouBmZ_RYKbM1Ode9bd92Vtqi1PH1W_nNhw8x6FB6pHX2px9es",
        title: "Kestane Şekeri",
        price: 40,
        category:6
      },
      {
        url: "https://www.pastasipariset.com/Upload/1253-Renkli-Arabalar-Dogum-Gunu-Pastasi_20191205_n.jpg",
        title: "Özel Pasta",
        price: 60,
        category:6
      }
      
]

const TopHeader = props => {

    const[searchvalue,setSearchvalue] = useState(null);
    const [products,setProducts]= useState(allproducts)

    useEffect(()=>{
        setProducts(products)
    })

    const handleSearch= (e)=>{
        let value = e.target.value;
        let searchproduct= allproducts;
        let productList = searchproduct.filter((i)=> i.title.indexOf(value)>-1);
        const lowercasedFilter = value.toLowerCase();
        const filteredData = searchproduct.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(lowercasedFilter)
        );
        });
        setProducts(filteredData);
        setSearchvalue(value)
    }
    const classes = useStyles();

    return <div >
        <Row style={{ height: "10%",display:"flex",justifyContent: "center", alignItems: "center",overflow:"hidden" }} >
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
                        value={searchvalue}
                        onChange={(e)=>handleSearch(e)}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <div className={classes.searchedItems} >
                        {searchvalue !== null ? products.map((product)=> <MiniProduct item={product} />) :null}
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