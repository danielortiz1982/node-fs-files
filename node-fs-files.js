const fs = require('fs');
const path = require('path')

const listFiles = (dirPath, fileType, fileOptions) => {
  // Default args
  dirPath = dirPath || './'
  fileOptions = fileOptions || [];
  fileType = fileType || '';
  // Return Files array
  const files = fs.readdirSync(dirPath);
  // Loop through files array
  files.forEach((file) => {
    // Check if `${dirPath}/${file}` is a folder or a file
    if (fs.statSync(`${dirPath}/${file}`).isDirectory()) {
      fileOptions = listFiles(`${dirPath}/${file}`, fileType, fileOptions);
    } else {
      if (fileType === '') {
        if (Array.isArray(fileOptions)) {
          fileOptions.push(path.join(__dirname, dirPath, "/", file))
        }
        else {
          fileOptions[path.join(file.split('.')[0])] = path.join(__dirname, dirPath, "/", file)
        }
      }
      if (file.split('.')[1] === fileType) {
        if (Array.isArray(fileOptions)) {
          fileOptions.push(path.join(__dirname, dirPath, "/", file))
        }
        else {
          fileOptions[path.join(file.split('.')[0])] = path.join(__dirname, dirPath, "/", file)
        }
      }
    }
  })
  return fileOptions
}

module.exports = listFiles
