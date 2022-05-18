const fs = require("fs");
const path = require("path");

const cleanFiles = (files) => {
  const badFiles = [".DS_Store"];
  return files.filter((i) => badFiles.indexOf(i) === -1);
};

const createId = string => string.toLowerCase().replace(/\s/g, '_')

module.exports = () => {
  const albumsPath = path.join("public", "albums");
  const folders = cleanFiles(fs.readdirSync(albumsPath));

  const albums = folders.map(album => {
    const albumPath = path.join(albumsPath, album);
    const result = {}
    result.name = album
    result.id = createId(album)
    result.photos = cleanFiles(fs.readdirSync(albumPath));
    result.cover =
      result.photos.find((i) => i.startsWith("~")) || result.photos[0];
    return result;
  });
  return albums;
};
