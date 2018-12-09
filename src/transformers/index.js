const { getCustomizations } = require("../customizations");
const {
  getPropertyFunction,
  getTypeShadeFunction
} = require("dainty-shared").colors;

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

  const customizations = getCustomizations(
    colors,
    getPropertyFunction(configuration, colorConstants),
    getTypeShadeFunction(configuration)
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
