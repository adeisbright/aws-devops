import express , {Request, Response} from "express" 
import Config from "./config" 
import compression from "compression"
import helmet from "helmet"
import cors from "cors"

const app : express.Application = express() ;

app.use(express.json()) 
app.use(cors())
app.use(helmet()) 
app.use(compression())

const requestHandler = async (
    req : Request,
    res : Response
) => {
    res.status(200).json({
        message : "Running CI/CD on AWS",
        success : true , 
        statusCode : 200,
        body : []
    })
}

app.use(requestHandler)

app.listen(Config.serverPort , () => {
    console.log(`The app is running on localhost:${Config.serverPort}`)
})

export default app;
