import mongoose from 'mongoose'


export const connectDB = async () => {
    try{
const db = await mongoose.connect("mongodb://localhost/postdb")
console.log('Conected to', db.connection.name)
    }
    catch(error){
        console.log(error)
    }
}