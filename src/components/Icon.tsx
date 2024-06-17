import React, { memo, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { styles } from '../assets/styles'; // Import your styles

type IconProps = {
  name: string; // Icon name as string
  size?: number; // Size of the icon
  customStyles?: string;
};

const Icon: React.FC<IconProps> = ({ name, size = 24, customStyles }) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  let customStylesProp = customStyles || '';

  // Dynamically import the icon
  const IconComponent = useMemo(() => {
    try {
      const { [name]: DynamicIcon } = require('react-native-feather');
      return DynamicIcon;
    } catch (error) {
      console.warn(`Icon ${name} does not exist in react-native-feather`);
      return null;
    }
  }, [name]);

  if (!IconComponent) {
    return null;
  }

  if (isDarkMode) {
    return (
      <IconComponent
        width={size}
        height={size}
        className={styles.iconDark + ' ' + customStylesProp}
      />
    );
  } else {
    return (
      <IconComponent
        width={size}
        height={size}
        className={styles.iconLight + ' ' + customStylesProp}
      />
    );
  }
};

export default memo(Icon);
