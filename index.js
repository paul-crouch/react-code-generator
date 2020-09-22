#!/usr/bin/env/ node

const inquirer = require("inquirer");
const fs = require("fs");

const QUESTIONS = [
  {
    name: "component-type",
    type: "list",
    message: "Component type:",
    choices: ["react-native-ts", "react-ts", "reducer-ts"],
  },
  {
    name: "component-name",
    type: "input",
    message: "Component name:",
    validate: function (input) {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
      else
        return "Component name may only include letters, numbers, underscores and hashes.";
    },
  },
];

const CURR_DIR = process.cwd();

function createDirectoryContents(templatePath, newComponentPath) {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach((file) => {
    const origFilePath = `${templatePath}/${file}`;

    // get stats about the current file
    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      let contents = fs.readFileSync(origFilePath, "utf8");
      // Rename
      if (file === ".npmignore") file = ".gitignore";

      let writePath;
      const cssClass = newComponentPath
        .split(/(?=[A-Z])/)
        .join("-")
        .toLowerCase();
      const className =
        newComponentPath.charAt(0).toUpperCase() + newComponentPath.slice(1);
      const fileParts = file.split(".");

      contents = contents.replace(/{{componentName}}/g, newComponentPath);
      contents = contents.replace(/{{cssClass}}/g, cssClass);
      contents = contents.replace(/{{className}}/g, className);

      if (fileParts[0].search("Component") > -1) {
        writePath = `${CURR_DIR}/${newComponentPath}/${file.replace(
          "Component",
          newComponentPath
        )}`;
      } else {
        writePath = `${CURR_DIR}/${newComponentPath}/${file}`;
      }

      fs.writeFileSync(writePath, contents, "utf8");
    }
  });
}

inquirer.prompt(QUESTIONS).then((answers) => {
  const componentType = answers["component-type"];
  const componentName = answers["component-name"];
  const templatePath = `${__dirname}/component-${componentType}`;

  fs.mkdirSync(`${CURR_DIR}/${componentName}`);

  createDirectoryContents(templatePath, componentName);
});
