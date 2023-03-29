import profilePic from "../img/prof.jfif";
import image1 from "../img/customers/customer-1.jpg";
import image2 from "../img/customers/customer-2.jpg";
import image3 from "../img/customers/customer-3.jpg";
import image4 from "../img/customers/customer-4.jpg";
import image5 from "../img/customers/customer-5.jpg";
import image6 from "../img/customers/customer-6.jpg";

export const dummytasks = [
  {
    title: "Play tennis",
    done: false,
    id: 1,
    year: 2022,
    month: 5,
    day: 28,
  },
  {
    title: "Get haircut",
    done: true,
    id: 2,
    year: 2023,
    month: 2,
    day: 28,
  },
  {
    title: "Do Homework",
    done: false,
    id: 3,
    year: 2022,
    month: 7,
    day: 19,
  },
  {
    title: "Do Dishies",
    done: false,
    id: 4,
    year: 2023,
    month: 6,
    day: 18,
  },
  {
    title: "Feed pet",
    done: true,
    id: 5,
    year: 2023,
    month: 7,
    day: 1,
  },
  {
    title: "Meet justin",
    done: false,
    id: 6,
    year: 20223,
    month: 6,
    day: 25,
  },
  {
    title: "Pay bils",
    done: false,
    id: 7,
    year: 2023,
    month: 7,
    day: 10,
  },
];
export const dummybuylist = [
  { name: "Milk", bought: true, id: 100 },
  { name: "Vegetebales", bought: false, id: 101 },
  { name: "Papers", bought: true, id: 102 },
  { name: "Battery", bought: false, id: 103 },
  { name: "Beans", bought: false, id: 105 },
  { name: "Beans", bought: false, id: 106 },
  { name: "Beans", bought: false, id: 107 },
  { name: "Beans", bought: false, id: 108 },
  { name: "Beans", bought: false, id: 109 },
];
export const dummyuser = {
  name: "Mohammadjavad Soltanian",
  profilePic: profilePic,
  friends: [
    {
      name: "Lizzie",
      profilePic: image1,
      id: 200,
      ahead: true,
      massages: [
        { content: "hello", readStatus: true },
        { content: "hello", readStatus: true },
        { content: "hello", readStatus: true },
        { content: "hello", readStatus: true },
        { content: "hello", readStatus: false },
      ],
      newMessage: true,
    },
    {
      name: "Mariazm",
      profilePic: image3,
      id: 201,
      ahead: false,
      massages: null,
      newMessage: null,
    },
    {
      name: "sandy",
      profilePic: image6,
      id: 202,
      ahead: true,
      massages: [
        { content: "hello", readStatus: true },
        { content: "hello", readStatus: true },
        { content: "hello", readStatus: true },
        { content: "hello", readStatus: true },
        { content: "hello", readStatus: false },
      ],
      newMessage: true,
    },
    {
      name: "Jack",
      profilePic: image2,
      id: 203,
      ahead: false,
      massages: [
        { content: "hello", readStatus: true },
        { content: "hello", readStatus: true },
        { content: "hello", readStatus: true },
        { content: "hello", readStatus: true },
        { content: "hello", readStatus: true },
      ],
      newMessage: false,
    },
    {
      name: "Aston",
      profilePic: image4,
      id: 204,
      ahead: false,
      massages: [
        { content: "hello", readStatus: true },
        { content: "hello", readStatus: true },
        { content: "hello", readStatus: true },
        { content: "hello", readStatus: true },
        { content: "hello", readStatus: true },
      ],
      newMessage: false,
    },
    {
      name: "Bary",
      profilePic: image5,
      id: 205,
      ahead: true,
      massages: null,
      newMessage: null,
    },
  ],
  news: [
    {
      title: "Premium",
      id: 300,
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse iste, eligendi vero modi earum voluptate, quidem,commodi minus impedit ducimus accusantium nesciunt! Quidoloremque cumque reiciendis voluptates animi officiaaliquid.",
    },
    {
      title: "Change it",
      id: 301,
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse iste, eligendi vero modi earum voluptate, quidem,commodi minus impedit ducimus accusantium nesciunt! Quidoloremque cumque reiciendis voluptates animi officiaaliquid.",
    },
  ],
};
