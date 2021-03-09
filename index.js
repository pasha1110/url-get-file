const download = require("download-file");

function getFileFromUrl(url) {
  let currentUrl = url;
  return currentUrl.substr(currentUrl.lastIndexOf("/") + 1);
}

function getFile(url, options = { directory, filename, message }) {
  return download(url, options, function (err) {
    if (err) throw err;
    else {
      console.log(options.message);
    }
  });
}

module.exports.getFileFromUrl = getFileFromUrl;
module.exports.getFile = getFile;
