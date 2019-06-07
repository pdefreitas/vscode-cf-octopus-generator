const CloudFormationTemplateJson = require("./CloudFormationTemplateJson");
const CloudFormationTemplateYaml = require("./CloudFormationTemplateYaml");

module.exports = class CloudFormationTemplateFactory {

    static createTemplate(document) {
        switch(document.languageId) {
            case "json":
                return CloudFormationTemplateFactory.createJsonTemplate(document);
                break;
            case "yaml":
                return CloudFormationTemplateFactory.createYamlTemplate(document);
                break;
            default:
                // default
        }
    }

    static createYamlTemplate(document) {
        return new CloudFormationTemplateYaml(document);
    }

    static createJsonTemplate(document) {
        return new CloudFormationTemplateJson(document);
    }

}