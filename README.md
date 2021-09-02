# prettier-config-zombie
This module provides your project with an extendable base Prettier configuration to develop applications using my preferred code formatting.

## Installation
`npm install prettier-config-zombie -D`

## Usage
Create a `prettier` key in your `package.json` file and extend this configuration:
```
{
    "prettier": "prettier-config-zombie"
}
```

To extend the configuration and provide overrides, create a `prettier.config.js` or `.prettierrc.js` file in the root of your project and add the following:
```
module.exports = {
    ...require('prettier-config-zombie'),
    // overrides here
};
```

Optionally, add a `.prettierignore` file in your project's root with the below:
```
*.md
```

This will ignore formatting on `.md` files which may be annoying and possibly cause display issues.
