import React from 'react';
import Banner from '../components/Banner';
import BestCategory from '../components/BestCategory';
import NewestProducts from '../components/NewestProducts';


const Home = props =>{
    var items = [
        {
            products: [{
                url: "https://image.freepik.com/free-photo/cupcakes_74190-20.jpg",
                description: "Probably the most random thing you have ever seen!",
                title: "Cup Kek",
                width:'40%',
                price:20,
                discount:10
            },
            {
                url: " https://image.freepik.com/free-photo/chocolate-cake-with-chocolate-sprinkles_144627-8998.jpg",
                title: "İncirli Pasta",
                description: "Hello World!",                
                width:'30%',
                price:30
            },
            {
                url: " https://image.freepik.com/free-photo/dessert-fruitcake_144627-10454.jpg",
                title: "İncirli Pasta",
                description: "Hello World!",                
                width:'30%',
                price:40
            },
        ]
        },
        {
            products: [{
                url: "https://image.freepik.com/free-psd/valentines-chocolate-cake-isolated_351245-91.jpg",
                description: "Probably the most random thing you have ever seen!",
                title: "Cup Kek",
                width:'40%',
                price:50
            },
            {
                url: " https://image.freepik.com/free-photo/front-view-sweet-chocolate-cake_23-2148834059.jpg",
                title: "İncirli Pasta",
                description: "Hello World!",
                width:'30%',
                price:20
            },
            {
                url: " https://image.freepik.com/free-photo/dessert-fruitcake_144627-10454.jpg",
                title: "İncirli Pasta",
                description: "Hello World!",                
                width:'30%',
                price:30
            },
            ]
        }
    ]

    const  products= [{
        url: "https://image.freepik.com/free-photo/cupcakes_74190-20.jpg",
        description: "Probably the most random thing you have ever seen!",
        title: "Cup Kek",
        width:'40%',
        price:20,
        discount:10
    },
    {
        url: " https://image.freepik.com/free-photo/dessert-fruitcake_144627-10454.jpg",
        title: "İncirli Pasta",
        description: "Hello World!",                
        width:'30%',
        price:30
    },
    {
        url: " https://image.freepik.com/free-photo/purple-glitter-blueberry-cake-with-chocolate-glaze-white-surface-copy-space_107760-509.jpg",
        title: "İncirli Pasta",
        description: "Hello World!",                
        width:'30%',
        price:40
    },
]

const  categories= [{
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

    return <div style={{flex:1}}>
        <Banner items={items} />
        <BestCategory items={categories} />
        <NewestProducts items={products} />
    </div>
}

export default Home