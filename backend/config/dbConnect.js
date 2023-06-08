const mongoose= require('mongoose');

const dbConnect = () =>{
    //connect db
mongoose.connect(
    process.env.MONGODB_URL, 
    {
    useUnifiedTopology : true,
    useNewUrlParser: true
})
.then(()=> console.log('Db connected!'))
.catch(err => console.log(err));

}

module.exports = dbConnect;