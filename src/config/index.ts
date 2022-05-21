import dotenv from "dotenv" 

dotenv.config() 

interface IConfig {
    serverPort : number
}

const Config : IConfig = {
    serverPort : 3200 //Number(process.env.SERVER_PORT)
}

export default Config;