# webpack-template

<<<<<<< HEAD

# This is a minimal webpack template i have set up for ease of use of webpack and having a cheatsheet webpack.config.js file!

This is a minimal webpack template I have set up for ease of use of webpack and having a cheatsheet webpack.config.js file!

> > > > > > > 26887a68257db6cf7785fd1ce9507bf195c9643c

## Here is the doc at your reach

## How to use the Webpack bundler

- If you haven't yet, install `npm` from the official site
- First run `npm init -y`

  > This is for the purpose of installing the `package.json` file. So if you have the file, you can skip this step!

- Run `npm install -D webpack webpack-cli webpack-dev-server html-webpack-plugin style-loader css-loader html-loader` in any **CLI** of your choice (for installing the necessary devDependecies!)

  > NOTE: For most basic SPAs (Single Page Applications), the above command is sufficient to load your `html`, `css` and `webpack` dependencies.
  >
  > > Feel free to remove any dependency that you may not be using to avoid **_loading unnecessary code_** and **_slowing the loading of your application_**!
  > >
  > > > To do this, run
  > > > `npm uninstall package_name`

- Though optional, yet useful, consider using a code linter like ESLint. To use it, run: `npm init @eslint/config@latest` and answer the questions that the terminal gives using your arrow keys! Then hit `npm install eslint@latest --save-dev` in the terminal as well!!

- To use a preset configuration, and then add some rules, to override, consider using a specific shared config that is hosted on npm. Such style guides like airbnb, standard, xo are the most used!

- Then, run `npx webpack`for bundling the code and any other attached assets.

> P.S. `html loader` is used to run any `non-JS, non-HTML type files` like images wrapped in `img` els.

> If using images in JavaScript, default import the images like:
> `import <any_Name> from "./picture.extensionName"`

- For a typical webpack project, the file structure should look like:

```
project/
 |--src/
 | |--index.js
 | |--template.html
 |--public/
 |  |--assets/
 ├───package.json
 └───readme.md
```

- Run `npm webpack` to bundle the package;
- Run `npm webpack serve` to load the project in a browser environment on a local server.
- For ease of use of these commands, add these to your scripts tag in your package.json file like so:

```
{
    //some lines of code...
    scripts: {
    "build": "webpack",
    "dev": "webpack serve",
    //add the other existing lines in the scripts here...
    },
    //some other remaining lines of code...
}
```

- With this, you can then run `npm run dev` to view your project, load the project in a browser environment on a local server.

- Then run `npm run build` to bundle the code for deployment.

> NOTE: When running these new commands, note that it is `npm` that is used and not `npx ` as was used before! Hence, it is `npm run dev` and not `npx run dev` as this will throw an error in your CLI.

- With this, your project should be ready for deployment.
- Consider using PaaS like Netlify, Vercel, Cloudflare or others to do this, as setting up pages could now become a rather complex task.
