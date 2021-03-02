import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Col, Row } from 'reactstrap';
import { lightGreen, red } from '@material-ui/core/colors';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { IconButton, Input } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SameProducts from '../components/LittleParts/SameProducts';



const useStyles = makeStyles((theme)=>({
    root: {
        width: "100%",
        padding: "5%"
    },
    img: {
        height: "325px"
    },
    price: {
        color: lightGreen[900], display: "inline-block", fontSize: "25px", fontWeight: "bold"
    },
    discountPrice: {
        textDecorationLine: "line-through", color: red[900], display: "inline-block", padding: "5px", fontSize: "20px"
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    sameProducts:{
    }
}));


const ProductDetail = props => {
    useEffect(() => {
        window.scrollTo(0, 0)
    });
    const classes = useStyles();
    const product = props.location.state.item;
    return <div className={classes.root}>
        <Row >
            <Col xs="5">
                <img className={classes.img} src={product.url} />
            </Col>
            <Col xs="4">
                <h3>{product.title}</h3>
                <p>{product.description} </p>
                {product.discount ? <div>

                    <p className={classes.discountPrice}>{product.price} ₺</p>
                    <p className={classes.price} > {product.price - (product.price / product.discount)} ₺</p>
                </div> : <p className={classes.price}>{product.price} ₺</p>}
            </Col>
            <Col xs="3">
                <Row>
                    <Col xs="12">
                        <h4>Adres</h4>
                    </Col>
                    <Col xs="6">
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">İlçe</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                            >
                                <MenuItem value={10}>Keçiören</MenuItem>
                                <MenuItem value={20}>Yenimahalle</MenuItem>
                            </Select>
                        </FormControl>
                    </Col>
                    <Col xs="6">
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Mahalle</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                            >
                                <MenuItem value={10}>Pamuklar</MenuItem>
                                <MenuItem value={20}>Şentepe</MenuItem>
                                <MenuItem value={20}>kayalar</MenuItem>
                            </Select>
                        </FormControl>
                    </Col>
                    <Col xs="12">
                        <FormControl className={classes.formControl}><InputLabel id="demo-simple-select-label">Adet</InputLabel>
                            <Input></Input></FormControl>
                    </Col>
                    <Col xs="12">
                        <IconButton >
                            <ShoppingCartOutlinedIcon className={classes.addcart} />
                                    Sepete Ekle
                            </IconButton>
                    </Col>

                </Row>

            </Col>
        </Row>

        <SameProducts className={classes.sameProducts} />
    </div>
}

export default ProductDetail;