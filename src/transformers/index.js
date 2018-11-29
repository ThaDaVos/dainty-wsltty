const { getCustomizations } = require("../customizations");
const { translateColorConstant } = require("dainty-shared").colors;

function translateColor(color) {
  const r = parseInt(color.substr(1, 2), 16);
  const g = parseInt(color.substr(3, 2), 16);
  const b = parseInt(color.substr(5, 2), 16);

  return `${r}, ${g}, ${b}`;
}

function transformTheme(configuration, colors, colorConstants) {
  let data = [
    "# source: https://github.com/alexanderte/dainty-wsltty",
    "# MIT License",
    ""
  ];

  function getTerminalColor(colorName) {
    const dark = configuration.variant !== "light";

    const terminalColor = configuration.customizations.terminal[colorName];

    console.log({ colorName, terminalColor });

    return translateColor(
      translateColorConstant(
        colorConstants,
        dark ? terminalColor.dark : terminalColor.light
      )
    );
  }

  const customizations = getCustomizations(getTerminalColor);

  for (const key of Object.keys(customizations)) {
    data.push(`${key}=${customizations[key]}`);
  }

  data.push("");

  return data.join("\n");
}

module.exports = {
  transformTheme
};
