#!/usr/bin/env node

var nomnom = require("nomnom"),
    explode = require("../explode");

var options = nomnom.options({
    tar_file: {
        position: 0,
        help: "The tar file to open",
        required: true
    },
    output_directory: {
        position: 1,
        help: "The directory to put everything in (defaults to the same name as the tar file in the current directory)",
        required: false
    }
  })
  .script("explode")
  .parse();

explode(options);
