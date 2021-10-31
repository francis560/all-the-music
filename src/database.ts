import mongoose from 'mongoose';
const URI: any = process.env.MONGODB_URI;


mongoose.connect( URI , {

    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(db => console.log('DB is conected')).catch(err => console.error(err));