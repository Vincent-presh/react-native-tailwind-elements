import React from 'react';
import { Text } from 'react-native';

const TextCustom = (props: any) => {
  return (
    <Text
      adjustsFontSizeToFit
      allowFontScaling
      style={[{ fontFamily: 'Outfit' }, props?.style]}
    >
      {props?.children}
    </Text>
  );
};

export default TextCustom;
