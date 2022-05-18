const fs = require("fs");

fs.readdir("public/albums", (err, files) => {
  const badFiles = [".DS_Store"]
  const cleanedFiles = files.filter(i => badFiles.indexOf(i) === -1)
  console.log(cleanedFiles)
});
