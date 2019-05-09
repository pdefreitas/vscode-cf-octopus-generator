module.exports = class ParametersFile {
    constructor(parameterType) {
        this.tuples = [];
        this.parameterType = parameterType;
    }

    addParameter(key, value) {
        this.tuples.push(new this.parameterType(key,value));
    }

    stringify() {
        return JSON.stringify(this.tuples);
    }

    get count() {
        return this.tuples.length;
    }

}