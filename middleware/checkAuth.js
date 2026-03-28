const checkAuth = (req,res,next)=>{
    console.log('Auth checked(fake)');
    next();
};
module.exports = checkAuth;