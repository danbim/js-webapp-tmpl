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

### Default target

Running ```grunt``` will call the ```default``` task which takes the modules main
file ```src/app.js```, runs it through ```browserify```, uses ```uglify``` to minize
the resulting JS file and copies this result to the ```dist/``` directory, together
with anything in the ```static/``` folder.

It will also generate documentation using YUIdoc into the ```docs/``` subfolder.

### Development

During development you can run ```grunt watch``` to have the build process automated as
soon as any files in ```static``` or ```src``` change. ```jshint``` is also executed, so
if it finds any errors in your code the build process is immediately stopped, forcing you
to write clean(er) code right from the start.

### JSHint code checking

To run ```jshint``` for code quality inspection execute ```grunt jshint``` which
will check all .js files in the ```src``` folder. ```jshint``` is also automatically
run when invoking ```grunt watch```


### Docs generation

For JS documentation this template uses YUIdoc. Run ```grunt yuidoc``` or its alias ```grunt
doc``` to generate it to the ```docs/``` subfolder of the project.