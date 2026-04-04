import pillIcon from '../assets/pill.svg';
import aspirinImg from '../assets/aspirin.png';
import vitamincImg from '../assets/vitaminc.png';

export const medicinesData = [
  {
    id: 1,
    name: 'Aspirin',
    time: '08:00 AM', // Example format, DayJS will parse this
    icon: pillIcon,
    image: aspirinImg,
    instruction: 'Have after meal, 1 tablet with water'
  },
  {
    id: 2,
    name: 'Vitamin C',
    time: '02:30 PM',
    icon: pillIcon,
    image: vitamincImg,
    instruction: 'Afternoon supplement, chewable'
  }
];
