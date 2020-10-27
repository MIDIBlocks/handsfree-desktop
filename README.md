# ✋ WORK IN PROGRESS
This project still needs some work, [stay tuned](https://twitter.com/midiblocks)!

---

This project leverages [RobotJS](https://github.com/octalmage/robotjs/) to control the desktop pointer through your webcam. RobotJS works on Mac, Windows, and Linux but may require additional setup. I only have a Windows machine, so `npm install` fails see their docs for further details.

## Installing

### Non Windows Machines
- You should be able to just run: `npm install`

### Windows Setup
This is what I had to [do on a new system](https://github.com/octalmage/robotjs/issues/398#issuecomment-392380641):
- Open PowerShell
- Install [windows-build-tools](https://github.com/felixrieseberg/windows-build-tools): `npm install -g windows-build-tools`
- Close PowerShell once everything is finished (note that Python may take a few minutes to install)
- In your normal terminal, install [node-gyp](https://github.com/nodejs/node-gyp): `npm install -g node-gyp`
- Finally, install dependencies in the handsfree-desktop with: `npm install`