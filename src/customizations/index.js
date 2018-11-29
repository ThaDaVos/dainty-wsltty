function getCustomizations(getTerminalColor) {
  return {
    BackgroundColour: getTerminalColor("background"),
    Black: getTerminalColor("black"),
    Blue: getTerminalColor("blue"),
    BoldBlack: getTerminalColor("brightBlack"),
    BoldBlue: getTerminalColor("brightBlue"),
    BoldCyan: getTerminalColor("brightCyan"),
    BoldGreen: getTerminalColor("brightGreen"),
    BoldMagenta: getTerminalColor("brightMagenta"),
    BoldRed: getTerminalColor("brightRed"),
    BoldWhite: getTerminalColor("brightWhite"),
    BoldYellow: getTerminalColor("brightYellow"),
    CursorColour: getTerminalColor("cursor"),
    Cyan: getTerminalColor("cyan"),
    ForegroundColour: getTerminalColor("foreground"),
    Green: getTerminalColor("green"),
    Magenta: getTerminalColor("magenta"),
    Red: getTerminalColor("red"),
    White: getTerminalColor("white"),
    Yellow: getTerminalColor("yellow")
  };
}

module.exports = {
  getCustomizations
};
