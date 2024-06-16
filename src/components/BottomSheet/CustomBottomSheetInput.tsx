import React, { useCallback, useEffect } from 'react';
import {
  type TextInputProps,
  type StyleProp,
  type TextStyle,
  TextInput,
} from 'react-native';
import { useBottomSheetInternal } from '@gorhom/bottom-sheet'; // Assuming you're using @gorhom/bottom-sheet

interface BottomSheetInputProps extends TextInputProps {
  setText: React.Dispatch<React.SetStateAction<string>>; // Function to set the text
  onFocus?: (args: any) => void; // Function called when TextInput gets focus
  onBlur?: (args: any) => void; // Function called when TextInput loses focus
  inputStyle?: StyleProp<TextStyle>; // Additional style for the TextInput
  placeholder?: string; // Placeholder text for the TextInput
}

const BottomSheetInput: React.FC<BottomSheetInputProps> = ({
  setText,
  onFocus,
  onBlur,
  inputStyle,
  placeholder = 'Enter Text', // Default placeholder text
  ...restProps // Other TextInputProps
}) => {
  const { shouldHandleKeyboardEvents } = useBottomSheetInternal();

  useEffect(() => {
    return () => {
      // Reset the flag on unmount
      shouldHandleKeyboardEvents.value = false;
    };
  }, [shouldHandleKeyboardEvents]);

  const handleOnFocus = useCallback(
    (args: any) => {
      shouldHandleKeyboardEvents.value = true;
      if (onFocus) {
        onFocus(args);
      }
    },
    [onFocus, shouldHandleKeyboardEvents]
  );

  const handleOnBlur = useCallback(
    (args: any) => {
      shouldHandleKeyboardEvents.value = false;
      if (onBlur) {
        onBlur(args);
      }
    },
    [onBlur, shouldHandleKeyboardEvents]
  );

  return (
    <TextInput
      placeholder={placeholder}
      textAlignVertical="center"
      placeholderTextColor="#68698D"
      multiline={true}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      onChangeText={(text: string) => {
        setText(text);
      }}
      // eslint-disable-next-line react-native/no-inline-styles
      style={[{ fontFamily: 'Outfit' }, inputStyle]}
      {...restProps}
    />
  );
};

export default BottomSheetInput;
