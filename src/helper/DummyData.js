import profilePic from "../img/prof.jfif";
import image1 from "../img/customers/customer-1.jpg";
import image2 from "../img/customers/customer-2.jpg";
import image3 from "../img/customers/customer-3.jpg";
import image4 from "../img/customers/customer-4.jpg";
import image5 from "../img/customers/customer-5.jpg";
import image6 from "../img/customers/customer-6.jpg";

export const dummytasks = {
  categories: [
    { title: "sport", color: "#a5173a", id: 900 },
    { title: "health", color: "#34ff02", id: 901 },
    { title: "work", color: "#70746f", id: 902 },
    { title: "daily", color: "#658aee", id: 903 },
    { title: "meet", color: "#eb79d8", id: 904 },
    { title: "payment", color: "#078b59", id: 905 },
  ],
  tasks: [
    {
      title: "Play tennis",
      done: false,
      id: 1,
      year: 2022,
      month: 5,
      day: 28,
      category: "sport",
      must: false,
      with: [201, 205],
    },
    {
      title: "Get haircut",
      done: true,
      id: 2,
      year: 2023,
      month: 2,
      day: 30,
      category: "health",
      must: false,
      with: [],
    },
    {
      title: "Do Homework",
      done: false,
      id: 3,
      year: 2023,
      month: 2,
      day: 31,
      category: "work",
      must: true,
      with: [],
    },
    {
      title: "Do Dishies",
      done: false,
      id: 4,
      year: 2023,
      month: 3,
      day: 2,
      category: "daily",
      must: true,
      with: [],
    },
    {
      title: "Feed pet",
      done: true,
      id: 5,
      year: 2023,
      month: 7,
      day: 1,
      category: "daily",
      must: true,
      with: [],
    },
    {
      title: "Meet justin",
      done: false,
      id: 6,
      year: 2022,
      month: 6,
      day: 25,
      category: "meet",
      must: true,
      with: [204],
    },
    {
      title: "Pay bils",
      done: false,
      id: 7,
      year: 2023,
      month: 7,
      day: 10,
      category: "payment",
      must: true,
      with: [],
    },
  ],
};
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
  id: 0,
  username: "mohammadj789",
  email: "mohammadsoltanian10@gmail.com",
  name: "Mohammadjavad Soltanian",
  profilePic: profilePic,
  age: 21,
  friends: [
    {
      name: "Lizzie",
      profilePic: image1,
      id: 200,
      ahead: true,
      massages: [
        {
          content:
            "helloqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
          user: true,
          id: 820,
        },
        { content: "hello", id: 800 },
        { content: "hello", id: 801 },
        { content: "hello", user: true, id: 802 },
        { content: "hello", id: 803 },
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
        { content: "hello", id: 804 },
        { content: "hello", id: 805 },
        { content: "hello", user: true, id: 806 },
        { content: "hello", id: 818 },
        { content: "hello", user: true, id: 807 },
      ],
      newMessage: true,
    },
    {
      name: "Jack",
      profilePic: image2,
      id: 203,
      ahead: false,
      massages: [
        { content: "hello", id: 808 },
        { content: "hello", id: 809 },
        { content: "hello", user: true, id: 810 },
        { content: "hello", user: true, id: 811 },
        { content: "hello", id: 817 },
      ],
      newMessage: false,
    },
    {
      name: "Aston",
      profilePic: image4,
      id: 204,
      ahead: false,
      massages: [
        { content: "hello", user: true, id: 812 },
        { content: "hello", id: 813 },
        { content: "hello", id: 814 },
        { content: "hello", id: 816 },
        { content: "heasdaasdllo", user: true, id: 815 },
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
