export const usersMapper = {
  0: {
    name: "memo",
    avatar: "/images/avatars/Ellipse 20.svg",
    isMe: true,
  },
  1: {
    name: "ayxan",
    avatar: "/images/avatars/Ellipse 21.svg",
    isMe: false,
  },
  2: {
    name: "fidan",
    avatar: "/images/avatars/Ellipse 22.svg",
    isMe: false,
  },
  3: {
    name: "vily",
    avatar: "/images/avatars/Ellipse 20.svg",
    isMe: false,
  },
};

/**
 * Creating mock leaderboard based on userId that comes from usersMapper
 */
export const leaderBoardScorersMapper: Array<
  Array<{
    orderKey: keyof typeof usersMapper;
    amount: string;
  }>
> = [
  [
    {
      orderKey: 0,
      amount: "0.00",
    },
    {
      orderKey: 1,
      amount: "0.00",
    },
    {
      orderKey: 2,
      amount: "0.00",
    },
    {
      orderKey: 3,
      amount: "0.00",
    },
  ],
  [
    {
      orderKey: 1,
      amount: "14.02",
    },
    {
      orderKey: 2,
      amount: "13.98",
    },
    {
      orderKey: 0,
      amount: "12.58",
    },
    {
      orderKey: 3,
      amount: "10.05",
    },
  ],
  [
    {
      orderKey: 3,
      amount: "24.02",
    },
    {
      orderKey: 1,
      amount: "23.98",
    },
    {
      orderKey: 0,
      amount: "22.52",
    },
    {
      orderKey: 2,
      amount: "20.05",
    },
  ],
  [
    {
      orderKey: 0,
      amount: "30.02",
    },
    {
      orderKey: 2,
      amount: "29.48",
    },
    {
      orderKey: 1,
      amount: "24.60",
    },
    {
      orderKey: 3,
      amount: "21.41",
    },
  ],
];
