const { getMappings } = require("../mappings");

function transformTheme(colors) {
  let data = [
    "# source: https://github.com/alexanderte/dainty-wsltty",
    "# MIT License",
    ""
  ];

  const mappings = getMappings(colors);

  for (const key of Object.keys(mappings)) {
    data.push(`${key}=${mappings[key]}`);
  }

  data.push("");

  return data.join("\n");
}

module.exports = {
  transformTheme
};
