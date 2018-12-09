const parseArgs = require("minimist");
const { getConfiguration } = require("dainty-shared").configuration;
const {
  generateColorScales,
  generateColorConstants
} = require("dainty-shared").colors;
const { buildThemeFile } = require("./builders");

(async () => {
  const argv = parseArgs(process.argv.slice(2));

  let configuration;

  try {
    configuration = await getConfiguration(__dirname, argv.preset || argv.p);
  } catch (error) {
    console.error(error);
    return;
  }

  if (configuration === null) {
    return;
  }

  const colors = generateColorScales(configuration);
  const colorConstants = generateColorConstants(colors);

  buildThemeFile(
    __dirname,
    configuration,
    colors,
    colorConstants,
    argv.install || argv.i,
    argv.type || argv.t
  );
})();
