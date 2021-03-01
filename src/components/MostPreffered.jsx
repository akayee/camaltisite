import React from 'react';
import PrefferedProduct from './PreferredProduct';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { Col, Row } from 'reactstrap';
import { lightGreen } from '@material-ui/core/colors';

import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import IconButton from '@material-ui/core/IconButton';

const MostPreferred = props => {

    return <Row style={{backgroundColor: lightGreen[900],padding:"3%",margin:"3%"}}>
        <Col xs={3}>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
                <h3 style={{color:"white"}}>En Çok Satanlar</h3>
                <IconButton disabled>
                    <HistoryOutlinedIcon   style={{ color: "#FFFAFA",fontSize: 80 }} />
            </IconButton>
            </div>
            
            
            
        </Col>
        <Col xs={9} >         
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={5000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 2,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={2}
                swipeable
            >
                {props.items.map((item, i) => <PrefferedProduct key={i} item={item} />)}
            </Carousel>

        </Col>

    </Row>
}

export default MostPreferred;