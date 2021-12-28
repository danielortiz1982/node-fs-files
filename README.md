# Node FS Files
> Node FS Files is a file system script that returns an Array or Object of all the files in a set directory.

## Dependencies
* [Nodejs](https://nodejs.org/en/)
* [NPM](https://nodejs.org/en/)
* [Git](https://git-scm.com/)
* [Fs](https://nodejs.org/api/fs.html)
* [Path](https://nodejs.org/api/path.html)

### Install Nodejs & NPM for Windows, OSX and Linux
[nodejs.org](https://nodejs.org/en/)

## Node Fs Files Usage

### Clone repo
    git clone https://github.com/danielortiz1982/node-fs-files.git

### Install Dependencies
    npm i

### Require NodeFsFiles 
    const NodeFsFiles = require('$YOUR_LOCAL_PATH/node-fs-files');

### NodeFsFiles Options
    NodeFsFiles(dirPath, fileType, fileOptions)
- dirPath - String: default value `'./'`
- fileType - String: default value `''`
- fileOptions - Array | Object: default value `[]`