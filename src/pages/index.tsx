import * as React from 'react';
import theme from '../theme';
import Fonts from '../fonts';
import { ChakraProvider } from '@chakra-ui/react';
import { HomeTemplate, HomeTemplateProps } from '../templates';
import icon from '../assets/images/ICON2.png';
import { navLinks } from './navlinks';
const IndexPage = () => {
  const templateArgs: HomeTemplateProps = {
    navLinks: navLinks,
    title: 'Berkeley Venture Capital',
    subtitle: "Cal's Only Undergraduate VC Organization",
    section1Title: 'Who are we?',
    section1Body:
      "Berkeley Venture Capital is a student-run organization that aims to develop students' interest in venture capital and startup activity on campus. We felt the need to address Berkeley students' ingenuity in engineering, analysis and business management with an equally developed venture capital student organization to serve student's needs when exploring the Bay Area's VC landscape.",
    section2Title: 'Our Pillars',
    section2Body:
      'Our core activities are guided by our core goals: Educating and Developing our members, while building a Community between ourselves and our collaborators.',
    section2Cards: [
      [
        icon,
        'Education',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo consectetur sed et at aliquet. Dignissim suspendisse tellus pellentesque erat et elementum eu egestas. Posuere malesuada odio purus feugiat purus volutpat. Ipsum.',
      ],
      [
        icon,
        'Services',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo consectetur sed et at aliquet. Dignissim suspendisse tellus pellentesque erat et elementum eu egestas. Posuere malesuada odio purus feugiat purus volutpat. Ipsum.',
      ],
      [
        icon,
        'Community',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo consectetur sed et at aliquet. Dignissim suspendisse tellus pellentesque erat et elementum eu egestas. Posuere malesuada odio purus feugiat purus volutpat. Ipsum.',
      ],
    ],
    section3Title: 'Testimonials',
    section3Slider: [
      [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget gravida mi arcu purus. In amet cursus feugiat vulputate tellus leo. Dictum hendrerit in maecenas pulvinar magna orci purus commodo. Enim congue mi volutpat orci varius.',
        'Name Name',
      ],
    ],
    logos: ['mastercard', 'amazon', 'salesforce', 'mastercard', 'amazon', 'salesforce'],
    footerLinks: [
      'https://www.facebook.com/',
      'https://www.instagram.com/',
      'https://www.linkedin.com/',
      'email@example.com',
    ],
  };

  return (
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <Fonts />
        <HomeTemplate {...templateArgs} />
      </ChakraProvider>
    </React.StrictMode>
  );
};

export default IndexPage;
