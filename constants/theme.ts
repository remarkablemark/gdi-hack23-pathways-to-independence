import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    ...DefaultTheme.colors,
    primary: '#000000', // black
    onPrimary: '#01B675', // pinkish
    background: '#F5F5F5', // light grey
    buttonColor: '#F6F1FB', // green
    onSurface: '#000000', //Black
    surface: '#FFFFFF', //white
  },
};
