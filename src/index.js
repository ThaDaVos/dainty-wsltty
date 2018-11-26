const parseArgs = require("minimist");
const { getConfiguration } = require("dainty-shared").configuration;
const { generateColorPalette } = require("dainty-shared").colors;
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

  generateColorPalette(configuration);

  buildThemeFile(
    __dirname,
    generateColorPalette(configuration),
    argv.install || argv.i,
    argv.type || argv.t
  );
})();
