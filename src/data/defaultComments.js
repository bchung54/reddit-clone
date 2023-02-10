import uuid from 'react-uuid';
import { defaultPosts } from './defaultPosts';

export const defaultComments = [
  {
    id: uuid(),
    content: 'What is that?',
    timeCreated: new Date('2020-12-17T03:24:00'),
    timeUpdated: new Date('2021-12-17T03:24:00'),
    postId: defaultPosts[0].id,
    user: 'confused_Redditor',
    children: [
      {
        id: uuid(),
        content: 'It is a post',
        timeCreated: new Date('2020-12-17T03:25:00'),
        timeUpdated: new Date('2020-12-17T03:25:00'),
        postId: defaultPosts[0].id,
        user: 'CptObvious',
        children: [
          {
            id: uuid(),
            content: 'username checks out',
            timeCreated: new Date('2020-12-17T04:08:00'),
            timeUpdated: new Date('2020-12-17T04:08:00'),
            postId: defaultPosts[0].id,
            user: 'icheckoutusernames',
            children: [],
            upvote: [],
            downvote: [],
          },
        ],
        upvote: ['CptObvious'],
        downvote: [],
      },
    ],
    upvote: [],
    downvote: ['CptObvious'],
  },
  {
    id: uuid(),
    content: 'American Pie 2',
    timeCreated: new Date('2023-01-17T03:24:00'),
    timeUpdated: new Date('2023-02-01T01:24:00'),
    postId: defaultPosts[0].id,
    user: '90sBaby',
    children: [],
    upvote: ['johnnycakes', 'vito'],
    downvote: [],
  },
];
