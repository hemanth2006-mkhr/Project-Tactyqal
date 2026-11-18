import mongoose from "mongoose"

const ConnectDB = async()=> {
    try {
      const res = await mongoose.connect(process.env.DB_URI);
      console.log("DB connected successfully on", res.connection.db.databaseName);
    } catch (error) {
        console.log("DB connection failed : ",error.message);
    }
}

export default ConnectDB;