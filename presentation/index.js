// Import React
import React from 'react';
import './styles.css';
// Import Spectacle Core tags
import { Deck, Heading, Image, List, ListItem, Notes, Slide } from 'spectacle';

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
  cci: require('../assets/cci.jpg'),
  swift: require('../assets/swift.jpg'),
  sorutime: require('../assets/sorutime.png'),
  gif1: require('../assets/animated.gif'),
  gif2: require('../assets/animated1.gif'),
  chart: require('../assets/chart.jpg'),
  checkList: require('../assets/Checklist.png'),
  arkit: require('../assets/ARkit.png'),
  octocat: require('../assets/octocat.jpg'),
  react: require('../assets/react.png'),
  twitter: require('../assets/twitter.png'),
  interview: require('../assets/interview-checklist.jpg')
};

export default class Presentation extends React.Component {
  render() {
    return (
      <div>
        <Deck
          transition={['zoom', 'slide']}
          transitionDuration={500}
          theme={theme}
          className="spectacle-deck"
        >
          <Slide style={{ display: 'flex',
            flexDirection: 'column' }}
          >
            <Notes>
              <li>nothing super fancy, non technical and simple</li>
              <li>Like to keep it open ended, lots of Q+A</li>
            </Notes>
            <iframe
              src="https://giphy.com/embed/3vu7mt2GtRMKQ"
              width="25%"
              height="50%"
              frameBorder="0"
              style={{ 'float': 'left' }}
            />
            <Heading>Unanimated to Animated</Heading>
            <iframe
              src="https://giphy.com/embed/QHE5gWI0QjqF2"
              width="25%"
              height="50%"
              frameBorder="0"
              style={{ 'float': 'right' }}
            />
          </Slide>
          <Slide>
            <Notes>
              <li>
                crazy, intense, wolf of wall street etc, but some point it
                became mechnical. Bottom line - inspired and became a dev.
              </li>
              <li>concenterate on my journey as dev and first job</li>
            </Notes>
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
          <Slide>
            <Notes>
              <li>
                what everyone told - Books, Algorithms, Programming Language
              </li>
              <li>Not for everyone</li>
              <li>nothing made sense - DS AND ALGOS</li>
            </Notes>
            <div className="stack stacks">
              <img src={images.clrs} />
              <img src={images.cci} />
              <img src={images.swift} />
            </div>
          </Slide>
          <Slide>
            <Notes>
              <li>
                "tutorial is ok , but ideas into ur project, oss can also help
                here"
              </li>
              <li>look for inspirations</li>
              <li>things that ll keep you motivated to stay in the field</li>
            </Notes>
            <Heading>Side Projects</Heading>
          </Slide>
          <Slide notes="missing home cooked meals - needed recipe index">
            <Image src={images.sorutime} />
          </Slide>
          <Slide notes="draw a lot and wanted to create animation from that">
            <Image src={images.gif1} height="800px" />
          </Slide>
          <Slide>
            <Notes>
              <li>why side project matters</li>
              <li>Design</li>
              <li>Other people's usage</li>
              <li>code understanding</li>
              <li>size of code/performance</li>
              <li>accessibility</li>
              <li>
                Mainly - shows more passion and understanding on subject than a
                tutorial project -- ADOBE
              </li>
            </Notes>
            <Image src={images.gif2} />
          </Slide>
          <Slide>
            <Notes>
              <li>Built project and now job hunting</li>
              <li>Cracking the coding interview</li>
              <li>LeetCode</li>
              <li>Mocks</li>
              <li>
                2 Best Advice - def helped - breaking a whiteboarding prob into
                as many simple problems as possibles
              </li>
              <li>recording phone interviews</li>
            </Notes>
            <Heading
              size={3}
              textColor="#03A9FC"
              style={{ paddingBottom: '15px' }}
            >
              Data Structures and Algorithm
            </Heading>
            <div style={{ height: '400px' }}>
              <Image src={images.chart} />
            </div>
          </Slide>

          <Slide>
            <Notes>
              <li>
                Resume - keep it simple no one wants it to be fancy looking
              </li>
              <li>
                Best advise from recrut - One page only - if you cant put it in
                the first page not worth putting it at all
              </li>
              <li>
                Meeting people - talk casual - get to know as much as possible
                about the company - then contact recruiters
              </li>
              <li>
                numbers game - Might be - but for me - personalization worked
                best
              </li>
              <li>
                Why volunteer in tech fairs/conferences? - get to meet and talk
                with leads longer
              </li>
              <li>
                Social presense - branding self - dont like that? -
                blogging/Hack nights can also help develop skills
              </li>
            </Notes>
            <Heading>Networking and Branding</Heading>
            <List>
              <ListItem>Resume</ListItem>
              <ListItem>Meetups</ListItem>
              <ListItem>Volunteering and Organzing events</ListItem>
              <ListItem>Blogging and Hackathons</ListItem>
            </List>
          </Slide>
          <Slide notes="got a job, you know a lot of computer science, excited first day">
            <Heading size={4}>First day of being a dev</Heading>
            <iframe
              src="https://giphy.com/embed/26BGIqWh2R1fi6JDa"
              width="480"
              height="480"
              frameBorder="0"
            />
          </Slide>
          <Slide>
            <Heading>My learnings so far</Heading>
          </Slide>
          <Slide bgColor="black">
            <Notes>
              <li>Tools are okay</li>
              <li>not gonna implement everything from stratch</li>
              <li>
                make use of diff frameworks - learn to use them in side projects
              </li>
            </Notes>
            <Heading
              size={5}
              textColor="#03A9FC"
              style={{ marginBottom: '100px' }}
            >
              OSS and Tools
            </Heading>
            <div style={{ display: 'flex',
              height: '250px' }}
            >
              <Image src={images.octocat} width="25%" />
              <Image src={images.react} width="35%" />
              <Image src={images.arkit} width="25%" />
            </div>
          </Slide>
          <Slide>
            <Notes>
              <li>you need help - ask for it</li>
              <li>
                pair with anyone - bcoz sometimes all you need is a different
                perspective
              </li>
              <li>
                Learn from experts - what takes you 5 hours ll take them only 5
                mins
              </li>
            </Notes>
            <Heading
              size={5}
              textColor="#03A9FC"
              style={{ marginBottom: '100px' }}
            >
              Mentorship and Pairing
            </Heading>
            <iframe
              src="https://giphy.com/embed/iVDo6InQKyW8o"
              width="480"
              height="270"
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
            />
          </Slide>
          <Slide>
            <Notes>
              <li>terms ypu dont know</li>
              <li>notes from meetings</li>
              <li>notes from code reviews</li>
              <li>lose track - must organize</li>
            </Notes>
            <Heading size={3} textColor="#03A9FC">
              Organized
            </Heading>
            <Image src={images.checkList} width="60%" />
          </Slide>
          <Slide
            notes="Never stop learning [not going to end after college, rather its
              the beginning"
          >
            <Heading>Be your biggest critic</Heading>
          </Slide>
          <Slide>
            <Image src={images.interview} />
          </Slide>
          <Slide>
            <Heading size={4} textColor="#03A9FC">
              Ashika Kasiviswanathan
            </Heading>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img
                src={images.twitter}
                style={{ width: '80px',
                  height: '80px' }}
              />
              <b>@ashika112</b>
            </div>
            <div style={{ marginTop: '100px' }}>
              Slides - <b>https://bit.ly/2TkJ0Za</b>
            </div>
          </Slide>
        </Deck>
      </div>
    );
  }
}
