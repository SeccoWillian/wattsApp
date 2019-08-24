
const jsonTest = require("../../test.json");
const SampleController = require("../controller/SampleController");

module.exports = {
    callTest(){
        return SampleController.createMatrix(jsonTest)
    }
};