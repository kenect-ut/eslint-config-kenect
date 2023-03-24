# eslint-config-kenect

### Project Install

1. install this config

```
npm install eslint-config-kenect
```

2. We need to put our eslint settings in a file in the root of your project.

**in package.json**, add this anywhere top level. Like right under your "scripts" object.

```json
"eslintConfig": {
  "extends": ["kenect"]
}
```

Or put this in a `.eslintrc` file

```json
{
  "extends": ["kenect"]
}
```

For TypeScript projects, use `kenect/typescript`.

```json
{
  "extends": ["kenect/typescript"]
}
```

TypeScript repos will also need a `tsconfig.json` file in their project. An empty object (`{}`) will do!

3. You can add two scripts to your package.json to lint and/or fix:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
},
```

4. Done! You can now use the CLI to lint and fix files.

## Settings

If you'd like to overwrite eslint or prettier settings, you can add the rules in your `.eslintrc` file. The [ESLint rules](https://eslint.org/docs/rules/) go directly under `"rules"`.

```js
{
  "extends": [
    "kenect"
  ],
  "rules": {
    "no-console": 2,
  }
}
```

## With VS Code

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Now we need to setup some VS Code settings via `Code/File` → `Preferences` → `Settings`. It's easier to enter these settings while editing the `settings.json` file, so click the Open (Open Settings) icon in the top right corner:

```js
"editor.formatOnSave": true,
// turn it off for JS and JSX, we will do this via eslint
"[javascript][javascriptreact][typescript][typescriptreact]": {
  "editor.formatOnSave": false
},
// tell the ESLint plugin to run on save
"editor.codeActionsOnSave": {
  "source.fixAll": true
}
```

After attempting to lint your file for the first time, you may need to click on 'ESLint' in the bottom right and select 'Allow Everywhere' in the alert window.

Finally you'll usually need to restart VS code. They say you don't need to, but it's never worked for us until we restart.

## With JetBrains Products (IntelliJ IDEA, WebStorm, RubyMine, PyCharm, PhpStorm, etc)

If you have previously configured ESLint to run via a File Watcher, you might want to [turn that off.](https://www.jetbrains.com/help/idea/using-file-watchers.html#enableFileWatcher)

## Issues with ESLint not formatting code

If you experience issues with ESLint not formatting the code or you receive a `Parsing error: Cannot find module '@babel/preset-react` error message then you need to check that you opened the folder where you installed and configured ESLint directly in VS Code. The correct folder to open will be the one where you installed the `eslint-config-kenect` npm package and where you created the `.eslintrc` file.

Opening a parent folder or child folder in your code editor will cause ESLint to fail in finding the ESLint npm packages and the formatting won't work.

```sh
your-username
  |
  work_projects
    |
    platform-ui # <- Open this folder directly in your code editor
      client/
      node_modules/
      server/
      .eslintrc
      package.json
```
