const CloudFormationTemplate = require("./CloudFormationTemplate");
const OctopusParametersFile = require("./OctopusParametersFile");

module.exports = class CloudFormationTemplateJson extends CloudFormationTemplate {
  stringify() {
    // get file contents (in text)
    let file_contents = this.document.getText();

    try {
      // try to parse file contents
      let file_object = JSON.parse(file_contents);
      // initialize octopus parameters file object
      let octopus_parameters_file = new OctopusParametersFile();
      // loop through the parameters
      for (let key in file_object.Parameters) {
        octopus_parameters_file.addParameter(key, key);
      }
      // retrieve octopus parameters file contents (in text)
      return JSON.stringify(octopus_parameters_file.tuples);
    } catch (ex) {
      // in case something goes very wrong...
      throw new Error("Failed to parse CloudFormation template.");
    }
  }
};
