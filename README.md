# react-native-tailwind-elements

A comprehensive collection of customizable UI components for React Native, including various TextInputs, Buttons with loader states, Bottom Sheets, and Tailwind CSS support via NativeWind. Simplify and enhance your mobile app development with seamless and stylish elements.

## Features

- **Buttons**: Customizable buttons with loader states.
- **TextInputs**: Various text input styles including password inputs and search inputs.
- **Tailwind Support**: Easy styling with Tailwind via NativeWind.
- **Bottom Sheets**: Customizable bottom sheets.

## Installation

To install the package, use npm or yarn:

````sh
npm install react-native-tailwind-elements

or

```sh
yarn add react-native-tailwind-elements

Make sure to install nativewind for Tailwind support:

```sh
npm install nativewind
````

## Usage

# Button

A customizable button component with loader states.

# Props

- **title** (`string`): The text to display inside the button.
- **onPress** (`function`): The function to call when the button is pressed.
- **type** (`'primary' | 'secondary'`): The style type of the button.
- **isLoader** (`boolean`): Whether to show a loader.
- **isLoading** (`boolean`, optional): Whether the button is in a loading state.
- **containerStyle** (`string`, optional): Custom styles for the button container.
- **icon** (`ReactElement`, optional): Icon to display inside the button.
- **textStyle** (`StyleProp<TextStyle>`, optional): Custom styles for the button text.
- `...TouchableOpacityProps`: Other `TouchableOpacity` props.

```jsx
import React, { useState } from 'react';
import { Button } from 'react-native-tailwind-elements';

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

# TextInput

A customizable text input component with support for different input types including password and search inputs.

# Props

- **className** (`string`, optional): Custom styles for the input.
- **type** (`'searchInput' | 'input'`, optional): The type of the input.
- **style** (`StyleProp<TextStyle>`, optional): Custom styles for the input text.
- **setShowPassword** (`function`, optional): Function to toggle password visibility.
- **showPassword** (`boolean`, optional): Whether the password is visible.
- **isPassword** (`boolean`, optional): Whether the input is a password input.
- `...TextInputProps`: Other `TextInput` props.

```jsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-tailwind-elements';

const App = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View>
      <TextInput
        type="input"
        placeholder="Password"
        isPassword={true}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
      <TextInput type="searchInput" placeholder="Search" />
    </View>
  );
};

export default App;
```

# Icon Component

The `Icon` component allows you to use icons from the `react-native-feather` library, with support for dynamic imports, dark mode, and custom styles.

# Props

- **`name`** (string): The name of the icon. This should match the name of an icon in the `react-native-feather` library.
- **`size`** (number, optional): The size of the icon. Default is `24`.
- **`customStyles`** (string, optional): Additional custom styles to apply to the icon.

# Usage Example

```typescript
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from './Icon'; // Adjust the path as necessary

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Icon
        name="Menu"
        size={30}
        customStyles="p-2 bg-gray-200 rounded"
        onPress={() => {
          console.log('Menu icon pressed');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MyComponent;
```

## Colors for Tailwind Configuration

The `styles` object provided in the project relies on specific color classes defined in Tailwind CSS. Below are the recommended colors to add to your Tailwind configuration to ensure compatibility with the styles:

1. **Primary Color**

   - **Class Needed**: `bg-primary`, `text-primary`
   - **Description**: Used for primary buttons and primary text. Example: `#3490dc`.

2. **Accent Color**

   - **Class Needed**: `bg-accent`, `text-accent`
   - **Description**: Used for inputs and other accent elements. Example: `#9D00AF`.

3. **Text Color Variants**

   - **Classes Needed**: `text-dark`, `dark:text-light`
   - **Description**: Ensures text readability in both light and dark mode. Example: `#000000` (dark) and `#ffffff` (light).

4. **Custom Search Input Color**

   - **Classes Needed**: `border-accent`, `text-accent`, `dark:text-light`
   - **Description**: Styling for search input borders and text. Example: `#9D9EBA`.

5. **Background and Text Colors**
   - **Classes Needed**: `bg-transparent`, `bg-accent`, `bg-primary`
   - **Description**: Various background colors for buttons and inputs. Example: `#ffffff` (white), `#edf2f7` (light gray).

# BottomSheet Component

The `BottomSheet` component provides a customizable bottom sheet modal for displaying content within your React Native application.

## Props

### `reference`

- **Type:** `React.RefObject<BottomSheetModal>`
- **Description:** Reference to the `BottomSheetModal` component.

### `children`

- **Type:** `React.ReactNode`
- **Description:** Content to be rendered within the `BottomSheetModal`.

### `backgroundColor`

- **Type:** `string`
- **Default:** `'#00000070'`
- **Description:** Background color of the modal.

## Example Usage

```typescript
import React, { useRef } from 'react';
import BottomSheet from './BottomSheet';

const MyComponent = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const openBottomSheet = () => {
    bottomSheetRef.current?.present();
  };

  return (
    <BottomSheet reference={bottomSheetRef}>
      {/* Content inside the bottom sheet */}
    </BottomSheet>
  );
};

export default MyComponent;
```

# BottomSheetInput Component

The `BottomSheetInput` component provides a text input with enhanced focus handling suitable for use within a bottom sheet modal.

## Props

### `setText`

- **Type:** `React.Dispatch<React.SetStateAction<string>>`
- **Description:** Function to set the text input value.

### `onFocus` (optional)

- **Type:** `(args: any) => void`
- **Description:** Callback function called when the text input gains focus.

### `onBlur` (optional)

- **Type:** `(args: any) => void`
- **Description:** Callback function called when the text input loses focus.

### `inputStyle` (optional)

- **Type:** `StyleProp<TextStyle>`
- **Description:** Additional styles for the text input component.

### `placeholder` (optional)

- **Type:** `string`
- **Default:** `'Write your review here'`
- **Description:** Placeholder text displayed when the input is empty.

## Example Usage

```typescript
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheetInput from './BottomSheetInput';

const MyComponent = () => {
  const [review, setReview] = useState('');

  return (
    <View style={styles.container}>
      <Text>Write a Review:</Text>
      <BottomSheetInput
        setText={setReview}
        placeholder="Start typing here..."
        inputStyle={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginTop: 10,
  },
});

export default MyComponent;
```

### Example Tailwind Configuration (Partial)

```javascript
// tailwind.config.js

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3490dc', // Example primary color
        accent: '#9D00AF', // Example accent color
        dark: '#000000', // Example dark text color
        light: '#ffffff', // Example light text color
        accentBorder: '#9D9EBA', // Example accent border color
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'], // Example custom font family
      },
      fontSize: {
        '2xl': '1.5rem', // Example custom font size
      },
    },
  },
  variants: {},
  plugins: [],
};
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

This `README.md` file provides a comprehensive guide to installing, using, and customizing the components in your `react-native-tailwind-elements` package.

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
