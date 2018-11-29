const path = require("path");
const {
  backupFile,
  writeFileLog,
  createDistDirectory,
  appDataPath
} = require("dainty-shared").utils;
const { transformTheme } = require("../transformers");

async function buildThemeFile(
  dirname,
  configuration,
  colorConstants,
  install,
  type
) {
  if (install) {
    let target;

    if (type === "mintty") {
      target = "C:\\Program Files\\Git\\usr\\share\\mintty\\themes\\dainty";
    } else {
      target = path.join(
        await appDataPath("Local"),
        "wsltty/usr/share/mintty/themes/dainty"
      );
    }

    await backupFile(dirname, target);
    await writeFileLog(target, transformTheme(configuration, colorConstants));
  } else {
    await createDistDirectory(dirname);
    await writeFileLog(
      path.join(dirname, "../dist/dainty"),
      transformTheme(configuration, colorConstants)
    );
  }
}

module.exports = {
  buildThemeFile
};
