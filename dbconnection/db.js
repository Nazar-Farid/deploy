import mongoose  from "mongoose";

export const db = ()=>{
    mongoose.connect(process.env.MONGO_URL,{
        dbname: "RESERVATIONS",

    }
    ).then(()=>{
        console.log("Db CONNECTED")
    }).catch(err=>{
        console.log(`Eror accored  ${err}`)
    })
}