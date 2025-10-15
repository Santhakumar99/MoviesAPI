import { model, Schema } from "mongoose";

const MovSchema = new Schema({
   title:{
    type:String,
    required:true,
    unique:true},
   desc:String

})
const Movie = model("Movies",MovSchema);
export default Movie;