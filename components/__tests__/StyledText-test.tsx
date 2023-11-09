import { render, screen } from '@testing-library/react-native';

import { MonoText } from '../StyledText';

it('renders correctly', () => {
  const text = 'Text';
  render(<MonoText>{text}</MonoText>);
  expect(screen.getByText(text)).toBeTruthy();
});
