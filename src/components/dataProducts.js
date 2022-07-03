const ShopProducts=[
    {
        _id: 0,
        title: 'Red Brench',
        category: 'landmarks',
        image: "././static/assets/red.png",
        belongsTo: [0, 1]
    },
    {
        _id: 0,
        title: 'Egg Balloon',
        category: 'landmarks',
        image: "././static/assets/red.png",
        belongsTo: [0, 6]
    },
    {
        _id: 1,
        title: 'Egg Balloon',
        category: 'food',
        image: "././static/assets/red.png",
        belongsTo: [0, 1, 4]
    },
    {
        _id: 2,
        title: 'Man',
        category: 'People',
        image: "././static/assets/red.png",
        belongsTo: [0, 2]
    },
    {
        _id: 4,
        title: 'Architecture',
        category: 'cities',
        image: "././static/assets/red.png",
        belongsTo: [0, 2]
    },
    {
        _id: 5,
        title: 'Architecture',
        category: 'People',
        image: "././static/assets/red.png",
        belongsTo: [0, 6]
    },
]

export default ShopProducts;