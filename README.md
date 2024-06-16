# react-native-tailwind-elements

A comprehensive collection of customizable UI components for React Native, including various TextInputs, Buttons with loader states, Bottom Sheets, and Tailwind CSS support via NativeWind. Simplify and enhance your mobile app development with seamless and stylish elements.

# react-native-ui-elements

A collection of customizable UI elements for React Native applications, including various text inputs, buttons (with loader states), and bottom sheets, with support for Tailwind using NativeWind.

## Features

- **Buttons**: Customizable buttons with loader states.
- **TextInputs**: Various text input styles including password inputs and search inputs.
- **Tailwind Support**: Easy styling with Tailwind via NativeWind.
- **Bottom Sheets**: Customizable bottom sheets.

## Installation

To install the package, use npm or yarn:

```sh
npm install react-native-ui-elements

or 

```sh
yarn add react-native-ui-elements

Make sure to install nativewind for Tailwind support:

```sh
npm install nativewind
```

## Usage

# Button
A customizable button component with loader states.

# Props

title (string): The text to display inside the button.
onPress (function): The function to call when the button is pressed.
type ('primary' | 'secondary'): The style type of the button.
isLoader (boolean): Whether to show a loader.
isLoading (boolean, optional): Whether the button is in a loading state.
containerStyle (string, optional): Custom styles for the button container.
icon (ReactElement, optional): Icon to display inside the button.
textStyle (StyleProp<TextStyle>, optional): Custom styles for the button text.
...TouchableOpacityProps: Other TouchableOpacity props.

```jsx
import React, { useState } from 'react';
import { Button } from 'react-native-ui-elements';

const App = () => {
  const [loading, setLoading] = useState(false);

  const handlePress = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // Simulate an API call
  };

  return (
    <Button
      title="Click Me"
      onPress={handlePress}
      type="primary"
      isLoader={true}
      isLoading={loading}
    />
  );
};

export default App;
```



## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
