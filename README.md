# ngx-jacobo-library
test for my first angular library

token:
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



How to build a new library in the git repo :

1- Create a workspace:

ng new jacobo-workspace --no-create-application


2- Create a new library in the workspace:

cd jacobo-workspace
ng generate library ngx-jacobo-lib2


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

    to logout use (.npmrc file will disappear):

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

//npm.pkg.github.com/:_authToken=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
@jarimo97:registry=https://npm.pkg.github.com/


8- Build and pack you library:

ng build  ngx-jacobo-lib2
cd ..\..\dist\ComponentsLib\
npm pack

    This should result in a tarball being created in your dist folder: jarimo97-ngx-jacobo-lib2n-0.0.1.tgz


9- Publish the library package to GitHub

npm publish

