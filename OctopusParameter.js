const Parameter = require("./Parameter");

module.exports = class OctopusParameter extends Parameter {
  constructor(parameterKey, parameterValue) {
    super(parameterKey, "#{" + parameterValue + "}");
  }
};
