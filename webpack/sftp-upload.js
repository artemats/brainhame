const WebpackSftpClient = require('webpack-sftp-client');
const atob = require('atob');

var gulpPath = require('path');

gulpPath.toRelative = function(project, path = false) {
  var absPath = path ? path : process.cwd();
  var splitPath = absPath.split(gulpPath.sep);
  var relPath = '';

  splitPath.forEach(function(item, ind){
    if ( item === project && !relPath ) {
      relPath = splitPath.slice(ind+1).join('/');
      return false;
    }
  });

  return relPath;
};


module.exports = function (path) {

  var ftp_project_dir = process.env.PROJECT_NAME + '/www/';
  var relPath = gulpPath.toRelative(process.env.PROJECT_NAME, path);

  var ftp_options = {
    host: process.env.FTP_HOST,
    port: '22',
    username: process.env.FTP_USER,
    password: atob(process.env.FTP_PASS),
    path: path,
    remotePath: process.env.FTP_PATH + ftp_project_dir + relPath,
    // Show details of uploading for files
    verbose: true
  };

  return {
    plugins: [
      new WebpackSftpClient(ftp_options)
    ]
  }
};
