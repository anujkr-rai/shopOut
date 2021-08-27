var express = require('express');
var router = express.Router();

var app = express();

var bodyParser   =  require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var Product = require('../models/product');
var Cart = require('../models/cart');
var Order = require('../models/order');
var Orders = require('../models/orders');
var Logs = require('../models/logs');

/* GET home page. */
router.get('/', function(req, res, next) {
    
    var successMgs = req.flash('success')[0];
    Product.find({stock: { $gte: 1}}, function(err, docs){ //database comes with the name doc
        var productChunks = [];
        var chunkSize = 3;//in 1 row 3 items
        for (var i = 0; i < docs.length; i += chunkSize) {
          productChunks.push(docs.slice(i, i  + chunkSize));
        }
        res.render('shop/index', { title: 'Shopping cart', products: productChunks, successMgs: successMgs, noMessage: !successMgs });
        //render renderes html file in shop naming index.hbs in body of layout.hbs and further writes other dynamic attributes in curly brackets
        //means that all attributes are defined in index.hbs and we are using it by modifying ourself       
    });
   
});

// router.get('/:id', function(req, res, next){
//     res.render('/:id');
// })


router.get('/delete/:details', function(req, res, next){
    console.log(req.params.details);

    Orders.findById(req.params.details, function(err, docs) {
        
        var logs = new Logs({
        
            user : req.user.email,
            order_details : docs._doc.order_details
    
        });
    
        logs.save();
        Orders.remove({_id: req.params.details}, function(err, docs){
            Orders.find({user: req.user.email}, function(err, orders) {
                if(err) {
                    return res.write('Error!');
                }
                
                res.render('user/profile', { orders: orders });
            });
        });
    });


    

});

router.get('/admin/password123', function(req,res) {
    res.render('shop/newPost');
});

router.get('/admin/productDetails', function(req,res) {
    Product.find(function(err, docs){
    res.render('shop/productDetails', {products: docs});
    });
});

router.get('/admin/logs', function(req,res) {
    Logs.find(function(err, docs){
    res.render('shop/logs', {logs: docs});
    });
});

router.post('/newpost', function(req, res) {
    var newpost = new Product ({
        imagePath: req.body.imgurl,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        category : req.body.cat,
        stock : req.body.stock
    });

    newpost.save();

    res.redirect('/');
});


router.post('/search', function(req, res, next) {
    
    var successMgs = req.flash('success')[0];
    Product.find({title: {'$regex': req.body.searchText}},function(err, docs){ //database comes with the name doc
        var productChunks = [];
        var chunkSize = 3;//in 1 row 3 items
        for (var i = 0; i < docs.length; i += chunkSize) {
          productChunks.push(docs.slice(i, i  + chunkSize));
        }
        res.render('shop/index', { title: 'Shopping cart', products: productChunks, successMgs: successMgs, noMessage: !successMgs });
        //render renderes html file in shop naming index.hbs in body of layout.hbs and further writes other dynamic attributes in curly brackets
        //means that all attributes are defined in index.hbs and we are using it by modifying ourself       
    });
   
});


