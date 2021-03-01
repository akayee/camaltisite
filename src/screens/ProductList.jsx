import React from 'react';

import { makeStyles ,useTheme  } from '@material-ui/core/styles';
import { Col, NavItem, Row } from 'reactstrap';

const useStyles = makeStyles((theme) => ({
    root: {
      flex:1,
      backgroundColor:"#FFFAFA"
    },
    list: {
        textAlign:"left",
        listStyleType:"none"
    },
    inlineList: {
        textAlign:"left",
        listStyleType:"none"
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
    }
  }));

const ProductList = props=> {
    const classes = useStyles();
    return <div>
        <Row>
        <Col xs={3} className={classes.root} >
            <h3>Tüm Kategoriler</h3>
            
            <ul>
            {props.categories.map((category,i)=>{
                let html=<li className={classes.list}>
                {category.title}                
                </li>
                if(category.subCategories !== undefined)
                {
                    html=<><li className={classes.list}>{category.title}</li><ul>{category.subCategories.map((subcategory,i)=><li className={classes.inlineList} >{subcategory.title}</li>)}</ul></>
                }
                return html
            }
                
                )}
            </ul>
        </Col>
        <Col xs={9}>
            <h2>{props.category} Ürünleri</h2>

        </Col>
        </Row>
        
    </div>
}

export default ProductList;