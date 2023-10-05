var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ZehraKart');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log("DB is Connected");
});

exports.test = function (req, res) {
    res.render('test');
};
//making schema
var kittySchema = new mongoose.Schema({
    name: String
});
// locking schema
kittySchema.methods.speak = function speak() {
    var greeting = this.name
        ? "Meow name is " + this.name
        : "I don't have a name";
    console.log(greeting);
};


var Kitten = mongoose.model('ZehraKitty', kittySchema);
//naming
var ZehraKitty = new Kitten({ name: 'ZehraKitty' });
// console.log(ZehraKitty.name);
// ZehraKitty.speak();
var ZehraKitty2 = new Kitten({ name: 'ZehraKitty2' });
// saving 
ZehraKitty.save(function(err,ZehraKitty){
    if(err) return console.error(err);
    ZehraKitty.speak();
}
)
ZehraKitty2.save(function(err,ZehraKitty2){
    if(err) return console.error(err);
    ZehraKitty2.speak(); // will go in zehrakitties
}
)

//go to powershell(admin) run mongo
// run useZehraKart -> name of db
// run show collection
// you will see plural of ZehraKitty-> Zehrakitties

