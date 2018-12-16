const { getCustomizations } = require("../customizations");
const {
  getPropertyFunction,
  getColorFunction,
  getTypeShadeFunction
} = require("dainty-shared/src/colors");

function convert(color) {
  const r = parseInt(color.substr(1, 2), 16);
  const g = parseInt(color.substr(3, 2), 16);
  const b = parseInt(color.substr(5, 2), 16);

  return `${r}, ${g}, ${b}`;
}

function transformTheme(configuration) {
  let data = [
    "# source: https://github.com/alexanderte/dainty-wsltty",
    "# MIT License",
    ""
  ];

  const customizations = getCustomizations(
    getColorFunction(configuration),
    getPropertyFunction(configuration, getColorFunction(configuration)),
    getTypeShadeFunction(configuration)
  );

  for (const key of Object.keys(customizations)) {
    data.push(`${key}=${convert(customizations[key])}`);
  }

  data.push("");

  return data.join("\n");
}

module.exports = {
  transformTheme
};
