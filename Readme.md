# url-get-file
"for get file from url, and download file from url"<br><br>

## introduction
`url-get-file` is a module that I made to make it easier for nodejs programmers to get filenames, and download them from urls easily

## fast documentation

### installation
before using this package it must first be installed by typing the following command on the command line

>npm install --global url-get-file

__**catatan** `--global` flag to install globally__

### usage


```javascript

// import the module
const get = require("url-get-file");


// specify the url address, example jquery
Address = "https://code.jquery.com/jquery-3.6.0.min.js";

// function to retrieve file name from url
console.log(get.getFileFromUrl(Address));


// for download file
get.getFile(Address, {

  // directory for save the file
  directory: "./meric_components/jquery/",

  // like save as
  filename: get.getFileFromUrl(Address),

  // show message when the installation done
  message: "installation done",
});


```