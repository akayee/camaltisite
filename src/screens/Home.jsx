import React , {useEffect} from 'react';
import Banner from '../components/Banner';
import BestCategory from '../components/BestCategory';
import DailySales from '../components/DailySales';
import MostPreferred from '../components/MostPreffered';
import NewestProducts from '../components/NewestProducts';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';


const Home = props => {
    var items = [
        {
            products: [{
                url: "https://image.freepik.com/free-photo/cupcakes_74190-20.jpg",
                description: "Probably the most random thing you have ever seen!",
                title: "Cup Kek",
                width: '40%',
                price: 20,
                discount: 10
            },
            {
                url: " https://image.freepik.com/free-photo/chocolate-cake-with-chocolate-sprinkles_144627-8998.jpg",
                title: "İncirli Pasta",
                description: "Hello World!",
                width: '30%',
                price: 30
            },
            {
                url: " https://image.freepik.com/free-photo/dessert-fruitcake_144627-10454.jpg",
                title: "İncirli Pasta",
                description: "Hello World!",
                width: '30%',
                price: 40
            },
            ]
        },
        {
            products: [{
                url: "https://image.freepik.com/free-psd/valentines-chocolate-cake-isolated_351245-91.jpg",
                description: "Probably the most random thing you have ever seen!",
                title: "Cup Kek",
                width: '40%',
                price: 50
            },
            {
                url: " https://image.freepik.com/free-photo/front-view-sweet-chocolate-cake_23-2148834059.jpg",
                title: "İncirli Pasta",
                description: "Hello World!",
                width: '30%',
                price: 20
            },
            {
                url: " https://image.freepik.com/free-photo/dessert-fruitcake_144627-10454.jpg",
                title: "İncirli Pasta",
                description: "Hello World!",
                width: '30%',
                price: 30
            },
            ]
        }
    ]

    const products = [{
        url: "https://image.freepik.com/free-photo/cupcakes_74190-20.jpg",
        description: "Probably the most random thing you have ever seen!",
        title: "Cup Kek",
        width: '40%',
        category: 'Tekli Pasta',
        price: 20,
        discount: 10
    },
    {
        url: " https://image.freepik.com/free-photo/dessert-fruitcake_144627-10454.jpg",
        title: "İncirli Pasta",
        description: "Hello World!",
        category: 'Bütün Pasta',
        width: '30%',
        price: 30
    },
    {
        url: " https://image.freepik.com/free-photo/purple-glitter-blueberry-cake-with-chocolate-glaze-white-surface-copy-space_107760-509.jpg",
        title: "İncirli Pasta",
        description: "Hello World!",
        category: 'Özel Pasta',
        width: '30%',
        price: 40
    },
    ]

    const boardcategories = [{
        url: "https://image.freepik.com/free-photo/front-view-delicious-cake-concept_23-2148769302.jpg",
        title: "Pastalar"
    },
    {
        url: " https://image.freepik.com/free-photo/close-up-chocolate-arrangement_23-2148349283.jpg",
        title: "Çikolata"
    },
    {
        url: "https://image.freepik.com/free-photo/wide-selective-closeup-shot-stack-baked-chocolate-cookies_181624-3607.jpg",
        title: "Kuru Pasta"
    },
    {
        url: "https://image.freepik.com/free-photo/side-view-traditional-turkish-baklava-with-ice-cream-tray_141793-14264.jpg",
        title: "Baklava"
    },
    ]

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

    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return <div style={{ flex: 1 }}>
        <Banner items={items} />
        <BestCategory items={boardcategories} />
        <DailySales items={tezgah} />
        <NewestProducts items={products} />
        <MostPreferred items={products} />
    </div>
}

export default Home