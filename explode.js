var fs = require("fs"),
    path = require("path"),
    exec = require("child_process").exec;

module.exports = function(opts) {
  var tar_file = opts.tar_file
    , output_directory = opts.output_directory || '';

  output_directory = output_directory || ("./" + path.basename(tar_file).split('.')[0]);
  
  if ( fs.existsSync(output_directory) ) {
    console.log("The directory " + output_directory + " already exists, exiting.");
    process.exit();
  }
  exec('mkdir -p ' + output_directory);
  
  if ( tar_file.match(/\.tar\.bz2$/) ) {
    console.log("Exploding " + tar_file + " to " + output_directory);
    exec('tar xfj ' + tar_file + ' --strip-components=1 -C ' + output_directory);

  } else if ( tar_file.match(/\.tar\.gz$/) ) {
    console.log("Exploding " + tar_file + " to " + output_directory);
    exec('tar xzf ' + tar_file + ' --strip-components=1 -C ' + output_directory);

  } else if ( tar_file.match(/\.tar$/) ) {
    console.log("Exploding " + tar_file + " to " + output_directory);
    exec('tar xf ' + tar_file + ' --strip-components=1 -C ' + output_directory);

  } 
};

