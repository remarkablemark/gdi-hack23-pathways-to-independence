import { StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-paper';

import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <Card type="outlined">
        <Card.Cover icon={require('../../assets/svgs/enroll.svg')} />
        <Card.Title title="Card Title" subtitle="Card Subtitle" />
        <Card.Content>
          <Text variant="titleLarge"> Enroll </Text>
          <Text variant="bodyMedium">
            {' '}
            Click here to see courses available for you to enroll in.{' '}
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button>Learn More</Button>
        </Card.Actions>
      </Card>

      <Card type="outlined">
        <Card.Cover icon={require('../../assets/svgs/arrows.svg')} />
        <Card.Title title="Card Title" subtitle="Card Subtitle" />
        <Card.Content>
          <Text variant="titleLarge"> Roadmap </Text>
          <Text variant="bodyMedium">
            {' '}
            Click here to see your journey to healing and independence.{' '}
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button>Learn More</Button>
        </Card.Actions>
      </Card>
    </View>
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
