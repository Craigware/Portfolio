class Repository{
  name: string;
  description: string;
  demoImageLocations: Array<string>;
  groupSize: number;
  groupParticipants: Array<string>;
  repositoryLink: string;

  constructor(
    name: string,
    description: string,
    demoImageLocations: Array<string>,
    groupSize: number,
    groupParticipants: Array<string>,
    repositoryLink: string
  ){
    this.name = name;
    this.description = description;
    this.demoImageLocations = demoImageLocations;
    this.groupSize = groupSize;
    this.groupParticipants = groupParticipants;
    this.repositoryLink = repositoryLink;
  };
};


const Goldn = new Repository(
    "Gold'n Hour",
    "A location based social media for sharing weather conditions via photos.",
    [
      "demoImageLocation"
    ],
    4,
    [
      "Craig Johnson",
      "Dara Karbassioon",
      "Jonathan Blazer",
      "Andrew Ward"
    ],
    "https://gitlab.com/squad-core/goldn-hours"
  );

const carSquared = new Repository(
  "Car^2",
  "A car dealership inventory management system. Keep track of vehicles, employees, customers, and more. Uses Django, building out a robust back end with restful APIs, and React for the front end creating tables, graphs, and carousels . ",
  [
    "demoImageLocation"
  ],
  2,
  [
    "Craig Johnson",
    "Cyrus Yung"
  ],
  "https://gitlab.com/Craigware/project-beta"
);

const taskTracker = new Repository(
  "Task Tracker",
  "Keep track of tasks for individual and group assignments. Progress bars equipped to show you how close you are to completing a project! Comes out of the box with a login system, projects page, and individual assignments page.",
  ["demoLocationImages"],
  1,
  ["Craig Johnson"],
  "https://gitlab.com/Craigware/project-alpha-apr"
);

const complet = new Repository(
  "Development Name: Complet",
  "A video game review social media bound to sprout several features, including: friend's activity, personal activity, developer activity, game news, crowd sourced ratings, game recommendations based off reviewed games, and more. Currently in development.",
  ["demoImageLocations"],
  1,
  ["Craig Johnson"],
  "https://gitlab.com/Craigware/complet"
);

const gravityEngine = new Repository(
  "Development Name: Gravity Engine",
  "A game engine I'm creating on my own using Vulkan. Using this project as a way to learn c++ and more about hardward, escpecially graphics cards.",
  ["demoImageLocation"],
  1,
  ["Craig Johnson"],
  "https://github.com/Craigware/Gravity_Engine"
);

const portfolio = new Repository(
  "My Portfolio Website!",
  "You are currently looking at it! A personalized narrative about me, my interests, and my aspirations. Also used as a project to get a fundamental grasp on typescript, and SASS. Learn more about my hobbies and what I love about them. Potentially to be turned into a art portfolio as well in the future.",
  ["demoImageLocation"],
  1,
  ["Craig Johnson"],
  "https://github.com/Craigware/Portfolio"
);

const pyGameLearning = new Repository(
  "Pygame Learning",
  "Messing around with pygame to learn more about python and how computers display 2D graphics on screen.",
  ["demoImageLocation"],
  1,
  ["Craig Johnson"],
  "https://gitlab.com/Craigware/pygame-learning"
);

export const repoList = [
  Goldn,
  taskTracker,
  carSquared,
  complet,
  gravityEngine,
  portfolio,
  pyGameLearning
];