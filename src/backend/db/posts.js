import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import {
  fushiguroProfile,
  itadoriProfile,
  narutoProfile,
  sasukeProfile,
} from "./assets";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "1b610686-4ad3-459b-af54-e70aadf322a3",
    content: "Domain Expansion...🤞",
    postMedia:
      "https://w0.peakpx.com/wallpaper/348/902/HD-wallpaper-gojo-satoru.jpg",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: "2c71b5c1-e6dd-4e6e-b072-c54cfe05db89",
          firstName: "Itadori",
          lastName: "Yuji",
          username: "not_just_sukunas_vessel",
          profile: itadoriProfile,
        },
        {
          _id: "fe3029a4-9591-4435-879e-bccdac5b45e6",
          firstName: "Fushiguro",
          lastName: "Megumi",
          username: "megumi.fushiguro",
          profile: fushiguroProfile,
        },
        {
          _id: "2c71b5c1-e6dd-4e6e-b072-c54cfe05db89",
          firstName: "Sasuke",
          lastName: "Uchiha",
          username: "vengeful_sasuke",
          profile: sasukeProfile,
        },
        {
          _id: "8c0aa5c2-864c-47d8-a490-e25cbae56be0-90s",
          firstName: "Naruto",
          lastName: "Uzumaki",
          username: "dattebayo_naruto",
          profile: narutoProfile,
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    firstName: "Gojo",
    lastName: "Satoru",
    username: "oioioi_Satoru",
    createdAt: "2023-06-10T10:33:36+05:30",
    updatedAt: "2023-06-10T10:33:36+05:30",
    userId: "8c0aa5c2-864c-47d8-a490-e25cbae56be0",
  },
  {
    _id: "639fa4f1-1087-47f3-8d47-b18fc8f12d12",
    content: "An incomparable style 🔥",
    postMedia:
      "https://pbs.twimg.com/media/Fvd4oRGWIAAZeJA?format=jpg&name=900x900",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "2c71b5c1-e6dd-4e6e-b072-c54cfe05db89",
          firstName: "Itadori",
          lastName: "Yuji",
          username: "not_just_sukunas_vessel",
          profile: itadoriProfile,
        },
        {
          _id: "fe3029a4-9591-4435-879e-bccdac5b45e6",
          firstName: "Fushiguro",
          lastName: "Megumi",
          username: "megumi.fushiguro",
          profile: fushiguroProfile,
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "f273f41c-068c-4509-a9f6-e815067caa2f",
        comment: "Don't I look good",
        username: "oioioi_Satoru",
        createdAt: "2023-06-11T10:33:36+05:30",
      },
    ],
    username: "Jujutsu_Kaisen_",
    firstName: "Jujutsu",
    lastName: "Kaisen",
    createdAt: "2023-06-11T10:33:36+05:30",
    updatedAt: "2023-06-11T10:33:36+05:30",
    userId: "3f1d4f4a-55a6-45f9-97df-eeaf39983f8d-er4",
  },
  {
    _id: "851e47fa-464e-443f-97f0-0c2e40ba9310",
    content: "The Secret World of Arrietty (2010).",
    postMedia: "https://video.twimg.com/tweet_video/D3YOsvOU0AEruoj.mp4",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "2c71b5c1-e6dd-4e6e-b072-c54cfe05db89",
          firstName: "Itadori",
          lastName: "Yuji",
          username: "not_just_sukunas_vessel",
          profile: itadoriProfile,
        },
        {
          _id: "fe3029a4-9591-4435-879e-bccdac5b45e6",
          firstName: "Fushiguro",
          lastName: "Megumi",
          username: "megumi.fushiguro",
          profile: fushiguroProfile,
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "789b476b-2e7b-410e-9c9e-8044cf381732",
        comment: "Amazing!",
        username: "dattebayo_naruto",
        createdAt: "2023-06-10T10:33:36+05:30",
      },
      {
        _id: "9419fb09-0a9d-448b-9157-06aa8e4c2505",
        comment: "Keep it up!",
        username: "copyninja_kakashi",
        createdAt: "2023-06-10T10:33:36+05:30",
      },
    ],
    username: "ghiblipicture",
    firstName: "Studio",
    lastName: "Ghibli",
    createdAt: "2023-05-10T10:33:36+05:30",
    updatedAt: "2023-05-10T10:33:36+05:30",
    userId: "4b3d8b1d-d5f5-4d9a-bd0f-8f6949d3a28d-ert5",
  },
  {
    _id: "92203199-1e43-4224-b0ce-19e5702f67af",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem...",
    postMedia: "https://example.com/image3.jpg",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "2c71b5c1-e6dd-4e6e-b072-c54cfe05db89",
          firstName: "Itadori",
          lastName: "Yuji",
          username: "not_just_sukunas_vessel",
          profile: itadoriProfile,
        },
        {
          _id: "fe3029a4-9591-4435-879e-bccdac5b45e6",
          firstName: "Fushiguro",
          lastName: "Megumi",
          username: "megumi.fushiguro",
          profile: fushiguroProfile,
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "b65a0a18-58d5-4dde-bcb7-6b128195e81d",
        comment: "Awesome!",
        username: "ghiblipicture",
        createdAt: "2023-05-15T10:33:36+05:30",
      },
      {
        _id: "74a52667-73de-4604-ad05-6b4f884b7dc7",
        comment: "Beautiful!",
        username: "shy_hinata",
        createdAt: "2023-05-17T10:33:36+05:30",
      },
      {
        _id: "a1ab9fba-40e0-4fc2-b353-6ced3bec9e75",
        comment: "Dattebayo!",
        username: "dattebayo_naruto",
        createdAt: "2023-06-10T10:43:36+05:30",
      },
    ],
    username: "not_just_sukunas_vessel",
    firstName: "Itadori",
    lastName: "Yuji",
    createdAt: "2023-05-10T10:33:36+05:30",
    updatedAt: "2023-05-10T10:33:36+05:30",
    userId: "2c71b5c1-e6dd-4e6e-b072-c54cfe05db89",
  },
  {
    _id: "63c9660d-d7ec-478f-b795-6024ef614cd3",
    content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut...",
    postMedia: "https://example.com/image4.jpg",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "2c71b5c1-e6dd-4e6e-b072-c54cfe05db89",
          firstName: "Itadori",
          lastName: "Yuji",
          username: "not_just_sukunas_vessel",
          profile: itadoriProfile,
        },
        {
          _id: "fe3029a4-9591-4435-879e-bccdac5b45e6",
          firstName: "Fushiguro",
          lastName: "Megumi",
          username: "megumi.fushiguro",
          profile: fushiguroProfile,
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    username: "cherryblossom_sakura",
    firstName: "Sakura",
    lastName: "Haruno",
    createdAt: "2023-06-19T10:33:36+05:30",
    updatedAt: "2023-06-19T10:33:36+05:30",
    userId: "f889e2f4-b2bb-4b2e-b76b-5d7c4fc5bb35",
  },
  {
    _id: "d43a3d93-13a3-47d4-ad03-095f2d42a53d",
    content: "Quis autem vel eum iure reprehenderit qui in ea...",
    postMedia: "https://example.com/image5.jpg",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "2c71b5c1-e6dd-4e6e-b072-c54cfe05db89",
          firstName: "Itadori",
          lastName: "Yuji",
          username: "not_just_sukunas_vessel",
          profile: itadoriProfile,
        },
        {
          _id: "fe3029a4-9591-4435-879e-bccdac5b45e6",
          firstName: "Fushiguro",
          lastName: "Megumi",
          username: "megumi.fushiguro",
          profile: fushiguroProfile,
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "a1ab9fba-40e0-4fc2-b353-6ced3bec9e75",
        comment: "Dattebayo!",
        username: "dattebayo_naruto",
        createdAt: "2023-06-10T10:43:36+05:30",
      },
    ],
    username: "vengeful_sasuke",
    firstName: "Sasuke",
    lastName: "Uchiha",
    createdAt: "2023-06-05T10:33:36+05:30",
    updatedAt: "2023-06-05T10:33:36+05:30",
    userId: "4b3d8b1d-d5f5-4d9a-bd0f-8f6949d3a28d",
  },
  {
    _id: "21999085-9cf6-47f4-91f8-1de9af5e9dc6",
    content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa...",
    postMedia: "https://example.com/image6.jpg",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "2c71b5c1-e6dd-4e6e-b072-c54cfe05db89",
          firstName: "Itadori",
          lastName: "Yuji",
          username: "not_just_sukunas_vessel",
          profile: itadoriProfile,
        },
        {
          _id: "fe3029a4-9591-4435-879e-bccdac5b45e6",
          firstName: "Fushiguro",
          lastName: "Megumi",
          username: "megumi.fushiguro",
          profile: fushiguroProfile,
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "a1ab9fba-40e0-4fc2-b353-6ced3bec9e75",
        comment: "Dattebayo!",
        username: "dattebayo_naruto",
        createdAt: "2023-06-10T10:43:36+05:30",
      },
      {
        _id: "a1ab9fba-40e0-4fc2-b353-6ced3bec9e75",
        comment: "Dattebayo!",
        username: "dattebayo_naruto",
        createdAt: "2023-06-10T10:43:36+05:30",
      },
    ],
    username: "dattebayo_naruto",
    firstName: "Naruto",
    lastName: "Uzumaki",
    createdAt: "2023-06-10T10:33:36+05:30",
    updatedAt: "2023-06-10T10:33:36+05:30",
    userId: "8c0aa5c2-864c-47d8-a490-e25cbae56be0-90s",
  },
  {
    _id: "55784df7-bfac-4584-97d9-374037ca1ea6",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit...",
    postMedia: "https://example.com/image7.jpg",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "2c71b5c1-e6dd-4e6e-b072-c54cfe05db89",
          firstName: "Itadori",
          lastName: "Yuji",
          username: "not_just_sukunas_vessel",
          profile: itadoriProfile,
        },
        {
          _id: "fe3029a4-9591-4435-879e-bccdac5b45e6",
          firstName: "Fushiguro",
          lastName: "Megumi",
          username: "megumi.fushiguro",
          profile: fushiguroProfile,
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    username: "toad_sannin",
    firstName: "Jiraya",
    lastName: "",
    createdAt: "2023-04-18T10:33:36+05:30",
    updatedAt: "2023-04-19T10:33:36+05:30",
    userId: "6eaf64a2-6f53-4a5e-9e47-1961a87f3690",
  },
  {
    _id: "f0760b54-e9d8-440a-9d17-001f191f24d1",
    content: "Eaque ipsa quae ab illo inventore veritatis et quasi...",
    postMedia: "https://example.com/image8.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "339e057f-e30a-4cfd-b7f9-fda7c594f845",
        comment: "Well done!",
        username: "cherryblossom_sakura",
        createdAt: "2023-06-11T10:33:36+05:30",
      },
    ],
    username: "shy_hinata",
    firstName: "Hinata",
    lastName: "Hyuga",
    createdAt: "2023-06-10T10:33:36+05:30",
    updatedAt: "2023-06-10T10:33:36+05:30",
    userId: "72a8bca5-1340-4084-a91a-ec508ac7de7f",
  },
  {
    _id: "99e66a93-0803-42aa-8de5-e4844564e343",
    content: "Nam libero tempore, cum soluta nobis est eligendi optio...",
    postMedia: "",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "a1ab9fba-40e0-4fc2-b353-6ced3bec9e75",
        comment: "Dattebayo!",
        username: "dattebayo_naruto",
        createdAt: "2023-06-10T10:43:36+05:30",
      },
    ],
    username: "megumi.fushiguro",
    firstName: "Fushiguro",
    lastName: "Megumi",
    createdAt: "2023-06-10T10:33:36+05:30",
    updatedAt: "2023-06-10T10:33:36+05:30",
    userId: "fe3029a4-9591-4435-879e-bccdac5b45e6",
  },
];
