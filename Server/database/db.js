//Database connection

//import instance of moongose
import {mongoose} from "mongoose";

//creation of variable to contain username and password parameters
const Connection = async (username, password) => {
    //link where contains the databases
    //The link contains reserved words username and password
    // const URL = `mongodb://${Videoclub}:${movies}@movies.8wsfgdc.mongodb.net/?retryWrites=true&w=majority`;
    const URL = `mongodb://${username}:${password}@ac-tuor9qz-shard-00-00.aha85bo.mongodb.net:27017,ac-tuor9qz-shard-00-01.aha85bo.mongodb.net:27017,ac-tuor9qz-shard-00-02.aha85bo.mongodb.net:27017/?ssl=true&replicaSet=atlas-rv2lnn-shard-0&authSource=admin&retryWrites=true&w=majority`;

    //First, the code in try is executed
    //if there were no errors,catch execution is ignored
    try {
        //The await keyword before any expression that returns a promise
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database connected succesfully')
    } catch (e) {
        console.log('Error while connecting with the database', e)
    }
}

export default Connection;