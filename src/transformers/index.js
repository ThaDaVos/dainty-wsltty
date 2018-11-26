const { getCustomizations } = require("../customizations");

function transformTheme(colors) {
  let data = [
    "# source: https://github.com/alexanderte/dainty-wsltty",
    "# MIT License",
    ""
  ];

  const customizations = getCustomizations(colors);

  for (const key of Object.keys(customizations)) {
    data.push(`${key}=${customizations[key]}`);
  }

  data.push("");

  return data.join("\n");
}

module.exports = {
  transformTheme
};
