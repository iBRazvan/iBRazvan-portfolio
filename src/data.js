//  icons
import {
  FiInstagram,
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin,
} from "react-icons/fi";

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import Project1 from "./assets/img/projects/landingpage1.png";
import Project2 from "./assets/img/projects/landingpage2.png";
import Project3 from "./assets/img/projects/slider.png";
import Project4 from "./assets/img/projects/sliders-start.png";
import Project5 from "./assets/img/projects/4projects.png";
import Project6 from "./assets/img/projects/counter-searchbar.png";
import Project7 from "./assets/img/projects/task-manager.png";
import Project8 from "./assets/img/projects/todo-app.png";
import Project9 from "./assets/img/projects/todo-app2.png";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/scrum.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/figma.png";
import SkillImg9 from "./assets/img/skills/redux.png";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "services",
    href: "services",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/ionu%C8%9B-r%C4%83zvan-botezatu6199/",
  },
  {
    icon: <FiInstagram />,
    href: "https://www.instagram.com/irazvanbtzzz/",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/iBRazvan",
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "",
  },
  {
    img: UpworkBrandIcon,
    href: "",
  },
  {
    img: FiverBrandIcon,
    href: "",
  },
  {
    img: BehanceBrandIcon,
    href: "",
  },
  {
    img: DribbbleBrandIcon,
    href: "",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "Landing page",
    category: "Other projects",
  },
  {
    id: "2",
    image: Project2,
    name: "Landing page",
    category: "Other projects",
  },
  {
    id: "3",
    image: Project3,
    name: "Images Slider",
    category: "JavaScript",
  },
  {
    id: "4",
    image: Project4,
    name: "Vertical Slider",
    category: "JavaScript",
  },
  {
    id: "5",
    image: Project5,
    name: "Four JavaScript projects/games",
    category: "JavaScript",
  },
  {
    id: "6",
    image: Project6,
    name: "Simple counter app and search bar",
    category: "React",
  },
  {
    id: "7",
    image: Project7,
    name: "Task-Manager",
    category: "React",
  },
  {
    id: "8",
    image: Project8,
    name: "Todo-App",
    category: "React",
  },
  {
    id: "9",
    image: Project9,
    name: "Todo-App-v2",
    category: "React",
  },
];

// projects
export const projectsNav = [
  {
    name: "All",
  },
  {
    name: "JavaScript",
  },
  {
    name: "React",
  },
  {
    name: "Other projects",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
  {
    image: SkillImg9,
  },
];

// services
export const services = [

  {
    icon: <FiSettings />,
    name: "Web Development",
    description: 'There are three responses to a piece of design ??? yes, no, and WOW! Wow is the one to aim for!',

  },

];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at rezzy_botez@yahoo.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Romania",
    description: "Serving clients worldwide",
  },
];
