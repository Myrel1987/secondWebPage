import img1 from "../Images/img1.png";
import food from "../Images/food.png";
import checkmypass from "../Images/checkmypass.png";
import py2 from "../Images/py2.jpg";

const portfolios = [
  {
    id: 1,
    category: "React",
    image: img1,
    webLink: "https://web-shopping2021.herokuapp.com",
    githubLink: "https://github.com/Myrel1987/web-shop-PersonalProject",
    title: "E-Commerce platform",
    text:
      "This project is an E-Commerce platform, which has a lot of practical features like: SIgnIn/SignUp(using Firebase), Payments(using Stripe API-test mode), modern React code(styled components, Redux,...)",
  },
  {
    id: 2,
    category: "React",
    image: food,
    webLink: "https://github.com/Myrel1987/Recipe-app",
    githubLink: "https://github.com/Myrel1987/Recipe-app",
    title: "Food_recipes",
    text: "Amazing things-2 with React.js",
  },
  {
    id: 3,
    category: "Python",
    image: checkmypass,
    webLink: "https://github.com/Myrel1987/Python-CheckMyPass",
    githubLink: "https://github.com/Myrel1987/Python-CheckMyPass",
    title: "Check_my_Pass",
    text: "Secure passwords with Python",
  },
  {
    id: 4,
    category: "Python",
    image: py2,
    webLink: "https://github.com/Myrel1987/python_website",
    githubLink: "https://github.com/Myrel1987/python_website",
    title: "website + python_server and database",
    text: "Connectivity and structure with Python",
  },
];

export default portfolios;
