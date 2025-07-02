import {
  Project,
  BlogPost,
  Experience,
  Education,
  Achievement,
} from "../types";
// import rocket from "../assets/images/rocket.png"; // Adjust the path as needed
// import ticTacToe from "../assets/images/tictactoeIcon.png"; // Adjust the path as needed
import blogTicTac from "../assets/images/blogtictac.jpeg";
import blogInApp from "../assets/images/blogInApp.png";
import blogImgPick from "../assets/images/blogImagePicker.png";

export const projects: Project[] = [
  {
    title: "Tic Tac Toe",
    description:
      "A multiplayer Tic Tac Toe game featuring AI-based solo play, offline multiplayer, and online multiplayer using Photon Unity Networking 2.",
    techStack: ["Unity", "C#", "PUN2", "Multiplayer"],
    githubUrl: "https://github.com/ag-richa-13/Tic-Tac-Toe",
    apkUrl:
      "https://drive.google.com/drive/u/0/folders/1gdkefYC7llVIvUz2a_8KDFyGTD1pew3Q",
    type: "game",
  },
  {
    title: "Crash Astral",
    description:
      "An Aviator-inspired multiplayer game with real-time prediction mechanics and an intuitive user interface for high player retention.",
    techStack: ["Unity", "C#", "Multiplayer", "UI/UX"],
    githubUrl: "https://github.com/agricha-635/Crash-Astral",
    apkUrl:
      "https://drive.google.com/drive/u/0/folders/1Psdk2AtcdGUVEwWsiFV8M_hDbC-wA8py",
    type: "game",
  },
  // Update the Power Ludo project object
  {
    title: "Power Ludo",
    description:
      "A high-performance Ludo game built with Unity and C#, focusing on responsive UI/UX and seamless in-app updates.",
    techStack: ["Unity", "C#", "Android Library", "UI/UX"],
    type: "game",
    apkUrl:
      "https://play.google.com/store/apps/details?id=com.power.ludo.online.board.game", // Add the APK URL here
  },
  {
    title: "User Registration System",
    description:
      "A robust user registration page with secure authentication mechanisms and responsive design.",
    techStack: ["Node.js", "MySQL", "HTML", "CSS"],
    githubUrl: "https://github.com/ag-richa-13/user-registration-page",
    type: "web",
  },
  {
    title: "CineCraze Watchlist",
    description:
      "A dynamic feature enabling users to manage and personalize movie and drama watchlists with intuitive UI.",
    techStack: ["Node.js", "MySQL", "HTML", "CSS", "JavaScript"],
    githubUrl: "http://github.com/ag-richa-13/CineCraze",
    type: "web",
  },
  {
    title: "Client Portfolio",
    description:
      "A professional portfolio website showcasing the work and achievements.",
    techStack: ["React", "TypeScript", "CSS", "JavaScript", "HTML"],
    //
    apkUrl: "https://kartik-pm.netlify.app/",
    type: "web",
  },
  {
    title: "Startup Website",
    description:
      "A modern and responsive website designed for a startup, featuring a sleek design and user-friendly interface.",
    techStack: ["React", "Node.js", "CSS", "JavaScript", "TypeScript", "HTML"],
    apkUrl: "https://wolferra.io/",
    type: "web",
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
  {
    title: "Unity x Android Image Picker — Gallery, Camera & Crop",
    url: "https://agricha-13.medium.com/unity-x-android-image-picker-gallery-camera-crop-8c5c141e4bae",
    description:
      "Built your own Unity image picker with native Android support — pick from gallery, click with camera, crop it, and preview it inside Unity. Full source, clean UI, and blog explained step-by-step.",
    imageUrl: blogImgPick,
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

// Remove MyTeam11 and Labdox image imports

export const achievements: Achievement[] = [
  {
    title: "Quality Enforcer",
    description:
      "Recognized for ensuring top-notch standards at MyTeam11 Fantasy Sports",
  },
  {
    title: "Intern of the Month",
    description: "Awarded at Labdox for outstanding performance and dedication",
  },
];
