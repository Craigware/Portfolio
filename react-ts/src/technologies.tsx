/*
Typescript sorta fun
like c# and js combined
*/
class Tech{ 
  name: string;
  rating: number;
  comfortRating: number;
  dateAcquired: Date;
  field: string;
  additionalComments: Array<string> | undefined;
  iconPath: string | undefined;

  constructor(
    name: string,
    rating: number,
    comfortRating: number,
    dateAcquired: Date,
    field: string = "web",
    additionalComments: Array<string> | undefined = undefined,
    )
  {
    this.name = name;
    this.rating = rating;
    this.comfortRating = comfortRating;
    this.dateAcquired = dateAcquired;
    this.field = field;
    this.additionalComments = additionalComments;
    this.iconPath = `/src/assets/${this.name}`
  };
};


/*
A db would've been nice for this but its just a portfolio
but it's just a portfolio website I guess >:(
*/
const python = new Tech("Python", 10, 10, new Date("February 6, 2023"));
const javascript = new Tech("Javascript", 10, 10, new Date("April 2023"));
const cSharp = new Tech("C#", 10, 8, new Date("August, 2020"), "game");
const react = new Tech("React", 10, 8, new Date("April 20, 2023"));
const vite = new Tech("Vite", 10, 7, new Date("May, 2023"));
const typescript = new Tech("Typescript", 10, 7, new Date("August 5, 2023"));
const mongoDB = new Tech("MongoDB", 10, 10, new Date("May, 2023"));
const postgres = new Tech("Postgres", 6, 5, new Date("March, 2023"));
const sql = new Tech("SQL", 4, 3, new Date("May 2023"));
const unity = new Tech("Unity", 7, 8, new Date("August, 2020"), "game");
const html = new Tech("HTML", 8, 10, new Date("October 2022"));
const css = new Tech("CSS", 6, 10, new Date("October 2022"));
const tailwindCSS = new Tech("TailwindCSS", 10, 10, new Date("May, 2023"));
const boostrap = new Tech("Bootstrap", 5, 10, new Date("March, 2023"));
const sass = new Tech("Sass", 10, 5, new Date("August 5, 2023"));
const django = new Tech("Django", 7, 8, new Date("March, 2023"));
const fastAPI = new Tech("FastAPI", 10, 10, new Date("May, 2023"));
const cPP = new Tech("C++", 10, 2, new Date("August 4, 2023"), "game");
const vulkan = new Tech("Vulkan", 8, 2, new Date("August 4, 2023"), "game");
const cMake = new Tech("CMake", 5, 2, new Date("August 5, 2023"), "game");
const godot = new Tech("Godot", 6, 1, new Date("April, 2023"), "game");
const gamemakerStudio = new Tech("Gamemaker", 4, 4, new Date("March, 2022"), "game");
const blender = new Tech("Blender", 10, 7, new Date("December 2018"), "art");
const photoshop = new Tech("Photoshop", 10, 9, new Date("August 2019"), "art");
const illustrator = new Tech("Illustrator", 7, 4, new Date("August 2019"), "art");
const clipStudio = new Tech("ClipStudio", 7, 2, new Date("January, 2020"), "art");
const docker = new Tech("Docker", 10, 10, new Date("April, 2023"));
const pygame = new Tech("Pygame", 10, 7, new Date("April, 2023"), "game");

export const techList = [
  python, javascript, cSharp, react, vite, typescript, mongoDB, postgres, sql,
  unity, html, css, tailwindCSS, boostrap, sass, django, fastAPI, cPP, vulkan,
  cMake, godot, gamemakerStudio, blender, photoshop, illustrator, clipStudio,
  docker, pygame
];