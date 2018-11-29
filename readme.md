# Dainty for WSLtty/Mintty

Dainty is a configurable, refined, and balanced color theme using carefully selected colors within the CIELAB color space. It is designed to maximize readability and reduce eye strain.

## Setup

    git clone https://github.com/alexanderte/dainty-wsltty.git
    cd dainty-wsltty
    yarn

## Build

    yarn build

The `build` script builds `dainty` to `dist` directory.

## Build and install

The `build` script, when run with `-i` or `--install`, builds and installs `dainty` to the WSLtty/Mintty `themes` directory.

### WSLtty

    yarn build -i

### Mintty

    yarn build -i -t mintty

To install the theme using `yarn build`, you need to run Git Bash as administrator. Mintty needs to be installed through Git for Windows using the default installation path.

## Configuration

Dainty can be configured by editing `configuration.json`. The file is generated if it doesn’t exist while running `yarn build`. Its schema is defined by [`configuration-schema.json`](https://github.com/alexanderte/dainty-vs/blob/master/configuration-schema.json). See [Shared configuration](https://github.com/alexanderte/dainty-shared/blob/master/shared-configuration.md) for configuration shared by Dainty for different applications.

## A solution for green directories

Directories with permissions `777` are rendered as blue on green. In WSL, the current default mount and process umask setting causes this to be applied to directories. To instead mount directories with permissions 755, and enable using `chmod` within the Windows mount, add `/etc/wsl.conf` with the following content:

```ini
[automount]
enabled = true
options = "metadata,umask=0022,fmask=0011"
mountFsTab = false
```

There currently is [an issue](https://github.com/Microsoft/WSL/issues/352) preventing the default `/etc/profile` umask from being applied. This means that newly created files and directories are created with permissions `666` and `777`, respectively. A workaround is adding the following to `.bashrc`:

```bash
umask 022
```

Even after these changes you might have files with the executable flag set. I would suggest to only remove the flag for files that you know. The flag can be removed recursively in a directory by running:

```bash
chmod -R -x+X name-of-directory
```

It might not be needed, but the following can be added to `.bashrc` to prevent directories with permissions `777` render as blue on green:

```bash
export LS_COLORS='ow=01;34'
```

## Shorten `PS1` prompt

Paths in WSL might become verbose when working with code mounted on the Windows file system. By adding the following to `.bashrc` and replacing the first two variables, the Windows paths will render as `≈/`. Linux paths will render as `~/`.

```bash
function ps1_pwd {
    windows_home="/mnt/c/Users/Alexander Teinum"
    wsl_home="/home/alexanderte"
    pwd=`pwd`

    if [[ $pwd == $windows_home* ]]; then
        echo ≈${pwd:${#windows_home}}
    elif [[ $pwd == $wsl_home* ]]; then
        echo ~${pwd:${#wsl_home}}
    elif [[ $pwd != "/" ]]; then
        echo $pwd
    fi
}

export PS1='`ps1_pwd`/ '
```

## License

Dainty for WSLtty is licensed under the [MIT License](https://github.com/alexanderte/dainty-wsltty/blob/master/license.md).
