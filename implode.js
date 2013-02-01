var fs = require('fs')
  , path = require('path')
  , exec = require("child_process").exec;

module.exports = function(opts) {
  var tar_file = opts.tar_file
    , input_directory = opts.input_directory;

  if (!input_directory) { 
    //Then they probably just want to zip a directory with the same name, the directory
    //will now be in the tar_file variable
    
    if ( fs.existsSync(tar_file) && fs.lstatSync(tar_file).isDirectory() ) {

      input_directory = tar_file;
      tar_file = path.basename(input_directory) + '.tar'

      console.log("Assuming you meant to implode " + input_directory + " into " + tar_file);
    }
  } else {

    if ( fs.existsSync(tar_file) && fs.lstatSync(tar_file).isDirectory() && !fs.existsSync(input_directory) ) {

      //then they are the wrong way around
      var tmp = input_directory;
      input_directory = tar_file;
      tar_file = tmp

      console.log("Assuming you meant to implode " + input_directory + " into " + tar_file);
    }
  }

  if ( !tar_file.match(/\.tar/)) {
    if ( !fs.existsSync(tar_file) ) {
      tar_file += '.tar'
      console.log("Assuming you meant to implode " + input_directory + " into " + tar_file);
    } else { 
      console.log("Hmm, not sure what you are trying to do. Sorry");
      process.exit();
    }
  }

  if ( !fs.existsSync( input_directory ) ) {
    console.log("The input directory " + input_directory + " doesn't exist!");
    process.exit();
  }

  if ( tar_file.match(/\.tar\.bz2$/) ) {
    console.log("Imploding " + input_directory + " into " + tar_file);
    exec('tar cfj ' + tar_file + ' ' + input_directory);

  } else if ( tar_file.match(/\.tar\.gz$/) ) {
    console.log("Imploding " + input_directory + " into " + tar_file);
    exec('tar czf ' + tar_file + ' ' + input_directory);

  } else if ( tar_file.match(/\.tar$/) ) {
    console.log("Imploding " + input_directory + " into " + tar_file);
    exec('tar cf ' + tar_file + ' ' + input_directory);

  } 
};

