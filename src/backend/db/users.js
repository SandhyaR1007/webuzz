import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "8c0aa5c2-864c-47d8-a490-e25cbae56be0",
    firstName: "Gojo",
    lastName: "Saturo",
    userhandle: "oioioi_Saturo",
    password: "Gojoishandsome",
    createdAt: "2023-04-10T10:38:12+05:30",
    updatedAt: "2022-06-17T10:33:36+05:30",
    username: "gojo@jujutsu.high",
    profile:
      "https://images.immediate.co.uk/production/volatile/sites/3/2023/03/Jujutsu-Kaisen-Cropped-dbe733b.jpg?quality=90&resize=844,563",
    portfolio: "https://vinit-kanse.netlify.app",
    bio: "Don't Worry, I'm The Strongest",
    followers: [
      {
        _id: "2c71b5c1-e6dd-4e6e-b072-c54cfe05db89",
        firstName: "Itadori",
        lastName: "Yuji",
        userhandle: "not_just_sukunas_vessel",
        profile:
          "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/01/yuji-itadori-weilding-cursed-energy-1.jpg",
      },
    ],
    following: [
      {
        _id: "2c71b5c1-e6dd-4e6e-b072-c54cfe05db89",
        firstName: "Itadori",
        lastName: "Yuji",
        userhandle: "not_just_sukunas_vessel",
        profile:
          "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/01/yuji-itadori-weilding-cursed-energy-1.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "2c71b5c1-e6dd-4e6e-b072-c54cfe05db89",
    firstName: "Itadori",
    lastName: "Yuji",
    userhandle: "not_just_sukunas_vessel",
    password: "megumi123",
    createdAt: "2023-05-11T10:12:12+05:30",
    updatedAt: "2022-06-16T18:11:07+05:30",
    username: "yujihere@jujutsu.tech",
    profile:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/01/yuji-itadori-weilding-cursed-energy-1.jpg",
    portfolio: "https://isha.netlify.app",
    bio: "I am more than just sukuna's vessel",
    followers: [
      {
        _id: "fe3029a4-9591-4435-879e-bccdac5b45e6",
        firstName: "Fushiguro",
        lastName: "Megumi",
        userhandle: "megumi.fushiguro",
        profile:
          "https://www.tocanvas.net/wp-content/uploads/2022/11/Who-is-Megumi-Fushiguro-rotated.jpg",
      },
    ],
    following: [],
    bookmarks: [],
  },
  {
    _id: "fe3029a4-9591-4435-879e-bccdac5b45e6",
    firstName: "Fushiguro",
    lastName: "Megumi",
    userhandle: "megumi.fushiguro",
    password: "1234",
    createdAt: "2023-06-25T10:38:12+05:30",
    updatedAt: "2023-07-10T10:33:36+05:30",
    username: "fushguro@jujutsu.tech",
    profile:
      "https://www.tocanvas.net/wp-content/uploads/2022/11/Who-is-Megumi-Fushiguro-rotated.jpg",
    link: "https://vinit-kanse.netlify.app",
    bio: "Divine Dogs…. Go and Feast!",
    followers: [],
    following: [],
    bookmarks: [],
  },
];
