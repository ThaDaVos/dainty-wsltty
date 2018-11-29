const { getCustomizations } = require("../customizations");
const { getTerminalColorFunction } = require("dainty-shared").colors;

function translateColor(color) {
  const r = parseInt(color.substr(1, 2), 16);
  const g = parseInt(color.substr(3, 2), 16);
  const b = parseInt(color.substr(5, 2), 16);

  return `${r}, ${g}, ${b}`;
}

function transformTheme(configuration, colorConstants) {
  let data = [
    "# source: https://github.com/alexanderte/dainty-wsltty",
    "# MIT License",
    ""
  ];

  const customizations = getCustomizations(
    getTerminalColorFunction(configuration, colorConstants)
  );

  for (const key of Object.keys(customizations)) {
    data.push(`${key}=${translateColor(customizations[key])}`);
  }

  data.push("");

  return data.join("\n");
}

module.exports = {
  transformTheme
};
