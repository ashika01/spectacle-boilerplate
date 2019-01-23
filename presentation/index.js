// Import React
import React from 'react';

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
  animated1: require('../assets/animated1.gif'),
  car1: require('../assets/car1.png'),
  car2: require('../assets/car2.png'),
  car3: require('../assets/car3.png'),
  page1: require('../assets/pg1.png'),
  page2: require('../assets/pg2.png'),
  page3: require('../assets/pg3.png'),
  nuka: require('../assets/nuka.gif'),
  oss: require('../assets/oss.png')
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
        <Slide notes="Before I talk about me, quick show of hands - OSS, Git, New tech">
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
          <Notes>
            <ul>
              <li>BA in GS</li>
              <li>Competitive and Dynamic</li>
              <li>Excel work - repetitive</li>
              <li>Wrote macros - Passion for developer</li>
            </ul>
          </Notes>
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
          <Notes>
            <ul>
              <li>couch potato with a laptop</li>
              <li>Mobile app</li>
            </ul>
          </Notes>
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
          <Notes>
            <ul>
              <li>Idea of a complete meal at the end of the timer</li>
              <li>UI/UX and swift</li>
              <li>self taught</li>
              <li>lot of failures - back to BA</li>
              <li>women in tech - mobile - web - new tech</li>
              <li>LeetCode/HackerRank</li>
            </ul>
          </Notes>
          <Image src={images.sorutime} />
        </Slide>
        <Slide bgImage={images.formidagon}>
          <Notes>
            <ul>
              <li>Month before - React and JS world</li>
              <li>code fellows and hackathons</li>
              <li>found Formidable</li>
              <li>Interview tips - hang around and ask me I have tons</li>
            </ul>
          </Notes>
          <Heading
            size={4}
            textColor={'primary'}
            style={{ marginTop: '250px' }}
          >
            Software Engineer
          </Heading>
        </Slide>
        <Slide>
          <Notes>
            <ul>
              <li>Introduce hero</li>
              <li>3 slides - similarities</li>
            </ul>
          </Notes>
          This is where our hero gets introduced <Heading>Open Source</Heading>
        </Slide>
        <Slide>
          <Image src={images.page1} />
        </Slide>
        <Slide>
          <Image src={images.page2} />
        </Slide>
        <Slide notes="ask about come things them noticed, components">
          <Image src={images.page3} />
        </Slide>
        <Slide overflow="scroll">
          <Notes>
            <ul>
              <li>common thing - carousel</li>
              <li>instead of building separately, over and over again</li>
              <li>OSS - share source code</li>
              <li>Interview tips - hang around and ask me I have tons</li>
            </ul>
          </Notes>
          <Image src={images.car1} />
          <Image src={images.car2} />
          <Image src={images.car3} />
        </Slide>
        <Slide>
          <Notes>
            <ul>
              <li>acheive today - walk you all through my journey</li>
              <li>swiss knife - one tool for so many different purpose</li>
              <li>OSS - share source code</li>
              <li>start - huge, confusing and scary</li>
              <li>now - love it somuch to give a talk on that</li>
              <li>
                intimidating - just download and fiddle but never contributed
              </li>
              <li>Contribution guidelines - dizzy and end of world</li>
              <li>deep dive badass ocean</li>
              <li>Need to get good at git</li>
              <li>
                <Link href="https://github.com/FormidableLabs/spectacle/blob/master/.github/PULL_REQUEST_TEMPLATE.md#checklist-feel-free-to-delete-this-section-upon-completion" />
              </li>
            </ul>
          </Notes>
          <Image src={images.oss} />
        </Slide>
        <Slide>
          <Notes>
            <ul>
              <li>Nuka Carousel - simple react</li>
              <li>easy to add it to any react project</li>
              <li>
                props - more than one slide to ertical scrolling to accessibilty
              </li>
              <li>walk you through my initial bug fixes</li>
              <li>
                Before we start, few things about open source you need to know
              </li>
              <li>So many OS community, Github is largest</li>
              <li>I had nuka given to me but what about us </li>
            </ul>
          </Notes>
          <Heading size={2} textColor={'tertiary'}>
            Nuka Carousel
          </Heading>
          <Image src={images.nuka} />
        </Slide>
        <Slide>
          <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex',
              flexDirection: 'column' }}
            >
              <List>
                <ListItem>Find your favorite repo</ListItem>
                <ListItem>
                  <Link href="https://www.firsttimersonly.com/">
                    Seek for first timer bugs
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://github.com/MunGell/awesome-for-beginners">
                    awesome repo filled with good bugs for beginners
                  </Link>
                </ListItem>
              </List>
            </div>
            <iframe
              src="https://giphy.com/embed/KTkfYhwia4tQQ"
              width="480"
              height="271"
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
            />
          </div>
        </Slide>
        <Slide>
          <Notes>
            <ul>
              <li>issues</li>
              <li>Maintainers</li>
            </ul>
          </Notes>
          <List>
            <Link href="https://github.com/FormidableLabs/nuka-carousel/issues/177">
              AfterSlide
            </Link>
            <GoToAction
              render={(goToSlide) => (
                <p onClick={() => goToSlide(16)}>New feature withoutControls</p>
              )}
            />
            <Link href="https://github.com/FormidableLabs/nuka-carousel/pull/412">
              Fix Bug initialSlideHeight
            </Link>
          </List>
        </Slide>
        <Slide goTo={15}>
          <Image src={PR1} />
        </Slide>
        <Slide
          bgColor="primary"
          textColor="tertiary"
          notes="Okay open nuka, spect to show labels and samples"
        >
          <Heading size={6} textColor="secondary" caps>
            Few other things that can get you started
          </Heading>
          <List>
            <ListItem> Documentation</ListItem>
            <ListItem>Testing a bug and reporting with verifications</ListItem>
            <ListItem>Sample code for bugs</ListItem>
            <ListItem>Provide your work arounds / hacks</ListItem>
            <ListItem>
              Refactor code for understandability / readability
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Notes>
            <ul>
              <li>First thing fork the repo</li>
              <li>Clone</li>
              <li>Contributing guidelines</li>
              <li>branch</li>
              <li>work</li>
              <li>PR</li>
            </ul>
          </Notes>
          <Heading>DEMO Time</Heading>
          <iframe
            src="https://giphy.com/embed/3oFzm0Ocr6CC0URLsA"
            width="480"
            height="270"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          />
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          textColor="tertiary"
          notes="touch a bit on creating your own repo"
        >
          <Heading size={6} textColor="secondary" caps>
            My Learnings
          </Heading>
          <List>
            <ListItem>Code for a problem not just an idea</ListItem>
            <ListItem>Clean code</ListItem>
            <ListItem>
              Design process for coding and talking out solutions
            </ListItem>
            <ListItem>Getting in touch with the community</ListItem>
            <ListItem>
              Understanding different use cases for a single tiny piece of code
            </ListItem>
            <ListItem>
              Accepting mistakes and learn to roll back or move forward on
              decisions
            </ListItem>
            <ListItem>Git and commit messages</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
