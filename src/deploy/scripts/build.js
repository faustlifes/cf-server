const webpack = require('webpack');
const chalk = require('chalk');
const rimraf = require('rimraf');
const path = require('path');
const fs = require('fs-extra');
const FileSizeReporter = require('react-dev-utils/FileSizeReporter');
const devConfig = require('../webpack.dev.conf');
const prodConfig = require('../webpack.prod.conf');

const measureFileSizesBeforeBuild = FileSizeReporter.measureFileSizesBeforeBuild;
const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild;

const config = (process.argv[0] === 'dev') ? devConfig : prodConfig;

const build = (previousFileSizes) => {
  const compiler = webpack(config);
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        return reject(err);
      }
      // removing critical dependency warning
      const warnings = stats.compilation.warnings
        .filter(warn => warn && !~warn.toString().indexOf('ModuleDependencyWarning'));// eslint-disable-line no-bitwise

      const messages = {
        errors: stats.compilation.errors,
        warnings,
      };
      if (messages.errors.length) {
        return reject(new Error(messages.errors.join('\n\n')));
      }
      if (process.env.CI && messages.warnings.length) {
        console.log(
          chalk.yellow(
            '\nTreating warnings as errors because process.env.CI = true.\n' +
              'Most CI servers set it automatically.\n',
          ),
        );
        return reject(new Error(messages.warnings.join('\n')));
      }
      return resolve({
        stats,
        warnings: messages.warnings,
        previousFileSizes,
      });
    });
  });
};

measureFileSizesBeforeBuild('./dist')
  .then((previousFileSizes) => {
    rimraf.sync(config.output.path);
    return build(previousFileSizes);
  })
  .then(
    ({ stats, previousFileSizes, warnings }) => {
      if (warnings.length) {
        console.log(chalk.yellow('Compiled with warnings.\n'));
        console.log(warnings.join('\n\n'));
        console.log(
          `\nSearch for the ${
            chalk.underline(chalk.yellow('keywords'))
          } to learn more about each warning.`,
        );
        console.log(
          `To ignore, add ${
            chalk.cyan('// eslint-disable-next-line')
          } to the line before.\n`,
        );
      } else {
        console.log(chalk.green('Compiled successfully.\n'));
      }

      console.log('File sizes after gzip:\n');
      printFileSizesAfterBuild(stats, previousFileSizes, './dist');

      let confPath = path.resolve('./conf');
      let confDistPath = path.join(config.output.path, './conf');
      fs.copySync(confPath, confDistPath, {
        dereference: true,
      }); 

      let buildInfoPath = path.resolve('./build.json');
      let buildInfoDistPath = path.join(config.output.path, './build.json');
      fs.copySync(buildInfoPath, buildInfoDistPath, {
        dereference: true,
      });

      console.log(chalk.green(
        'Successfully copied conf dir and build.json to dist!'
      ));
    },
    (err) => {
      console.log(chalk.red('Failed to compile.\n'));
      console.log(`${(err.message || err)}\n`);
      process.exit(1);
    },
  )
  .catch(
    err =>
      console.error(
        chalk.red(
          err,
        ),
      ),
  );
