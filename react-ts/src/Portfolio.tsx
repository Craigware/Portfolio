import { techList } from "./technologies";
import { repoList } from "./Repositories";
import "./Portfolio.scss";
import "./LandingPage.scss";

/*
Plan is to have a landing page with a
stylized image of me looking at a computer monitor
Going to have text that says "Software Engineer"
and "Craig Johnson" with animated arrows pointing
at my character.

Next I will have an about me page that goes into detail
about my coding journey, hobbies, and goals.

Next I'll have a list of my technical skills
which I want to be able to sort through
based off what field the tech applies to

After that I want a list of my repositories
with cards displaying demo images of them and summaries
of their application after.

Then I will have a timeline of experience. I do not have 
a mental picture of what this looks like but we will get there
when we get there

Then I will list my soft skills, this will probably be 
a text list with less emphasis.

Then I will put large emphasis on my contact information.
Resume will be shown again.
*/

// I want my resume to be embedded into my site
// I added tailwind but I think imma remove it and stick to sass
// Goal is to be done by Aug 23rd.
// Going to have to look into media queries more now that I don't have tailwind.

function Portfolio() {
  return (
    <>
      <Navigation />
      <LandingPage />
      <SelfStory />
      {/* <TechnicalSkills />
      <RepositoryList />
      <ExperienceTimeline />
      <SoftSkills />
      <ContactInformation /> */}
    </>
  );
};

function Navigation(){
  return(
    <div className="Navigations">
      <p>Landing Page</p>
      <p>Technical Skills</p>
      <p>Repositories</p>
      <p>Experience</p>
      <p>Soft Skills</p>
      <p>Contact Information</p>
    </div>
  );
};

function LandingPage(){
  return(
    <div className="LandingPage">
      <div className="Me">
        <div className="Me_Head" />
        <div className="Me_Ear Left_Ear" />
        <div className="Me_Ear Right_Ear" />
        <div className="Me_Eye Left_Eye" />
        <div className="Me_Eye Right_Eye" />
        <div className="Me_Glass Left_Glass" />
        <div className="Me_Glass Right_Glass" />
        <div className="Me_Glass_Line Middle_Connection" />
        <div className="Me_Glass_Line Left_Ear_Connection" />
        <div className="Me_Glass_Line Right_Ear_Connection" />
        <div className="Me_Hair" />

        <div className="Desktop_Back" />
        <div className="Desktop_Top" />
        <div className="Desktop_Light" />
      </div>
      <p className="Name" >Craig Johnson</p>
      <div className="Arrow" />
      <p className="Title" >Full Stack Developer</p>
      <div className="Arrow" />
    </div>
  );
};

// envisioning a rectangle dialogue box with a headshot of me next to it and stylized palm trees and water behind
function SelfStory(){
  return(
    <div className="SelfStory">
      <div className="StoryContainer">
        <div className="headshot"/>
      </div>
    </div>
  );
};

// function TechnicalSkills(){ return(); };
// function RepositoryList(){ return(); };
// function ExperienceTimeline(){ return(); };
// function SoftSkills(){ return(); };
// function ContactInformation(){ return(); };


export default Portfolio
