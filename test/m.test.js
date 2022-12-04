import chai from "chai"
import divide from "../src/divide.js"
const expect = chai.expect


describe("Division", () => {
 it("Div positive to positive", () =>{
     expect(divide(6,3)).to.equal(3)
 });

 it("Div pos to neg", () =>{
    expect(divide(-6,3)).to.equal(-3)
});

})