import * as React from 'react';
import { Button, Card } from 'react-native-paper';

const card = () => (
  <Card type="outlined">
    <Card.Cover type="uri" />
    <Card.Title title="Card Title" subtitle="Card Subtitle" />
    <Card.Actions>
      <Button>Learn More</Button>
    </Card.Actions>
  </Card>
);

export default card;
