import React , {useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Col,  Row } from 'reactstrap';
import { lightGreen } from '@material-ui/core/colors';
import Product from '../components/Product';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
  },
  list: {
    textAlign: "left",
    listStyleType: "none",
    color:"#807D7D",
    fontSize:20,
    marginTop:"1em"
  },
  inlineList: {
    textAlign: "left",
    listStyleType: "none",
    color:"#807D7D",
    paddingLeft:5,
    fontSize:18
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
  title: {
        color: lightGreen[900],
        width:"100%",
        backgroundColor:"#E5E1E1",
        paddingLeft:15
  },
  categoryBorder:{
    border:"4px solid #E5E1E1"
  },
  main:{
    marginTop:"4%",
    marginLeft:"6%",
    marginRight:"4%"
  }
}));


const categories = [{
  id: 0,
  title: "Pastalar",
},
{
  id: 1, title: "Çikolata"
},
{
  id: 2,
  title: "Tatlı/Tuzlu",
},
{
  id: 3,
  title: "Baklava"
},
{
  id: 4,
  title: "Sütlü Tatlılar"
},
{
  id: 5,
  title: "İçecekler"
},
{
  id: 6,
  title: "Tezgah"
},
{ id: 7, title: "Tüm Pasta" , parentId:0},
{ id: 8, title: "Tekli Pasta" , parentId:0},
{ id: 9, title: "Çocuk Pastası", parentId:0 },
{ id: 10, title: "Özel Gün Pastası", parentId:0 },
{ id: 11, title: "Tatlı", parentId:2 },
{ id: 12, title: "Tuzlu", parentId:2 },
{ id: 14, title: "Sıcaklar", parentId:5 },
{ id: 15, title: "Soğuklar", parentId:5 }
]


const products = [{
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
},
]

const ProductList = props => {
  useEffect(() => {
    window.scrollTo(0, 0)
});
  const classes = useStyles();
  const categoryProducts=products;
  return <div className={classes.main}>
    <Row >
      <Col xs={3} className={classes.root} >
        <h3 className={classes.title}>Kategoriler</h3>

        <ul className={classes.categoryBorder}>
          {categories.map((category, i) => {
            let html = <li className={classes.list}>
              {category.title}
            </li>
            if (category.subCategories !== undefined) {
              html = <><li className={classes.list}>{category.title}</li>{category.subCategories.map((subcategory, i) => <li className={classes.inlineList} >{subcategory.title}</li>)}</>
            }
            return html
          }

          )}
        </ul>
      </Col>
      <Col xs={9}>
        <Row>{props.category ?<h2> {categories[props.category]} </h2>:<h2> Ürünler</h2> } </Row>
         <Row className={classes.root}>
         {products.map((product,i)=><Col md="3" xs="6"><Product key={i} item={product}  /></Col>)}
         </Row>

      </Col>
    </Row>
    
  </div>
}

export default ProductList;