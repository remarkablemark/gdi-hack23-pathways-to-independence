import { Link } from 'expo-router';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Card, Button, Text } from 'react-native-paper';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Roadmap</Text>
      <View style={styles.separator} />

      <ScrollView>
        <Card mode="outlined">
          <Card mode="outlined">
            <Card.Cover source={require('../../assets/images/enroll.png')} />
          </Card>

          <Card.Content>
            <Text variant="titleLarge"> Enroll </Text>
            <Text variant="bodyMedium">
              {' '}
              Click here to see courses available for you to enroll in.{' '}
            </Text>
          </Card.Content>
          <Card.Actions>
            <Button>
              <Link href="/about">Learn More</Link>
            </Button>
          </Card.Actions>
        </Card>

        <Card mode="outlined">
          <Card.Cover source={require('../../assets/images/arrows.png')} />

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
      </ScrollView>
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
