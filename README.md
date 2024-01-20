# ngx-jacobo-library


How to build a new library in the git repo ngx-jacobo-library:

1- Create a workspace:

    ng new jacobo-workspace --no-create-application


2.1- Create a new library in the workspace:

    cd jacobo-workspace
    ng generate library ngx-jacobo-lib2

2.2- Add a component:

    cd ./projects/ngx-jacobo-lib2/src/lib
    ng generate component test-module --export


3- Test that the library can be build and packed (the directory dist/ngx-jacobo-lib2 must be created):

    ng build


4- Test that the library can be packed (the .tgz file must be created inside the directory dist/ngx-jacobo-lib2):

    cd ..\..\dist\ComponentsLib\
    npm pack


5- Authenticate to github with npm and token (https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens):

    npm login --registry=https://npm.pkg.github.com --scope=@jarimo97 

    Username: jarimo97
    Password: YOUR_GITHUB_TOKEN_HERE

        Succesful login will create .npmrc file in your machine-wide personal folder (on Windows, this will be C:\Users\accountname\\.npmrc).

        If you open this file you should find the following lines in it. If the two lines are not present just add them yourself.

        //npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN_HERE
        @jarimo97:registry=<https://npm.pkg.github.com/

        to logout use (.npmrc file will disappear) (in order to perform all the following steps you need to be loged in):

        npm logout --scope=@jarimo97


6- Modify your ./projects/ngx-jacobo-lib2/package.jsonlike this:

    change
        "name": "ngx-jacobo-lib2",

    to
        "name": "@jarimo97/ngx-jacobo-lib2",

    add 
        "repository": {
            "type": "git",
            "url": "git://github.com/jarimo97/ngx-jacobo-library.git"
        }


7- Create .npmrc file in your library folder (./projects/ngx-jacobo-lib2), include:

    @jarimo97:registry=https://npm.pkg.github.com/


8- Build and pack you library:

    ng build  ngx-jacobo-lib2
    cd ..\..\dist\ComponentsLib\
    npm pack

        This should result in a tarball being created in your dist folder: jarimo97-ngx-jacobo-lib2n-0.0.1.tgz


9- Publish the library package to GitHub

    npm publish

10- Update the package

        in order to update the package a new version has to be released.

        navigate to the folder: ./projects/ngx-jacobo-lib2/

    npm version [patch | minor | major | …]

        repeat steps 8 & 9 (build, pack and publish)


11- Use the library in your angular app:

        Create .npmrc file in your library folder (./projects/ngx-jacobo-lib2), include:

        @jarimo97:registry=https://npm.pkg.github.com/

        add: "@jarimo97/ngx-jacobo-lib2": "0.0.2" to package.json dependencies.

    npm install


More information:

1- How to create an angular library:
    https://angular.io/guide/creating-libraries

2- How to work with github npm registry:
    https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry

3- User guide:
    https://medium.com/@brgrz/create-a-library-with-angular-and-publish-it-to-github-package-registry-c8184193b993


