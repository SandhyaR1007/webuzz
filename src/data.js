export const posts = [
  {
    _id: "uuid1",
    content: "At vero eos et accusamus et iusto odio dignissimos ducimus...",
    postMedia: "",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: "uuid2",
          firstName: "Sarah",
          lastName: "Walkman",
          username: "SarahW",
          avatarURL:
            "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
        },
        {
          firstName: "Jane",
          lastName: "Doe",
          username: "janedoe",
          avatarURL:
            "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181761/socmedia/pic3_py263g.jpg",
        },
        {
          firstName: "Anna",
          lastName: "Baker",
          username: "annahere",
          avatarURL:
            "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181889/socmedia/pic5_qq8ne3.jpg",
        },
        {
          _id: "uuid3",
          firstName: "Lizzie",
          lastName: "Anne",
          username: "itsLizzie",
          avatarURL:
            "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181762/socmedia/pic4_dtzqlj.jpg",
        },
      ],
    },
    comments: [],
    username: "mostcommonperson",
    firstname: "John",
    lastname: "Doe",
    createdAt: 1654321200000,
    updatedAt: 1654321200000,
  },
  {
    _id: "uuid4",
    content: "An incomparable style 🔥",
    postMedia:
      "https://pbs.twimg.com/media/Fvd4oRGWIAAZeJA?format=jpg&name=900x900",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "uuid5",
          firstName: "Emily",
          lastName: "Smith",
          username: "emilys",
          avatarURL:
            "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652182051/socmedia/pic6_ju0egh.jpg",
        },
        {
          firstName: "Alex",
          lastName: "Johnson",
          username: "alexj",
          avatarURL:
            "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652182349/socmedia/pic7_q2vzc4.jpg",
        },
      ],
    },
    comments: [
      {
        _id: "uuid6",
        comment: "Great post!",
        username: "random_user1",
        createdAt: 1654321300000,
      },
    ],
    username: "Jujutsu_Kaisen_",
    firstname: "Jujutsu",
    lastname: "Kaisen",
    createdAt: 1654321201000,
    updatedAt: 1654321201000,
  },
  {
    _id: "uuid7",
    content: "The Secret World of Arrietty (2010).",
    postMedia: "https://video.twimg.com/tweet_video/D3YOsvOU0AEruoj.mp4",
    likes: {
      likeCount: 5,
      likedBy: [
        {
          _id: "uuid8",
          firstName: "Michael",
          lastName: "Davis",
          username: "michaeld",
          avatarURL:
            "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652182675/socmedia/pic8_ymsrwj.jpg",
        },
        {
          firstName: "Olivia",
          lastName: "Brown",
          username: "oliviab",
          avatarURL:
            "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652182971/socmedia/pic9_bghawu.jpg",
        },
        {
          _id: "uuid9",
          firstName: "James",
          lastName: "Miller",
          username: "jamesm",
          avatarURL:
            "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652183172/socmedia/pic10_a1g3ot.jpg",
        },
      ],
    },
    comments: [
      {
        _id: "uuid10",
        comment: "Amazing!",
        username: "random_user2",
        createdAt: 1654321400000,
      },
      {
        _id: "uuid11",
        comment: "Keep it up!",
        username: "random_user3",
        createdAt: 1654321450000,
      },
    ],
    username: "ghiblipicture",
    firstname: "Studio",
    lastname: "Ghibli",
    createdAt: 1654321202000,
    updatedAt: 1654321202000,
  },
  {
    _id: "uuid12",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem...",
    postMedia: "https://example.com/image3.jpg",
    likes: {
      likeCount: 8,
      likedBy: [
        {
          _id: "uuid13",
          firstName: "Sophia",
          lastName: "Walker",
          username: "sophiaw",
          avatarURL:
            "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652183394/socmedia/pic11_rld3dz.jpg",
        },
        {
          firstName: "Ethan",
          lastName: "Davis",
          username: "ethand",
          avatarURL:
            "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652183665/socmedia/pic12_afpblh.jpg",
        },
        {
          _id: "uuid14",
          firstName: "Olivia",
          lastName: "Johnson",
          username: "oliviaj",
          avatarURL:
            "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652183873/socmedia/pic13_k5r9yy.jpg",
        },
        {
          _id: "uuid15",
          firstName: "Noah",
          lastName: "Smith",
          username: "noahs",
          avatarURL:
            "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652184100/socmedia/pic14_kfxdkf.jpg",
        },
      ],
    },
    comments: [
      {
        _id: "uuid16",
        comment: "Awesome!",
        username: "random_user4",
        createdAt: 1654321500000,
      },
      {
        _id: "uuid17",
        comment: "Beautiful!",
        username: "random_user5",
        createdAt: 1654321550000,
      },
      {
        _id: "uuid18",
        comment: "Impressive work!",
        username: "random_user6",
        createdAt: 1654321600000,
      },
    ],
    username: "random_name_4",
    firstname: "Sophia",
    lastname: "Robinson",
    createdAt: 1654321203000,
    updatedAt: 1654321203000,
  },
  {
    _id: "uuid19",
    content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut...",
    postMedia: "https://example.com/image4.jpg",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "uuid20",
          firstName: "Ava",
          lastName: "Anderson",
          username: "avaa",
          avatarURL:
            "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652184413/socmedia/pic15_tqfog9.jpg",
        },
        {
          firstName: "Mason",
          lastName: "Martinez",
          username: "masonm",
          avatarURL:
            "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652184623/socmedia/pic16_sayppz.jpg",
        },
      ],
    },
    comments: [],
    username: "random_name_5",
    firstname: "Aiden",
    lastname: "Turner",
    createdAt: 1654321204000,
    updatedAt: 1654321204000,
  },
  {
    _id: "uuid21",
    content: "Quis autem vel eum iure reprehenderit qui in ea...",
    postMedia: "https://example.com/image5.jpg",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "uuid22",
          firstName: "Charlotte",
          lastName: "Wilson",
          username: "charlottew",
          avatarURL:
            "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652184982/socmedia/pic17_v1ndy2.jpg",
        },
      ],
    },
    comments: [
      {
        _id: "uuid23",
        comment: "Nice!",
        username: "random_user7",
        createdAt: 1654321650000,
      },
    ],
    username: "random_name_6",
    firstname: "Liam",
    lastname: "Morris",
    createdAt: 1654321205000,
    updatedAt: 1654321205000,
  },
  {
    _id: "uuid24",
    content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa...",
    postMedia: "https://example.com/image6.jpg",
    likes: {
      likeCount: 7,
      likedBy: [
        {
          _id: "uuid25",
          firstName: "Amelia",
          lastName: "Brown",
          username: "ameliab",
          avatarURL:
            "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652185242/socmedia/pic18_cny6ks.jpg",
        },
        {
          firstName: "Lucas",
          lastName: "Hernandez",
          username: "lucash",
          avatarURL:
            "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652185450/socmedia/pic19_g9yuep.jpg",
        },
        {
          _id: "uuid26",
          firstName: "Mia",
          lastName: "Garcia",
          username: "miag",
          avatarURL:
            "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652185646/socmedia/pic20_p0exfy.jpg",
        },
      ],
    },
    comments: [
      {
        _id: "uuid27",
        comment: "Fantastic!",
        username: "random_user8",
        createdAt: 1654321700000,
      },
      {
        _id: "uuid28",
        comment: "Brilliant work!",
        username: "random_user9",
        createdAt: 1654321750000,
      },
    ],
    username: "random_name_7",
    firstname: "Oliver",
    lastname: "King",
    createdAt: 1654321206000,
    updatedAt: 1654321206000,
  },
  {
    _id: "uuid29",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit...",
    postMedia: "https://example.com/image7.jpg",
    likes: {
      likeCount: 6,
      likedBy: [
        {
          _id: "uuid30",
          firstName: "Evelyn",
          lastName: "Harris",
          username: "evelynh",
          avatarURL:
            "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652185976/socmedia/pic21_vunotk.jpg",
        },
        {
          firstName: "Benjamin",
          lastName: "Clark",
          username: "benjaminc",
          avatarURL:
            "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652186191/socmedia/pic22_v2jj8m.jpg",
        },
        {
          _id: "uuid31",
          firstName: "Ava",
          lastName: "Hall",
          username: "avah",
          avatarURL:
            "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652186396/socmedia/pic23_gd6bkt.jpg",
        },
      ],
    },
    comments: [],
    username: "random_name_8",
    firstname: "William",
    lastname: "White",
    createdAt: 1654321207000,
    updatedAt: 1654321207000,
  },
  {
    _id: "uuid32",
    content: "Eaque ipsa quae ab illo inventore veritatis et quasi...",
    postMedia: "https://example.com/image8.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
    },
    comments: [
      {
        _id: "uuid33",
        comment: "Well done!",
        username: "random_user10",
        createdAt: 1654321850000,
      },
    ],
    username: "random_name_9",
    firstname: "Elizabeth",
    lastname: "Lee",
    createdAt: 1654321208000,
    updatedAt: 1654321208000,
  },
  {
    _id: "uuid34",
    content: "Nam libero tempore, cum soluta nobis est eligendi optio...",
    postMedia: "",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "uuid35",
          firstName: "Daniel",
          lastName: "Young",
          username: "daniely",
          avatarURL:
            "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652186743/socmedia/pic24_ql7crb.jpg",
        },
        {
          firstName: "Sophia",
          lastName: "Lopez",
          username: "sophial",
          avatarURL:
            "https://res.cloudinary.com/dodkrr6ce/image/upload/v1652186972/socmedia/pic25_inyuxo.jpg",
        },
      ],
    },
    comments: [
      {
        _id: "uuid36",
        comment: "Great!",
        username: "random_user11",
        createdAt: 1654321900000,
      },
    ],
    username: "random_name_10",
    firstname: "James",
    lastname: "Anderson",
    createdAt: 1654321209000,
    updatedAt: 1654321209000,
  },
];
