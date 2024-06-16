import React, { memo } from 'react';
import {
  TextInput as RNTextInput,
  type TextInputProps,
  type StyleProp,
  type TextStyle,
  View,
} from 'react-native';
import { styles } from '../assets/styles'; // Make sure to import your tailwind styles here
import { Eye, EyeOff, Search } from 'react-native-feather';
type TextInputPropsWithTW = {
  className?: string;
  type?: 'searchInput' | 'input';
  style?: StyleProp<TextStyle>;
  setShowPassword?: any;
  showPassword?: boolean;
  isPassword?: boolean;
};

const TextInput: React.FC<TextInputProps & TextInputPropsWithTW> = ({
  className,
  type,
  style,
  setShowPassword,
  showPassword,
  isPassword,
  ...props
}) => {
  const inputStyles = type == 'input' ? styles.input : styles.searchInput;

  return (
    <View
      className={
        type == 'input'
          ? 'relative'
          : inputStyles + ' dark:bg-transparent flex flex-row items-center px-2'
      }
    >
      {type == 'input' ? null : (
        <Search className="text-light p-3 m-2 h-4 w-4"></Search>
      )}
      <RNTextInput
        className={
          type == 'input'
            ? inputStyles + ' px-4 '
            : 'h-12 flex-1 font-Outfit text-dark dark:text-light'
        }
        style={{
          fontFamily: 'Outfit',
        }}
        {...props}
      />
      {isPassword &&
        (showPassword ? (
          <Eye
            className="text-[#68698D] absolute right-0 p-5 mx-3  my-5 h-100 "
            onPress={() => {
              setShowPassword(!showPassword);
            }}
          ></Eye>
        ) : (
          <EyeOff
            className="text-[#68698D] absolute right-0 p-5 mx-3 my-5 h-100"
            onPress={() => {
              setShowPassword(!showPassword);
            }}
          ></EyeOff>
        ))}
    </View>
  );
};

export default memo(TextInput);
