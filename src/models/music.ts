import mongoose, { Schema, model } from 'mongoose';
//import MongoosePaginate from 'mongoose-paginate-v2';


export interface MusicInterface extends mongoose.Document {
    originalname: String,
    destination: String
}


const MusicSchema = new Schema({

    originalname: String,
    destination: String

});


//MongoosePaginate.paginate.options = {
    //lean: true,
  //limit: 3
//}

MusicSchema.index({originalname: 'text'})
//MusicSchema.plugin(MongoosePaginate);


export default model<MusicInterface>('Music', MusicSchema);
