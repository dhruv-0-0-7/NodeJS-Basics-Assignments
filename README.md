# NodeJS Basics Assignments

## Assignment3 - Learn about package.json

### What is package.json?

Any Node.js project will contain a `package.json` file. This `package.json` file basically holds the information related to the Node.js project such as Project name, Description, etc. This information is recognized as Metadata of the Node.js project.

#### Example

`package.json`

````json
{
  "name": "assignment3",
  "version": "1.0.0",
  "description": "Node.js Project - Assignment3",
  "engineStrict": true,
  "engines": {
    "node": "18.15.0",
    "npm": "9.5.0"
  },
  "main": "src/index.js",
  "scripts": {
    "start": "node src/index.js",
    "dev": "node --watch src/index.js"
  },
  "keywords": [
    "express",
    "node",
    "rest-apis"
  ],
  "author": {
    "name": "Dhruv Prajapati",
    "email": "dhruv.prajapati@simformsolutions.com"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/dhruv-0-0-7/NodeJS-Basics-Assignments"
  },
  "license": "ISC",
  "dependencies": {
    "bcryptjs": "2.4.3",
    "express": "4.18.2",
    "jsonwebtoken": "9.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.21",
    "prisma": "^4.11.0"
  }
}
````

#### Explanation of package.json properties

- `name` : Project/Package Name

- `version` : Project/Package Version

- `description` : Project/Package Description

- `engines` : This will specify the versions of different modules and version of Node.js while installing this Project/Package as a module.

- `engineStrict` : This will enforce the rules for *engines* property. So, if this property is *true* and versions mentioned in *engines* property don't match to the current versions of Node.js or other modules, then it will generate an Error and if it is *false* then only warnings will be generated.

- `main` : Entrypoint for Project/Package

- `scripts` : This property consists of different tasks that need to be or can be performed on this Project/Package within the Project/Package Environment.

- `keywords` : This property consists of different Keywords related to the Project/Package for better Filtering and Sorting of Projects/Packages.

- `author` : Information about Project/Package author.

- `repository` : Information about Version control system used for Project/Package and Url of remote Repository.

- `license` : Information about Project/Package License. License basically mentions the boundaries of usage for the Project/Package.

- `dependencies` : Listing of third-party packages installed on this Project/Package along with their version details. This is the most important property of package.json file.

- `devDependencies` : Same as `dependencies` property but this will list only those packages that are installed for *Dev* environment of Node.js.