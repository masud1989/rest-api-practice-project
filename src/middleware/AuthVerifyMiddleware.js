const jwt = require('jsonwebtoken');

 module.exports = (req,res, next) => {
    const token = req.headers['token-key'];
    jwt.verify(token, "SecretKey", (error, decoded) => {
        if(error){
            res.status(401).json({status:"Unaurhorized Access"})
        }else{
            //get username from decoded token 
            const username = decoded['data']['UserName'];
            req.headers.username = username;

            next();
        }

    })
 }