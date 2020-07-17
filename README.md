# cf-parameters-octopus-generator README

This extension exists for the purpose of providing an easy way to generate
parameter files to be used with CloudFormation templates. In this use case, it
generates parameter files that come with variable substition setup to use the
same parameter key name in your Octopus Deploy project.

## Features

- Automatic generation of parameter files for your CloudFormation templates to be used in Octopus Deploy (variable substitution).

## Known Issues

This project is very experimental. It still is a working prototype.

## Release Notes

### 0.0.5

Security patching of lodash.

### 0.0.4

Upgrade dependencies and replace vscode to vscode-test.

### 0.0.3

This release introduces CI/CD to the project by using GitHub Actions to deliver new extension updates to VSCode Marketplace, and proper testing of the PRs.
Some dependencies have been upgraded due to known CVEs.

### 0.0.2

Improve the prototype to support YAML CloudFormation templates.

### 0.0.1

Initial release of first working prototype.
