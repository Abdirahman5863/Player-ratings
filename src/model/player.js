import mongoose from "mongoose";
const playeShema=mongoose.Schema({
PlayerName:String,
playerRating:Number,
PlayerImage:String,
playerPosition:Number,
playerContry:String,
playerDescription:String,
playerTeam:String,

})

const Player = mongoose.models.Player || mongoose.model('Player',playeShema)

export default Player