var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping1');
// var pro= new Product() so by doing this we store 1 product of SCHEMA "Product" in variable pro....but here we have 
//done the same thing in array so that we can use loop.
var products = [
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/7176DkgjS%2BL._SX425_.jpg',
        title: 'Fresh Chakki aata',
        description: '1kg aata',
        price: 32,
        category: "Grocery"
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/61ZhyN3P4tL._SX425_.jpg',
        title: 'Maida',
        description: '1kg maida',
        price: 30,
        category: "Grocery"
    }),
    new Product({
        imagePath: 'https://cdn.grofers.com/app/images/products/full_screen/pro_52.jpg',
        title: 'Soyabean oil',
        description: '1L soyabean oil',
        price: 45,
        category: "Grocery"
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/61SacrIvdEL._SL1000_.jpg',
        title: 'Salt',
        description: '1kg tata salt',
        price: 18,
        category: "Grocery"
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/51gn%2BccasqL._SL1000_.jpg',
        title: 'Bournvita',
        description: '1kg Bournvita',
        price: 62,
        category: "Grocery"
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/61kMbAz6gqL._SL1000_.jpg',
        title: 'Surf-excel',
        description: '2kg Surf-excel',
        price: 72,
        category: "Grocery"
    }),
    new Product({
        imagePath: 'https://cdn.shopclues.com/images1/thumbnails/78326/320/320/133733160-78326689-1540560903.jpg',
        title: 'Almonds',
        description: '1kg almonds',
        price: 123,
        category: "Grocery"
    }),
    new Product({
        imagePath: 'https://www.pureindianfoods.com/v/vspfiles/photos/GHEE-2T.jpg',
        title: 'ghee',
        description: '1kg ghee',
        price: 68,
        category: "Grocery"
    }),
    new Product({
        imagePath: 'https://assetscdn1.paytm.com/images/catalog/product/F/FA/FASFORTUNE-MUSTBIGB98583274A0622B/1561494139550_0.jpg?imwidth=320&impolicy=hq',
        title: 'mustuard-oil',
        description: '1L mustuard-oil',
        price: 55,
        category: "Grocery"
    }),
    new Product({
        imagePath: 'https://5.imimg.com/data5/YD/DJ/MY-70422967/skyplus-sugar-500x500.jpg',
        title: 'sugar',
        description: '1kg sugar',
        price: 40,
        category: "Grocery"
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/71qyzy9QnML._SL1500_.jpg',
        title: 'Oats',
        description: '1kg Oats',
        price: 45,
        category: "Grocery"
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/610US2bRp0L._SX466_.jpg',
        title: 'colgate',
        description: '110g colgate',
        price: 28,
        category: "Grocery"
    }),
    new Product({
        imagePath: 'https://i5.walmartimages.com/asr/f0d3e9bf-ac3f-47c2-a058-4562c8380bfb_1.5b84b462ac7fd1c3e744dc51ecf6b236.jpeg',
        title: 'Corn flakes',
        description: '1kg corn flakes',
        price: 40,
        category: "Grocery"
    }),
    new Product({
        imagePath: 'https://5.imimg.com/data5/NM/CG/ZI/SELLER-37093038/dettol-antiseptic-liquid-500x500.jpg',
        title: 'Dettol',
        description: '110 ml',
        price: 62,
        category: "Grocery"
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/81kRgoWLYWL._SX679_.jpg',
        title: 'Nescafe Coffe',
        description: '250 gm',
        price: 45,
        category: "Grocery"
    }),
    new Product({
        imagePath: 'https://www.gizmochina.com/wp-content/uploads/2020/07/Samsung-Galaxy-M31s-1-500x500.jpg',
        title: 'Samsung Galaxy M31s',
        description: 'Cell Phone',
        price: 19500,
        category: "Electronics"
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/71%2Bs6K1eovL._SL1500_.jpg',
        title: 'Sony HT-S20R 5.1 Channel Dolby Digital Soundbar Home Theatre System',
        description: 'with Bluetooth Connectivity - Black',
        price: 13990,
        category: "Electronics"
    }),
    new Product({
        imagePath: 'https://www.reliancedigital.in/medias/Nikon-D3500-DSLR-Camera-491431008-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2MTA5MXxpbWFnZS9qcGVnfGltYWdlcy9oMzEvaGM2LzkwNzIwOTY3NzIxMjYuanBnfDJhNmVkYmRhZjkxMzFiMzE5NmFmMmQ5YWU4ZDNmY2MxODg2NGYzNDYyMDIyNTRiZmI5NTg0ZGIyYmYzMzA4NTQ',
        title: 'Nikon D3500 DSLR Camera',
        description: ' with AF-P 18-55 mm VR Lens',
        price: 33990,
        category: "Electronics"
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Prince_Of_Persia_Forgotten_Sands_Box_Artwork.jpg',
        title: 'Prince Of Persia',
        description: 'Forgotten Sands',
        price: 449,
        category: "Games"
    }),
    new Product({
        imagePath: 'https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/AD6M7C/4d79834a627f42f6a5d90ed67e2c7af1.jpg/f/metal-gear-solid-v-5-phantom-pain-code-via-email.jpg',
        title: 'Metal Gear Solid-V',
        description: 'The Phantom Pain',
        price: 899,
        category: "Games"
    }),
    new Product({
        imagePath: 'https://www.rockstargames.com/V/img/global/order/mobile-cover.jpg',
        title: 'Grand Theft Auto',
        description: 'GTA V',
        price: 499,
        category: "Games"
    }),
    new Product({
        imagePath: 'https://cdn.vox-cdn.com/thumbor/gwd1KaHU9P3JAROPViQS200wFe8=/0x0:1089x1440/1400x1400/filters:focal(458x770:632x944):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/54929207/far_cry_5_last_supper_art_1089.0.jpg',
        title: 'Far Cry 5',
        description: '',
        price: 499,
        category: "Games"
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/9/99/ACOdysseyCoverArt.png',
        title: 'Assassin,s Creed',
        description: 'Odyssey',
        price: 1499,
        category: "Games"
    }),
    new Product({
        imagePath: 'https://store-images.s-microsoft.com/image/apps.27638.69836087516172366.d802940c-fd8a-4174-8a68-e41a2475e1a1.f1f791fa-f0bf-4e6a-8e7d-98f86a97b5a1',
        title: 'Batman',
        description: 'Arkham Knight',
        price: 1299,
        category: "Games"
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg',
        title: 'The Witcher 3',
        description: 'Wild Hunt',
        price: 899,
        category: "Games"
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Watch_Dogs_2.jpg/220px-Watch_Dogs_2.jpg',
        title: 'Watch Dogs',
        description: '2',
        price: 1249,
        category: "Games"
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg',
        title :'Cyberpunk',
        description: '2077',
        price: 2499,
        category: "Games"
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg',
        title: 'Red Dead Redemption',
        description: '2',
        price: 1651,
        category: "Games"
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/51/Overwatch_cover_art.jpg',
        title: 'Overwatch',
        description: '2016',
        price: 799,
        category: "Games"
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Half-Life_Alyx_Cover_Art.jpg/220px-Half-Life_Alyx_Cover_Art.jpg',
        title: 'Half Life',
        description: 'Alyx',
        price: 1199,
        category: "Games"
    }),

];
//array of product name is products
var done = 0;
//looping is done over all products but as we know that node is a-synchronous so when we save a particular product 
//in database named shopping ...but till it is getting saved ....till then it may disconnect the sercer so when 
//our counter become equal to the length of items then only disconnect elese never disconnect.
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if(done == products.length)
            exit();
    });
}
function exit() {
    mongoose.disconnect();
}