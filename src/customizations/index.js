function r(color) {
  const r = parseInt(color.substr(1, 2), 16);
  const g = parseInt(color.substr(3, 2), 16);
  const b = parseInt(color.substr(5, 2), 16);

  return `${r}, ${g}, ${b}`;
}

function getCustomizations(colors) {
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

module.exports = {
  getCustomizations
};
