import { Link } from 'expo-router';
import { StyleSheet, ScrollView } from 'react-native';
import { Card, Button, Text } from 'react-native-paper';

import { View } from '../../components/Themed';
import { useTheme } from '../../constants/theme';

export default function TabOneScreen() {
  const theme = useTheme;
  return (
    <ScrollView>
      <Card mode="outlined">
        <Card.Cover source={{ uri: require('../../assets/svgs/enroll.svg') }} />

        <Card.Content>
          <Text variant="titleLarge"> Enroll </Text>
          <Text variant="bodyMedium">
            {' '}
            Click here to see courses available for you to enroll in.{' '}
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button style={{ backgroundColor: theme.colors.buttonColor }}>
            <Link href="/courses" style={{ color: theme.colors.surface }}>
              Learn More
            </Link>
          </Button>
        </Card.Actions>
      </Card>

      <Card mode="outlined">
        <Card.Cover source={{ uri: require('../../assets/svgs/arrows.svg') }} />

        <Card.Content>
          <Text variant="titleLarge"> Roadmap </Text>
          <Text variant="bodyMedium">
            {' '}
            Click here to see your journey to healing and independence.{' '}
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button style={{ backgroundColor: theme.colors.buttonColor }}>
            <Link
              href="/(tabs)/roadmap"
              style={{ color: theme.colors.surface }}
            >
              Learn More
            </Link>
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
