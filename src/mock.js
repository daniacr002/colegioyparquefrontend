// Mock data for Twitter/X clone

export const mockUsers = [
  {
    id: '1',
    username: 'Dani.xq.si',
    displayName: 'Daniela Alejandra',
    email: 'emma@schoolpark.com',
    bio: '🌈 Art lover | Rainbow chaser | Making friends every day! ✨',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIm9M7R855hlqCD2klGAShJzI0-NgPMhtHlg&s',
    coverImage: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1200&h=400&fit=crop',
    followers: 456,
    following: 289,
    joinedDate: '2023-03-15',
    verified: true
  },
  {
    id: '2',
    username: 'sophiapark',
    displayName: 'Sophia Park',
    email: 'sophia@schoolpark.com',
    bio: '🎨 Creative soul | Love drawing & painting | Spreading joy! 💖',
    avatar: 'https://resizer.iproimg.com/unsafe/768x/filters:format(webp):quality(75):max_bytes(102400)/https://assets.iprofesional.com/assets/jpg/2014/11/410694.jpg',
    coverImage: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&h=400&fit=crop',
    followers: 823,
    following: 412,
    joinedDate: '2023-05-20',
    verified: false
  },
  {
    id: '3',
    username: 'techguru',
    displayName: 'Arantza Lidia',
    email: 'tech@example.com',
    bio: 'Tech news & reviews | AI enthusiast | Building the future 🚀',
    avatar: 'https://live.staticflickr.com/3073/2760318685_7f5d9e0cfd_c.jpg',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=400&fit=crop',
    followers: 12340,
    following: 890,
    joinedDate: '2018-03-10',
    verified: true
  },
  {
    id: '4',
    username: 'foodlover',
    displayName: 'GRWM con salome',
    email: 'food@example.com',
    bio: '🍕 Food blogger | Recipe creator | Eat, Cook, Repeat',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8AQAuBXSxTdwJWZk-na-fc0oSFdke9hm9eA&s',
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=400&fit=crop',
    followers: 8901,
    following: 456,
    joinedDate: '2020-06-25',
    verified: false
  }
];

export const mockTweets = [
  {
    id: '1',
    userId: '1',
    content: 'Hola mis niñas! 🌈 Me alegra que les guste tanto mis videos de la vagina! Denle muchos like para subir mañana! ✨',
    image: 'https://drive.google.com/file/d/1ZHi1g9PYlvSsZ4CbfwsLKhAPWXLf3Pxv/preview',
    likes: 245,
    retweets: 34,
    comments: 12,
    timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    likedBy: [],
    retweetedBy: []
  },
  {
    id: '2',
    userId: '2',
    content: 'Holii 💕 Mi video bañandome como prometi JAJAJS 👇',
    image: 'https://drive.google.com/file/d/134z7-f4iYLa3LfaE9aE1vx7nk2qcICdU/preview',
    likes: 567,
    retweets: 89,
    comments: 43,
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    likedBy: [],
    retweetedBy: []
  },
  {
    id: '3',
    userId: '3',
    content: 'Sentada en el suelo jugando desnuda ❤️🥰',
    image: 'https://drive.google.com/file/d/1ZJ8wxrlVK8LWaJ1Mz_ZzOAvfEELHcjc4/preview',
    likes: 834,
    retweets: 156,
    comments: 67,
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    likedBy: [],
    retweetedBy: []
  },
  {
    id: '4',
    userId: '4',
    content: 'Segunda parte vistiendome!! 🧁 Comenten su parte favorita! 🌈',
    image: 'https://drive.google.com/file/d/19vKPX21M6ln-tiPZ1SwZvoT3qhzJ-4Sa/preview',
    likes: 432,
    retweets: 56,
    comments: 34,
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    likedBy: [],
    retweetedBy: []
  },
  {
    id: '5',
    userId: '1',
    content: 'Espero que les guste mucho! ☁️💕 Estoy aprendiendo a bailar!',
    image: 'https://drive.google.com/file/d/1JAS6SDHtFxQ5UWw_7ECQHdA5oL-BagLO/preview',
    likes: 678,
    retweets: 123,
    comments: 45,
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    likedBy: [],
    retweetedBy: []
  },
  {
    id: '6',
    userId: '3',
    content: 'Se que no soy muy bonita por favor sean buenas conmigo ✨',
    image: 'https://drive.google.com/file/d/1asEtv7FLuoqloNmIoHHWKcbPREhf2NoA/preview',
    likes: 445,
    retweets: 78,
    comments: 56,
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    likedBy: [],
    retweetedBy: []
  },
  {
    id: '7',
    userId: '2',
    content: 'Learned a new dance today! 💃 Can\'t stop moving to the music! Who else loves dancing?',
    likes: 912,
    retweets: 167,
    comments: 89,
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    likedBy: [],
    retweetedBy: []
  },
  {
    id: '8',
    userId: '4',
    content: 'Built the coolest Lego castle today! 🏰 It has towers, a drawbridge, and even a dragon! 🐉',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=400&fit=crop',
    likes: 756,
    retweets: 134,
    comments: 67,
    timestamp: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
    likedBy: [],
    retweetedBy: []
  },
  {
    id: '9',
    userId: '1',
    content: 'Playing with my puppy in the park! 🐶 He loves chasing butterflies! Best day ever! 🦋',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop',
    likes: 1023,
    retweets: 234,
    comments: 98,
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    likedBy: [],
    retweetedBy: []
  },
  {
    id: '10',
    userId: '3',
    content: 'Science experiment time! 🧪 Made a volcano erupt with baking soda and vinegar! So cool!',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop',
    likes: 567,
    retweets: 89,
    comments: 45,
    timestamp: new Date(Date.now() - 15 * 60 * 60 * 1000).toISOString(),
    likedBy: [],
    retweetedBy: []
  },
  {
    id: '11',
    userId: '2',
    content: 'Planted sunflower seeds today! 🌻 Can\'t wait to watch them grow tall! Who else loves gardening?',
    likes: 389,
    retweets: 67,
    comments: 34,
    timestamp: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(),
    likedBy: [],
    retweetedBy: []
  },
  {
    id: '12',
    userId: '4',
    content: 'Movie night with popcorn! 🍿 Watching my favorite animated movie about talking animals! 🐻',
    likes: 445,
    retweets: 78,
    comments: 23,
    timestamp: new Date(Date.now() - 20 * 60 * 60 * 1000).toISOString(),
    likedBy: [],
    retweetedBy: []
  }
];

