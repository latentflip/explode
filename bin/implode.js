#!/usr/bin/env node

var nomnom = require("nomnom"),
    implode = require("../implode");

var options = nomnom.options({
    tar_file: {
        position: 0,
        help: "The tar file to create, either .tar, .tar.gz or .tar.bz2",
        required: true
    },
    input_directory: {
        position: 1,
        help: "The directory to zip up",
        required: false
    }
  })
  .script("implode")
  .parse();

implode(options);
