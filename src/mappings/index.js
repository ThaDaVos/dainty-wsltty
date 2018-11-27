function r(color) {
  const r = parseInt(color.substr(1, 2), 16);
  const g = parseInt(color.substr(3, 2), 16);
  const b = parseInt(color.substr(5, 2), 16);

  return `${r}, ${g}, ${b}`;
}

function getMappings(colors) {
  return {
    BackgroundColour: r(colors.blueGray[0]),
    Black: r(colors.blueGray[0]),
    Blue: r(colors.blue[28]),
    BoldBlack: r(colors.blueGray[28]),
    BoldBlue: r(colors.blue[28]),
    BoldCyan: r(colors.cyan[28]),
    BoldGreen: r(colors.green[28]),
    BoldMagenta: r(colors.purple[28]),
    BoldRed: r(colors.red[28]),
    BoldWhite: r(colors.blueGray[39]),
    BoldYellow: r(colors.yellow[28]),
    CursorColour: r(colors.blueGray[28]),
    Cyan: r(colors.cyan[28]),
    ForegroundColour: r(colors.blueGray[34]),
    Green: r(colors.green[16]),
    Magenta: r(colors.purple[28]),
    Red: r(colors.red[16]),
    White: r(colors.blueGray[34]),
    Yellow: r(colors.yellow[28])
  };
}

module.exports = {
  getMappings
};
