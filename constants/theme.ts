import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const useTheme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    ...DefaultTheme.colors,
    primary: '#000000', // black
    onPrimary: '#01B675', // pinkish
    background: '#F5F5F5', // light grey
    buttonColor: '#01B675', // green
    onSurface: '#000000', //Black
    surface: '#FFFFFF', //white
  },
};
