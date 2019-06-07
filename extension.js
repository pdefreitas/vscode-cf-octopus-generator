// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");

const CloudFormationTemplateFactory = require("./CloudFormationTemplateFactory");
const OctopusParametersFile = require("./OctopusParametersFile");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "CloudFormation Octopus Deploy Generator" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "extension.generateParametersFile",
    function() {
      // The code you place here will be executed every time your command is executed

      // Display a message box to the user
      vscode.window.showInformationMessage(
        "Generating CloudFormation template parameters file from currently open file..."
      );

      let file_scheme = vscode.window.activeTextEditor.document.uri.scheme;
        
      // check if the file is saved locally...
      if (file_scheme != "file") {
        vscode.window.showInformationMessage(
          "The current file is not saved locally! Aborting opertion."
        );
        return;
      }
      
      try {
        let cloudFormationTemplate = CloudFormationTemplateFactory.createTemplate(vscode.window.activeTextEditor.document);

        // retrieve octopus parameters file contens (in text)
        let octopus_parameters_file_contents = cloudFormationTemplate.stringify();
        // open new file with the parameters
        vscode.workspace
          .openTextDocument({
            language: "json",
            content: octopus_parameters_file_contents
          })
          .then(textDocument => {
            vscode.window
              .showTextDocument(textDocument, 1, false)
              .then(textEditor => {
                let options = vscode.workspace.getConfiguration("editor");
                vscode.commands
                  .executeCommand(
                    "vscode.executeFormatDocumentProvider",
                    textEditor.document.uri,
                    options
                  )
                  .then(textEdits => {
                    textEditor.edit(textEditorEdit => {
                      textEdits.forEach(textEdit => {
                        textEditorEdit.replace(
                          textEdit.range,
                          textEdit.newText
                        );
                      });
                    });
                  });
              });
          });
      } catch (e) {
        // in case something goes very wrong...
        vscode.window.showInformationMessage(
          "Failed to parse CloudFormation template."
        );
      }

      // inform of the success of the operation
      vscode.window.showInformationMessage(
        "Parameters file generated with success!"
      );
    }
  );

  context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate
};
