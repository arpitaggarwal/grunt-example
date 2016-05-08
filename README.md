# Grunt

Grunt and Grunt plugins are installed and managed via `npm`, the Node.js package manager. This is an awesomely powerful build setup - concatination, minifcation, testing, hinting, and auto-rebuilding - in only 50 lines of code.

### Grunt Cli Installation
```
npm install -g grunt-cli
```

### Grunt project setup

It involves adding two files to your project: ```package.json``` and the ```Gruntfile```.

`package.json:` This file is used by npm to store metadata for projects published as npm modules. You will list grunt and the Grunt plugins your project needs as devDependencies in this file and should be committed with your project source.

`Gruntfile:` This file is named Gruntfile.js or Gruntfile.coffee and is used to configure or define tasks and load Grunt plugins. When this documentation mentions a Gruntfile it is talking about a file, which is either a Gruntfile.js or a Gruntfile.coffee. It is a valid JavaScript or CoffeeScript file that belongs in the root directory of your project, next to the package.json file, and should be committed with your project source and comprised of the following parts:

1. The "wrapper" function
2. Project and task configuration
3. Loading Grunt plugins and tasks
4. Custom tasks


### Installing Grunt and gruntplugins

The easiest way to add Grunt and gruntplugins to an existing package.json is with the command `npm install <module> --save-dev`. Not only will this install <module> locally, but it will automatically be added to the devDependencies section, using a tilde version range.

For example, this will install the latest version of Grunt in your project folder, adding it to your devDependencies:

```
npm install grunt --save-dev
```

### Loading Grunt plugins and tasks

Many commonly used tasks like concatenation, minification and linting are available as grunt plugins. As long as a plugin is specified in package.json as a dependency, and has been installed via npm install, it may be enabled inside your Gruntfile with a simple command:

```
// Load the plugin that provides the "uglify" task.
grunt.loadNpmTasks('grunt-contrib-uglify');
```

### Grunt commands
`grunt --help` - command will list all available tasks.
