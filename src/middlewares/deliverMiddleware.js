const jwt = require('../lib/jwt');
const {SECRET} = require('../constants')

exports.deliverAuth = async (req,res,next)=>{
    const token = req.cookies['authDeliver']

    if(token){
    
    try {
    const decodedToken = await jwt.verify(token,SECRET)
        req.user = decodedToken;

        res.locals.user = decodedToken;
        res.locals.isDeliver = true;
        next()
    } catch (error) {
       
        res.clearCookie('authDeliver')
        res.redirect('/')
    }
}else{
       next(); 
    }

    
}
