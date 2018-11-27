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
    Blue: r(colors.blue[30]),
    BoldBlack: r(colors.blueGray[30]),
    BoldBlue: r(colors.blue[30]),
    BoldCyan: r(colors.cyan[30]),
    BoldGreen: r(colors.green[30]),
    BoldMagenta: r(colors.purple[30]),
    BoldRed: r(colors.red[30]),
    BoldWhite: r(colors.blueGray[39]),
    BoldYellow: r(colors.yellow[30]),
    CursorColour: r(colors.blueGray[30]),
    Cyan: r(colors.cyan[30]),
    ForegroundColour: r(colors.blueGray[34]),
    Green: r(colors.green[16]),
    Magenta: r(colors.purple[30]),
    Red: r(colors.red[16]),
    White: r(colors.blueGray[34]),
    Yellow: r(colors.yellow[30])
  };
}

module.exports = {
  getMappings
};
