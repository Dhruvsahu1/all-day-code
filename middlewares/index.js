const express = require("express");

const app = express();
function userMiddleWare(req,res,next){
    if(username!= "Dhruv" || password != "pass"){
        res.status(403).json({
            msg:"Incorrect input",
        })
    }
    else{
        next();
    }
}
function kidneyMiddleWare(req,res,next){
    if(kidneyId!= 1 || kidneyId != 2){
        res.status(403).json({
            msg:"Incorrect input",
        })
    }
    else{
        next();
    }
}

app.get("/health-checkup",userMiddleWare,kidneyMiddleWare, function (req, res) {

    res.send("your heart is healthy")
    // const username = req.headers.username;
    // const password = req.headers.password;
    // const kidneyId = req.query.kidneyId;

//     if (username != "admin" || password != "pass") {
//         res.status(400).json({
//             msg: "your input is invalid",
//         });
//         return;
//     }
//     if (kidneyId != 1 && kidneyId != 2) {
//         res.status(400).json({
//             msg: "Something wrong with your input",
//         });
//         return;
//     }
//     res.json({
//         msg: "Your kidney is fine",
//     });
});

app.put(    )

app.listen(3001);
