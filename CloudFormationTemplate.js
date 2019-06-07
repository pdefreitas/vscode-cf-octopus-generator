module.exports = class CloudFormationTemplate {

    constructor(document) {
        this.document = document;
    }

    stringify() {}

    get extension() {
        return this.document.languageId;
    }

}