export const mockTrending = [
  { id: '1', category: 'Games', topic: 'Roblox New Update', tweets: '45.2K' },
  { id: '2', category: 'Fun', topic: 'Friendship Day', tweets: '123K' },
  { id: '3', category: 'Arts & Crafts', topic: 'DIY Rainbow Art', tweets: '67.8K' },
  { id: '4', category: 'School', topic: 'Science Fair Ideas', tweets: '34.5K' },
  { id: '5', category: 'Pets', topic: 'Cutest Puppies', tweets: '89.3K' }
];

export const mockNotifications = [
  {
    id: '1',
    type: 'like',
    userId: '2',
    tweetId: '1',
    content: 'liked your tweet',
    timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    read: false
  },
  {
    id: '2',
    type: 'follow',
    userId: '3',
    content: 'started following you',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    read: false
  },
  {
    id: '3',
    type: 'retweet',
    userId: '4',
    tweetId: '5',
    content: 'retweeted your tweet',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    read: true
  },
  {
    id: '4',
    type: 'comment',
    userId: '2',
    tweetId: '1',
    content: 'replied to your tweet',
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    read: true
  }
];

export const mockMessages = [
  {
    id: '1',
    conversationId: 'conv-1',
    participants: ['1', '2'],
    lastMessage: 'Thanks for sharing that!',
    timestamp: new Date(Date.now() - 10 * 60 * 1000).toISOString(),
    unread: true
  },
  {
    id: '2',
    conversationId: 'conv-2',
    participants: ['1', '3'],
    lastMessage: 'Looking forward to it!',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    unread: false
  }
];

export const mockConversations = {
  'conv-1': [
    {
      id: 'msg-1',
      senderId: '2',
      content: 'Hey! How are you?',
      timestamp: new Date(Date.now() - 60 * 60 * 1000).toISOString()
    },
    {
      id: 'msg-2',
      senderId: '1',
      content: 'Hi Sarah! I\'m doing great, thanks for asking!',
      timestamp: new Date(Date.now() - 50 * 60 * 1000).toISOString()
    },
    {
      id: 'msg-3',
      senderId: '2',
      content: 'Thanks for sharing that!',
      timestamp: new Date(Date.now() - 10 * 60 * 1000).toISOString()
    }
  ],
  'conv-2': [
    {
      id: 'msg-4',
      senderId: '3',
      content: 'Want to collaborate on a project?',
      timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString()
    },
    {
      id: 'msg-5',
      senderId: '1',
      content: 'Looking forward to it!',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
    }
  ]
};

// Current logged in user for mock
export const currentUser = mockUsers[0];