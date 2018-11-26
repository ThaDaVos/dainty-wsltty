# Dainty for WSLtty/Mintty

Dainty is a configurable, refined, and balanced color theme using carefully selected colors within the CIELAB color space. It is designed to maximize readability and reduce eye strain.

## Setup

    git clone https://github.com/alexanderte/dainty-wsltty.git
    cd dainty-wsltty
    yarn install

## Build

    yarn build

The `build` script builds `dainty` to `dist` directory.

## Build and install

The `build` script, when run with `-i` or `--install`, builds and installs `dainty` to the WSLtty/Mintty `themes` directory.

### WSLtty

    yarn build -i

### Mintty

    yarn build -i -t mintty

To install the theme using `yarn build`, Mintty needs to be installed through Git for Windows using the default installation path. You also need to run Git Bash as administrator.

## Configuration

Dainty can be configured by editing `configuration.json`. The file is generated if it doesn’t exist while running `yarn build`. Its schema is defined by [`configuration-schema.json`](https://github.com/alexanderte/dainty-vs/blob/master/configuration-schema.json). See [Shared configuration](https://github.com/alexanderte/dainty-shared/blob/master/shared-configuration.md) for configuration shared by Dainty for different applications.

### Disable green directories

Directories with permissions `777` are rendered as blue on green. In WSL, this applies to most directories. This can be fixed by setting `LS_COLORS` in `~/.bashrc`:

    LS_COLORS='ow=01;34'

## License

Dainty for WSLtty is licensed under the [MIT License](https://github.com/alexanderte/dainty-wsltty/blob/master/license.md).
