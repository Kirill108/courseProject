# Подготовка к старту

---

## Установка React + ts

- `npm create vite@latest my-react-app --template react`
- `cd my-react-app`
- `npm install`
- `npm run dev`

---

## Установка Eslint, Redux

- `npm init @eslint/config`
- `npm install -D eslint-plugin-react eslint-plugin-react-hooks eslint-config-airbnb redux react-redux react-router-dom @reduxjs/toolkit`

---

### Настройка .eslintrc.json
*copy/past*  

```
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:react/jsx-runtime",
        "plugin:import/recommended",
        "airbnb",
        "prettier",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react-hooks",
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "import/prefer-default-export": "off",
        "react/prop-types": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".tsx", ".ts"] }],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn" 
    }
}
```

---

## Установка **Prettier**

- `npm install -D --save-exact prettier eslint-config-prettier`
- `echo {}> .prettierrc.json`

---

### Настройка .prettierrc.json

```
{
  "trailingComma": "es5",
  "tabWidth": 4,
  "semi": true,
  "singleQuote": true
}
```


