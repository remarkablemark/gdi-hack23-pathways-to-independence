import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  ActivityIndicator,
  Card,
  Button,
  Text,
  useTheme,
} from 'react-native-paper';

export default function TabOneScreen() {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View style={styles.separator} />
      <ActivityIndicator />

      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        <View
          style={[styles.separator, { backgroundColor: theme.colors.light }]}
        />

        <Card mode="outlined">
          <Card.Cover
            source={{ uri: require('../../assets/svgs/enroll.svg') }}
          />
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

        <Card mode="outlined">
          <Card.Cover
            source={{ uri: require('../../assets/svgs/arrows.svg') }}
          />
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
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    width: '80%',
  },
});
