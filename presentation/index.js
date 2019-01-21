// Import React
import React from 'react';
import LifeHistory from './life-history';

import PR1 from '../assets/pr1.png';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text,
  Link,
  GoToAction
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  formidagon: require('../assets/formidable.jpg'),
  PR1: require('../assets/pr1.png'),
  sorutime: require('../assets/sorutime.png'),
  animated: require('../assets/animated.gif'),
  animated1: require('../assets/animated1.gif')
};

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

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide>
          <Heading>Open Your Heart to Open Source</Heading>
        </Slide>
        <Slide>
          <Heading>So about me</Heading>
          <br />
          <iframe
            src="https://giphy.com/embed/5hbbUWcuvtoJGx5fQ4"
            width="480"
            height="240"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          />
        </Slide>
        <Slide>
          <Heading size={2} textColor={'tertiary'}>
            Business Analyst
          </Heading>
          <iframe
            src="https://giphy.com/embed/8Q31McooUHTNu"
            width="480"
            height="274"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          />
          <iframe
            src="https://giphy.com/embed/HB4mYkjjFcvNm"
            width="480"
            height="271"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          />
          <iframe
            src="https://giphy.com/embed/FxkDFjnaN9Iv6"
            width="480"
            height="202"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          />
        </Slide>
        <Slide>
          <Heading size={2} textColor={'tertiary'}>
            Technology
          </Heading>
          <iframe
            src="https://giphy.com/embed/6OrCT1jVbonHG"
            width="480"
            height="300"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          />
          <iframe
            src="https://giphy.com/embed/wpoLqr5FT1sY0"
            width="480"
            height="348"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          />
        </Slide>
        <Slide>
          <Image src={images.sorutime} />
        </Slide>
        <Slide>
          <Image src={images.animated1} />
        </Slide>
        <Slide bgImage={images.formidagon}>
          <Heading
            size={4}
            textColor={'primary'}
            style={{ marginTop: '250px' }}
          >
            Software Engineer
          </Heading>
        </Slide>
        <Slide>
          This is where our hero gets introduced <Heading>Open Source</Heading>
        </Slide>
        <Slide>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <List>
              <ListItem>Big</ListItem>
              <ListItem>Fat</ListItem>
              <ListItem>Scary</ListItem>
              <ListItem>Confusing</ListItem>
              <ListItem>Beautiful</ListItem>
            </List>
            <iframe
              src="https://giphy.com/embed/TLfdcaTrgz9PW"
              width="444"
              height="480"
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
            />
          </div>
        </Slide>
        <Slide>Nuka Carousel</Slide>
        <Slide>
          <List>
            <Link href="https://github.com/FormidableLabs/nuka-carousel/issues/177">
              AfterSlide
            </Link>
            <GoToAction
              render={(goToSlide) => (
                <p onClick={() => goToSlide(9)}>New feature withoutControls</p>
              )}
            />
            <Link href="https://github.com/FormidableLabs/nuka-carousel/pull/412">
              Fix Bug initialSlideHeight
            </Link>
          </List>
        </Slide>
        <Slide goTo={8}>
          <Image src={PR1} />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            My Learnings
          </Heading>
          <List>
            <ListItem>Code for a problem not just an idea</ListItem>
            <ListItem>Clean code</ListItem>
            <ListItem>Design process for coding</ListItem>
            <ListItem>Fun</ListItem>
            <ListItem>Get in touch with the community</ListItem>
            <ListItem>
              Understanding different use cases for a single tiny piece of code
            </ListItem>
            <ListItem>Talking out solutions</ListItem>
            <ListItem>
              Accepting mistakes and learn to roll back or move forward on
              decisions
            </ListItem>
            <ListItem>Git</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Few things that can get you started
          </Heading>
          <List>
            <ListItem> Documentation</ListItem>
            <ListItem>Testing a bug and reporting with verifications</ListItem>
            <ListItem>Sample code for bugs</ListItem>
            <ListItem>Provide your work arounds / hacks</ListItem>
            <ListItem>Actual Solution</ListItem>
            <ListItem>
              Refactor code for understandability / readability
            </ListItem>
            <ListItem>Build new feature</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
