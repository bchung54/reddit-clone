import {
  IoGameControllerOutline,
  IoEllipsisHorizontalSharp,
} from 'react-icons/io5';
import { MdOutlineSportsBaseball, MdOutlineStars } from 'react-icons/md';
import { BiLineChart } from 'react-icons/bi';
import { CiBitcoin } from 'react-icons/ci';
import { TfiDesktop } from 'react-icons/tfi';

export const defaultTopics = [
  { name: 'Gaming', icon: <IoGameControllerOutline className="icon" /> },
  { name: 'Sports', icon: <MdOutlineSportsBaseball className="icon" /> },
  { name: 'Business', icon: <BiLineChart className="icon" /> },
  { name: 'Crypto', icon: <CiBitcoin className="icon" /> },
  { name: 'Television', icon: <TfiDesktop className="icon" /> },
  { name: 'Celebrity', icon: <MdOutlineStars className="icon" /> },
  { name: 'More Topics', icon: <IoEllipsisHorizontalSharp className="icon" /> },
];

export const defaultPopularCategories = [
  { name: 'Popular Communities', icon: null },
  { name: 'Gaming', icon: null },
  { name: 'Sports', icon: null },
  { name: 'TV', icon: null },
  { name: 'Travel', icon: null },
  { name: 'Health & Fitness', icon: null },
  { name: 'Fashion', icon: null },
];

export const defaultSubs = [
  'AskReddit',
  'NoStupidQuestions',
  'explainlikeimfive',
  'LifeProTips',
  'NBA',
  'funny',
  'aww',
  'Music',
  'pics',
  'science',
  'worldnews',
  'videos',
  'Showerthoughts',
  'movies',
  'Futurology',
];
