const { url } = require("inspector");
const get = require("./index");

Address = "https://code.jquery.com/jquery-3.6.0.min.js";

console.log(get.getFileFromUrl(Address));

get.getFile(Address, {
  directory: "./meric_components/jquery/",
  filename: get.getFileFromUrl(Address),
  message: "installation done",
});
