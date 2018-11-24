# Dainty for WSLtty

Dainty is a configurable, refined, and balanced color theme using carefully selected colors within the CIELAB color space. It is designed to maximize readability and reduce eye strain.

## Setup

    git clone https://github.com/alexanderte/dainty-shared.git
    cd dainty-shared
    npm install
    cd ..
    git clone https://github.com/alexanderte/dainty-wsltty.git
    cd dainty-wsltty
    npm install

## Build

    npm run build

The `build` script builds `dainty` to `dist` directory.

## Build and install

    npm run build -- -i

The `build` script, when run with `-i` or `--install`, builds and installs `dainty` to the WSLtty `themes` directory.

## License

Dainty for WSLtty is licensed under the [MIT License](https://github.com/alexanderte/dainty-wsltty/blob/master/license.md).
