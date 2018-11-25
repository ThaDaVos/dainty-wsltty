# Dainty for WSLtty

Dainty is a configurable, refined, and balanced color theme using carefully selected colors within the CIELAB color space. It is designed to maximize readability and reduce eye strain.

## Setup

    git clone https://github.com/alexanderte/dainty-wsltty.git
    cd dainty-wsltty
    yarn install

## Build

    yarn build

The `build` script builds `dainty` to `dist` directory.

## Build and install

    yarn build -i

The `build` script, when run with `-i` or `--install`, builds and installs `dainty` to the WSLtty `themes` directory.

## Configuration

Dainty can be configured by editing `configuration.json`. The file is generated if it doesn’t exist by running `yarn build`. Its schema is defined by [`configuration-schema.json`](https://github.com/alexanderte/dainty-vs/blob/master/configuration-schema.json). See [Shared configuration](https://github.com/alexanderte/dainty-shared/blob/master/shared-configuration.md) for configuration shared by Dainty for different applications.

## License

Dainty for WSLtty is licensed under the [MIT License](https://github.com/alexanderte/dainty-wsltty/blob/master/license.md).
