import React, { memo } from 'react';
import {
  TouchableOpacity,
  type TouchableOpacityProps,
  type StyleProp,
  type TextStyle,
  ActivityIndicator,
  View,
} from 'react-native';
import { styles } from '../assets/styles'; // Make sure to import your tailwind styles here
import TextCustom from './Text.js';
type ButtonProps = {
  title: string;
  onPress: () => void;
  type: 'primary' | 'secondary';
  isLoader: boolean;
  isLoading?: boolean;
  containerStyle?: string;
  icon?: any;
  textStyle?: StyleProp<TextStyle>;
};

const Button: React.FC<ButtonProps & TouchableOpacityProps> = ({
  title,
  onPress,
  type = 'primary',
  containerStyle,
  isLoader,
  icon,
  isLoading,
  ...props
}) => {
  const buttonStyles =
    type === 'primary' ? styles.primaryButton : styles.secondaryButton;
  const buttonTextStyles =
    type === 'primary' ? styles.primaryButtonText : styles.secondaryButtonText;
  const buttonLoaderStyles = type === 'primary' ? '#ffffff' : '#9D00AF';
  const isDisabledStyle = props?.disabled || isLoading ? 'bg-accent' : '';

  return (
    <TouchableOpacity
      className={buttonStyles + ' ' + containerStyle + ' ' + isDisabledStyle}
      onPress={onPress}
      disabled={props?.disabled || isLoading}
      {...props}
    >
      {isLoader && isLoading ? (
        <ActivityIndicator color={buttonLoaderStyles}></ActivityIndicator>
      ) : (
        <View className="flex flex-row gap-2 items-center">
          {icon && icon}
          <TextCustom className={buttonTextStyles}>{title}</TextCustom>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default memo(Button);
