var Product =require('../models/product');

var mongoose=require('mongoose');
// const { exists } = require('../models/product');

mongoose.connect('mongodb+srv://metea:Nq1Hm0vGqUl3Qtx9@cluster0-420j1.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true', {useNewUrlParser: true } );

var products=[
    new Product({
    imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title:'Gothic Video Game',
    description:'Awesome Game !!!',
    price:10
}),
new Product({
    imagePath:'https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-81104009/mobile_786_587_png/WARNER-BROS-Mortal-Kombat-11-Standart-Ed.-PS4-Oyun',
    title:'Mortal Kombat 11',
    description:'Perfect Game !!!',
    price:140
}),
new Product({
    imagePath:'https://cdn.akakce.com/-/injustice-2-legendary-edition-ps4-z.jpg',
    title:'Injustice 2',
    description:'Cool !!!',
    price:50
}),
new Product({
    imagePath:'https://images-na.ssl-images-amazon.com/images/I/81PUsUegnJL._AC_SL1500_.jpg',
    title:'Resident Evil 7',
    description:'You will like it !!!',
    price:77
}),

];

var done=0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err,result){
        done++;
        if (done=== products.length) {
            exit();
        }
    });
    
}

function exit() {
    mongoose.disconnect();
}
