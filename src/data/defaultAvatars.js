import { sample } from 'lodash';

const colorList = [
  'A5A4A4', // Gray
  '545452',
  'A06A42', // Brown
  'C18D42',
  'FF4500', // Orange
  'FF8717',
  'FFB000', // Yellow
  'FFD635',
  'DDBD37',
  'D4E815', // Green
  '94E044',
  '46A508',
  '46D160',
  '0DD3BB', // Blue
  '25B79F',
  '008985',
  '24A0ED',
  '0079D3',
  '7193FF',
  '4856A3', // Purple
  '7E53C1',
  'FF66AC', // Pink
  'DB0064',
  'EA0027', // Red
  'FF585B',
];

const defaultAvatars = colorList.map((color) => {
  const avatarNumbers = [...Array(21).keys()].slice(1);
  return avatarNumbers.map((avatarNumber) => {
    return `https://www.redditstatic.com/avatars/avatar_default_${avatarNumber
      .toString()
      .padStart(2, '0')}_${color}.png`;
  });
});

export default function randomAvatarURL() {
  return sample(sample(defaultAvatars));
}
