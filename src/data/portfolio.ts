import {
  Project,
  BlogPost,
  Experience,
  Education,
  Achievement,
} from "../types";
import rocket from "../assets/images/rocket.png"; // Adjust the path as needed
import ticTacToe from "../assets/images/tictactoeIcon.png"; // Adjust the path as needed
import blogTicTac from "../assets/images/blogtictac.jpeg";
import blogInApp from "../assets/images/blogInApp.png";
import MyTeam11 from "../assets/images/MyTeam11Award.jpg";
import Labdox from "../assets/images/LabdoxAward.jpg";

export const projects: Project[] = [
  {
    title: "Crash Astral",
    description:
      "An exciting space adventure game with a unique gameplay experience.",
    techStack: "Unity, C#, Figma",
    githubUrl: "https://github.com/agricha-635/Crash-Astral",
    apkUrl:
      "https://drive.google.com/drive/u/0/folders/1Psdk2AtcdGUVEwWsiFV8M_hDbC-wA8py",
    imageUrl: rocket,
  },
  {
    title: "Tic Tac Toe",
    description: "A multiplayer Tic Tac Toe game with real-time online play.",
    techStack: "Unity, C#, Figma",
    githubUrl: "https://github.com/ag-richa-13/Tic-Tac-Toe",
    apkUrl:
      "https://drive.google.com/drive/u/0/folders/1gdkefYC7llVIvUz2a_8KDFyGTD1pew3Q",
    imageUrl: ticTacToe,
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "Streamlined In-App Updates: Unity & Custom Android Library",
    url: "https://agricha-13.medium.com/streamlined-in-app-updates-unity-custom-android-library-71fbd08cc56e",
    description:
      "Developed a custom Android library for seamless in-app APK downloads and installations, integrated into Unity, enabling smooth app updates outside traditional app stores, enhancing user experience and developer flexibility.",
    imageUrl: blogInApp,
  },
  {
    title: "Bringing Tic-Tac-Toe Online: Build a Multiplayer Game with PUN2",
    url: "https://agricha-13.medium.com/bringing-tic-tac-toe-online-build-a-multiplayer-game-with-pun2-fd97a39b3bce",
    description:
      "Developed a multiplayer Tic-Tac-Toe game using Photon Unity Networking 2 (PUN2), integrating features like room creation, random matchmaking, and seamless gameplay synchronization for a smooth, real-time gaming experience.",
    imageUrl: blogTicTac,
  },
];

export const experiences: Experience[] = [
  {
    company: "MyTeam11 Fantasy Sports",
    role: "Software Development Engineer - 1",
    duration: "Nov 2023 – present",
    location: "Jaipur, Rajasthan",
    skills: [
      "Game Development",
      "Unity",
      "C#",
      "Figma",
      "App Testing",
      "Game Testing",
      "Bug Fixes",
      "HTML",
      "CSS",
      "Android Studio",
      "GitHub",
      "Jira",
      "Postman",
    ],
  },
  {
    company: "Labdox",
    role: "Web Developer Intern",
    duration: "Aug 2023 – Nov 2023",
    location: "Remote",
    skills: [
      "Web Development",
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "MySQL",
      "Figma",
      "Wix",
      "GitHub",
    ],
  },
];

export const education: Education[] = [
  {
    institution: "Engineering College Ajmer",
    degree: "B.Tech in IT",
    duration: "2019 - 2023",
    location: "Ajmer, Rajasthan",
    grade: "CGPA: 7.53",
  },
  {
    institution: "Creative Public Sr. Sec. School",
    degree: "XII",
    duration: "2019",
    location: "Gangapur City, Rajasthan",
    grade: "Percentage: 73.20%",
  },
  {
    institution: "Creative Public Sr. Sec. School",
    degree: "X",
    duration: "2016",
    location: "Gangapur City, Rajasthan",
    grade: "Percentage: 79.50%",
  },
];

export const achievements: Achievement[] = [
  {
    title: "Quality Enforcer",
    description:
      "Recognized for ensuring top-notch standards at MyTeam11 Fantasy Sports",
    imageUrl: MyTeam11,
  },
  {
    title: "Intern of the Month",
    description: "Awarded at Labdox for outstanding performance and dedication",
    imageUrl: Labdox,
  },
];
