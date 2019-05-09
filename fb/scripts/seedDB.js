const mongoose = require("mongoose");
const db = require("../models/");
// This file empties the Books collection and inserts the books below

mongoose.connect(
    (process.env.MONGODB_URI ||
    "mongodb://localhost/flappybirds_db"),
    { useNewUrlParser: true }
);

const userSeed = [
    {
        email: "gardenstate36@gmail.com",
        username: "texasnumber6",
        password: "Bannanaboat"
    },
    {
        email: "talldrape77@yahoo.com",
        username: "carrettop",
        password: "1927baraquda"
    }, {
        email: "coffeesucks@opt.net",
        username: "crowingo",
        password: "hogwartsisreal"
    }, {
        email: "apecreate91176@gmail.com",
        username: "flappyfetheredthing",
        password: "area52iswheretherealstuffis"
    }, {
        email: "flyingfortress52@hotmail.com",
        username: "crazyflappybirdman",
        password: "PassWord"
    },
];

db.UserAuth
    .deleteMany({})
    .then(() => db.UserAuth.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

// db.UserAuth.remove({});