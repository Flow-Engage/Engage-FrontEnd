import mongoose from "mongoose";

export default async function connectMongo(){
    try{
        const{connection} = await mongoose.connect(process.env.NEXT_PUBLIC_DB_URL)
        if(connection.readyState==1){ 
            console.log("Database connected")
            return Promise.resolve(true)
        }
    }
    catch(error){
        Promise.reject(error)
    }
}

export const getServerSideProps = async () => 
{
    connectMongo().catch(err=>console.log(err))
}
