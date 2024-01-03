import WelcomeIcon1 from '../../assets/svgs/WelcomeIcon1';
import WelcomeIcon2 from '../../assets/svgs/WelcomeIcon2';
import WelcomeIcon3 from '../../assets/svgs/WelcomeIcon3';
import WelcomeIcon4 from '../../assets/svgs/WelcomeIcon4';

const slides = [
  {
    id: 1,
    title: 'Messages',
    text: 'Messages+ syncs across your Android phone,\n tablet, and other smart devices.',
    icon: <WelcomeIcon1 />,
  },
  {
    id: 2,
    title: 'Group Messaging',
    text: 'Start Group Messaging easily. Instantly Create a\n Group by adding and removing participants for\n group communication. Customize and much more.',
    icon: <WelcomeIcon2 />,
  },
  {
    id: 3,
    title: 'Extended Coverage',
    text: 'Send and receive text messages over Wi-Fi. No\n mobile network connection is required!',
    icon: <WelcomeIcon3 />,
  },
  {
    id: 4,
    title: 'Location Services',
    text: 'Easily view and share your real-time location with friends, and select destinations to meet at.',
    icon: <WelcomeIcon4 />,
  },
];

export default slides;
