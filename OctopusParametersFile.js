const ParametersFile = require("./ParametersFile");
const OctopusParameter = require("./OctopusParameter");

module.exports = class OctopusParametersFile extends ParametersFile {
    constructor() {
        super(OctopusParameter);
    }
}