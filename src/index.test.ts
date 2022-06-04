import app from "."; 
import chai from "chai"; 
import chaiHTTP from "chai-http" 

const expect = chai.expect 

chai.use(chaiHTTP) 

describe("App Request Handler" , () => {
    before(() => {
        console.log("Starting test");
    })
    after(() => {
        console.log("Test Completed");
    })

    it("Should return a success respone" , async () => {
        const respone = await chai.request(app).get("/") 
        expect(respone.body).to.have.property("statusCode").eq(200)
    })
})
