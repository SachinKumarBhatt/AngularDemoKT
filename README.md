# Third

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
"# AngularDemoKT" 

### Steps to run on tomcat server 

http://www.thejavageek.com/2018/01/04/deploying-angular-app-tomcat/

Go to our app and run below command.
ng build --base-href=/angular/

    ng invokes angular
    build asks angular to build current app
    –base-href tells angular to create a reference directory where generated index.html file will be placed. So, in current case, generated files need to be placed in /angular folder in tomcat directory structure.

When command runs successfully, it creates all required files in dist folder as below.
We are ready to deploy angular app in tomcat. Just copy all these files and paste them in /angular folder under /webapps folder in tomcat.

Once copied, fire up the server and visit localhost:8080/angular/index.html and our bikes app should be seen running.