// here get request is used as a req. is being received  when the button is clicked   
router.get('/add-to-cart/:id', function (req, res) {//this id is that id which every product gets when it  get stored in database
    var productId = req.params.id;//if cart is non empty then return that else return empty {}
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    Product.findById(productId, function (err, product) {
        if(err) {
            return res.redirect('/');
        }
        cart.add(product, product.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/');
    })
});

router.get('/reduce/:id', function (req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    cart.reduceByOne(productId);
    req.session.cart = cart;
    res.redirect('/shopping-cart');
});
router.get('/increase/:id', function (req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    cart.increaseByOne(productId);
    req.session.cart = cart;
    res.redirect('/shopping-cart');
});

router.get('/remove/:id', function (req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    cart.removeItem(productId);
    req.session.cart = cart;
    res.redirect('/shopping-cart');
});

router.get('/shopping-cart', function (req, res, next) {
    if(!req.session.cart) {
        return res.render('shop/shopping-cart', {products: null});
    }
    var cart = new Cart(req.session.cart);
    return res.render('shop/shopping-cart', {products: cart.generateArray(), totalPrice: cart.totalPrice});
});

router.get('/checkout', isLoggedIn, function (req, res, next) {
    if(!req.session.cart) {
        return res.redirect('/shopping-cart');
    }
    var cart = new Cart(req.session.cart);
    var errMsg = req.flash('error')[0];
    return res.render('shop/checkout', {total: cart.totalPrice, errMsg: errMsg, noError: !errMsg});
});


router.get('/groceries', function(req, res, next){
    var successMgs = req.flash('success')[0];
    Product.find({category: "Grocery"},function(err, docs){ //database comes with the name doc
        var productChunks = [];
        var chunkSize = 3;//in 1 row 3 items
        for (var i = 0; i < docs.length; i += chunkSize) {
          productChunks.push(docs.slice(i, i  + chunkSize));
        }
        res.render('shop/groceries', { title: 'Shopping cart', products: productChunks, successMgs: successMgs, noMessage: !successMgs });
         
    });
    
});


router.get('/electronics', function(req, res, next){
    var successMgs = req.flash('success')[0];
    Product.find({category: "Electronics"},function(err, docs){ //database comes with the name doc
        var productChunks = [];
        var chunkSize = 3;//in 1 row 3 items
        for (var i = 0; i < docs.length; i += chunkSize) {
          productChunks.push(docs.slice(i, i  + chunkSize));
        }
        res.render('shop/electronics', { title: 'Shopping cart', products: productChunks, successMgs: successMgs, noMessage: !successMgs });
        //render renderes html file in shop naming index.hbs in body of layout.hbs and further writes other dynamic attributes in curly brackets
        //means that all attributes are defined in index.hbs and we are using it by modifying ourself       
    });
});

router.get('/games', function(req, res, next){
    var successMgs = req.flash('success')[0];
    Product.find({category: "Games"},function(err, docs){ //database comes with the name doc
        var productChunks = [];
        var chunkSize = 3;//in 1 row 3 items
        for (var i = 0; i < docs.length; i += chunkSize) {
          productChunks.push(docs.slice(i, i  + chunkSize));
        }
        res.render('shop/games', { title: 'Shopping cart', products: productChunks, successMgs: successMgs, noMessage: !successMgs });
        //render renderes html file in shop naming index.hbs in body of layout.hbs and further writes other dynamic attributes in curly brackets
        //means that all attributes are defined in index.hbs and we are using it by modifying ourself       
    });
});

router.get('/buy', isLoggedIn, function(req, res, next){
    var cart = new Cart(req.session.cart);
    delete req.session.cart;
    res.render('shop/buy', {products: cart.generateArray(), totalPrice: cart.totalPrice});
    
});



router.post('/checkout', isLoggedIn, function(req, res, next) {
    var name = req.body.name;
    var address = req.body.address;

    var cart = new Cart(req.session.cart);
    // console.log("$$$$$$$$");
    var x = cart.generateArray();
    var y = "";
    x.forEach(element => {
        y = y + element.item.title + "  :  " +  element.qty + "\n";

        Product.update({title : element.item.title}, {$inc: {stock: -element.qty}}, function(err, res) {
            if (err) {
                console.log("#######3" + err);
            }
            console.log(res);
         });

    });
    // console.log(y);
    // console.log("$$$$$$$$");
    delete req.session.cart;
    var recOrder = new Orders({
        
        user : req.user.email,
        order_details : ("Name : " + name + "           |#|            Address : " + address + "              |#|          Order details :  " + y)

    });

    recOrder.save();



    res.render('shop/buy', {products: cart.generateArray(), totalPrice: cart.totalPrice, name: name, address: address});

});

module.exports = router;

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    req.session.oldUrl = req.url;
    res.redirect('/user/signin');
}

