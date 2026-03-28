const logger = (req,res,next)=>{
    console.log(`[${new Date().toString()}] ${req.method} ${req.url}`);
    console.log('User API hit');
    next();
};
module.exports = logger;