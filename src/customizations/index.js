function getCustomizations(getColor, getProperty, getTypeShade) {
  return {
    BackgroundColour: getColor("neutral", getTypeShade(0)),
    Black: getProperty("terminal.black"),
    Blue: getProperty("terminal.blue"),
    BoldBlack: getProperty("terminal.brightBlack"),
    BoldBlue: getProperty("terminal.brightBlue"),
    BoldCyan: getProperty("terminal.brightCyan"),
    BoldGreen: getProperty("terminal.brightGreen"),
    BoldMagenta: getProperty("terminal.brightMagenta"),
    BoldRed: getProperty("terminal.brightRed"),
    BoldWhite: getProperty("terminal.brightWhite"),
    BoldYellow: getProperty("terminal.brightYellow"),
    CursorColour: getProperty("cursor"),
    Cyan: getProperty("terminal.cyan"),
    ForegroundColour: getColor("neutral", getTypeShade(14)),
    Green: getProperty("terminal.green"),
    Magenta: getProperty("terminal.magenta"),
    Red: getProperty("terminal.red"),
    White: getProperty("terminal.white"),
    Yellow: getProperty("terminal.yellow")
  };
}

module.exports = {
  getCustomizations
};
