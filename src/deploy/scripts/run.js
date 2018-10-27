const webpack = require('webpack');
const webpackConfig = require('../webpack.dev.conf');
const wm = require('webpack-dev-middleware');
const path = require('path');
const { fork } = require('child_process');

const compiler = webpack(webpackConfig);

let proc = null;
// thread
//   .send({ string : '123' })
//   // The handlers come here: (none of them is mandatory)
//   .on('message', function(response) {
//     console.log('123 * 2 = ', response.integer * 2);
//     thread.kill();
//   })
//   .on('error', function(error) {
//     console.error('Worker errored:', error);
//   })
//   .on('exit', function() {
//     console.log('Worker has been terminated.');
//   });

wm(compiler, {
  noInfo: true,
  publicPath: '/',
}).waitUntilValid(() => {
  console.log('Successfully compiled: eval new version');
  compiler.outputFileSystem.readFile(path.join(compiler.outputPath, 'main.js'), (err, file) => {
    if (proc) {
      proc.kill('SIGINT');
      proc = null;
    }
    if (err) {
      console.error(err);
    }
    console.log('Starting new thread');
    const appSrc = file.toString();
    proc = spawn(appSrc);
    // let m = eval(appSrc);
    // console.log(m);
    // thread = spawn((app) => {
    //   console.log('Starting new thread');
    //   // console.log(app);
    //   eval(app); //eslint-disable-line
    // });
    // thread
    //   .send(appSrc)
    //   .on('message', (response) => {
    //     console.log(response);
    //   })
    //   .on('error', (error) => {
    //     console.error('App errored:', error);
    //   })
    //  .on('exit', () => {
    //    console.log('App has been terminated.');
    //  });
  });
});
