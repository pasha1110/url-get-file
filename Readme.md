# url-get-file
"for get file from url, and download file from url"<br><br>

## introduction
`url-get-file` is a module that I made to make it easier for nodejs programmers to get filenames, and download them from urls easily

## fast documentation

### installation
before using this package it must first be installed by typing the following command on the command line

>npm install --global url-get-file

__**catatan**  bendera  `--global digunakan untuk menginstall secara global`__

### usage

```javascript

const get = require("url-get-file");


// specify the url address, example jquery
Address = "https://code.jquery.com/jquery-3.6.0.min.js";

// function to retrieve file name from url
console.log(get.getFileFromUrl(Address));

get.getFile(Address, {
  directory: "./meric_components/jquery/",
  filename: get.getFileFromUrl(Address),
  message: "installation done",
});


```