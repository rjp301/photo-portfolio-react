const fs = require("fs");
const path = require("path");

const cleanFiles = (files) => {
  const badFiles = [".DS_Store"];
  return files.filter((i) => badFiles.indexOf(i) === -1);
};

module.exports = () => {
  const albumsPath = path.join("public", "albums");
  const folders = cleanFiles(fs.readdirSync(albumsPath));

  const albums = folders.reduce((acc, val) => {
    const albumPath = path.join(albumsPath, val);
    acc[val] = {};
    acc[val].photos = cleanFiles(fs.readdirSync(albumPath));
    acc[val].cover =
      acc[val].photos.find((i) => i.startsWith("~")) || acc[val].photos[0];
    return acc;
  }, {});
  return albums;
};
