import React from 'react';
import { Col, Row } from 'reactstrap';
import Product from '../Product';


const tezgah = [{
    url: "https://image.freepik.com/free-photo/high-angle-shot-homemade-simits-chopping-board-white-surface_181624-21981.jpg",
    title: "Simit",
    price: 2
},
{
    url: "https://image.freepik.com/free-photo/woman-s-hand-is-holding-white-cup-hot-milky-beverage-with-cinnamon-called-turkish-salep-sahlep-background-rippling-water-misty-maiden-s-tower-distance-istanbul_152904-7789.jpg",
    title: "Sahlep",
    price: 8
},
{
    url: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRCqSF6ocMHkS7Ql7U5bsOvgOr2Mu1xPuVRW9ouBmZ_RYKbM1Ode9bd92Vtqi1PH1W_nNhw8x6FB6pHX2px9es",
    title: "Kestane Şekeri",
    price: 40
},
{
    url: "https://www.pastasipariset.com/Upload/1253-Renkli-Arabalar-Dogum-Gunu-Pastasi_20191205_n.jpg",
    title: "Özel Pasta",
    price: 60
},
]

const SameProducts = props =>{

    
    return <div style={{
        margin:"5%",
        paddingTop:"5%"}}>
        <h3 style={{textAlign:"center"}}>Benzer Ürünler</h3>
        <Row>
            {tezgah.map((item,i)=><Col xs="3">
                <Product item={item} />
            </Col>)}
        </Row>
    </div>
}

export default SameProducts;