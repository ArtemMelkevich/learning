module.exports = {
 "extends": "airbnb",
 "plugins": [ "babel", "react", "react-native", "jsx-a11y" ],
 "rules": {
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prefer-stateless-function": [0,],
    "import/prefer-default-export": ["off"],
    'react/forbid-prop-types': [0, { forbid: ['any', 'array', 'object'] }],
    "no-console": 0,
  },
};
