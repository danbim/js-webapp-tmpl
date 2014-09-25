This repo contains a template for JavaScript-based webapps built with Grunt. Actually just for me (doing my first steps in using modern build systems for JS) but if anyone feels like using it, here's the license:

```
*
* ----------------------------------------------------------------------------
* "THE BEER-WARE LICENSE" (Revision 42):
* <daniel@bimschas.com> wrote this file. As long as you retain this notice you
* can do whatever you want with this stuff. If we meet some day, and you think
* this stuff is worth it, you can buy me a beer in return Daniel Bimschas
* ----------------------------------------------------------------------------
*
```

## Usage

Install ```grunt-cli``` if you haven't done so yet:

```
npm install -g grunt-cli
```

Then in the app-directory:

```
npm install
grunt
```

Running ```grunt``` will call the ```default``` task which takes the modules main
file ```src/app.js```, runs it through ```browserify```, uses ```uglify``` to minize
the resulting JS file and copies this result to the ```dist``` directory, together
with anything in the ```static``` folder.

During development you can run ```grunt watch``` to have this process automated as
soon as any files in ```static``` or ```src``` change.
