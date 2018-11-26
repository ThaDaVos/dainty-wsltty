const path = require("path");
const parseArgs = require("minimist");
const { generateColorPalette } = require("dainty-shared").colors;
const { getConfiguration } = require("dainty-shared").configuration;
const {
  backupFile,
  writeFileLog,
  createDistDirectory,
  appDataPath
} = require("dainty-shared").utils;

function r(color) {
  const r = parseInt(color.substr(1, 2), 16);
  const g = parseInt(color.substr(3, 2), 16);
  const b = parseInt(color.substr(5, 2), 16);

  return `${r}, ${g}, ${b}`;
}

function generateColorTheme(colors) {
  return {
    BackgroundColour: r(colors.blueGray[0]),
    Black: r(colors.blueGray[0]),
    Blue: r(colors.blue[26]),
    BoldBlack: r(colors.blueGray[26]),
    BoldBlue: r(colors.blue[34]),
    BoldCyan: r(colors.cyan[34]),
    BoldGreen: r(colors.green[34]),
    BoldMagenta: r(colors.purple[34]),
    BoldRed: r(colors.red[34]),
    BoldWhite: r(colors.blueGray[39]),
    BoldYellow: r(colors.yellow[34]),
    CursorColour: r(colors.blueGray[28]),
    Cyan: r(colors.cyan[26]),
    ForegroundColour: r(colors.blueGray[34]),
    Green: r(colors.green[26]),
    Magenta: r(colors.purple[26]),
    Red: r(colors.red[26]),
    White: r(colors.blueGray[34]),
    Yellow: r(colors.yellow[26])
  };
}

(async () => {
  const argv = parseArgs(process.argv.slice(2));

  let data = [
    "# source: https://github.com/alexanderte/dainty-wsltty",
    "# MIT License",
    ""
  ];

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

  const colors = generateColorTheme(generateColorPalette(configuration));

  for (const key of Object.keys(colors)) {
    data.push(`${key}=${colors[key]}`);
  }

  data.push("");

  if (argv.install || argv.i) {
    let type = argv.type || argv.t;
    let target;

    if (type === "mintty") {
      target = "C:\\Program Files\\Git\\usr\\share\\mintty\\themes\\dainty";
    } else {
      target = path.join(
        await appDataPath("Local"),
        "wsltty/usr/share/mintty/themes/dainty"
      );
    }

    await backupFile(__dirname, target);
    await writeFileLog(target, data.join("\n"));
  } else {
    await createDistDirectory(__dirname);
    await writeFileLog(path.join(__dirname, "../dist/dainty"), data.join("\n"));
  }
})();
