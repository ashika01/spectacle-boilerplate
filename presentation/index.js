// Import React
import React from 'react';
// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Slide,
  Link,
  GoToAction
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

const images = {
  clrs: require('../assets/clrs.jpg'),
  cci: require('../assets/cracking.jpg'),
  swift: require('../assets/swift.jpg')
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <iframe
            src="https://giphy.com/embed/3vu7mt2GtRMKQ"
            width="25%"
            height="366"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          />
          <Heading>From unanimated to animated</Heading>
          <iframe
            src="https://giphy.com/embed/QHE5gWI0QjqF2"
            width="25%"
            height="320"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          />
        </Slide>
        <Slide>
          <iframe
            src="https://giphy.com/embed/mI7p0G4N2GLU4"
            width="50%"
            height="263"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          />
          <iframe
            src="https://giphy.com/embed/wpoLqr5FT1sY0"
            width="50%"
            height="348"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          />
        </Slide>
        <Slide style={{ display: 'flex',
          flexDirection: 'row' }}
        >
          <img src={images.clrs} width="25%" />
          <img src={images.cci} width="30%" />
          <img src={images.swift} width="25%" />
        </Slide>
        <Slide notes="tutorial is ok , but ideas into ur project, oss can also help here">
          <Heading>Side Projects</Heading>
          <Image>Sorutime</Image>
          <Image>StopMotion camera</Image>
        </Slide>
        <Slide>
          <Heading>Networking and Branding</Heading>
          <List>
            <ListItem>
              Resume - dont fancy it with visuals but projects
            </ListItem>
            <ListItem>meetups</ListItem>
            <ListItem>volunteering</ListItem>
            <ListItem>organzing events</ListItem>
            <ListItem>hackathons</ListItem>
            <ListItem>Blogging</ListItem>
          </List>
        </Slide>
        <Slide>
          <Notes>
            <li>Cracking the coding interview</li>
            <li>LeetCode</li>
            <li>Mocks</li>
            <li>Pramp</li>
          </Notes>
          <Heading>DataStructures and Algorithm</Heading>
        </Slide>
        <Slide>
          <Heading>Learning in first dev job</Heading>
          <List>
            <ListItem>Organized</ListItem>
            {/* to do list image */}
            <ListItem>OSS and Tools</ListItem>
            <ListItem>Mentorship and Pairing</ListItem>
            <ListItem>Testing</ListItem>
            <ListItem>Code review</ListItem>
          </List>
        </Slide>
        <Slide
          notes="Never stop learning [not going to end after college, rather its
              the beginning"
        >
          <Heading>Make mistakes, Admit them, Be your biggest critic</Heading>
        </Slide>
      </Deck>
    );
  }
}
