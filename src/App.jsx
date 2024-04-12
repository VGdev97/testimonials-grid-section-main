import Card from "./components/Card";
import daniel from "./assets/image-daniel.jpg";
import jonathan from "./assets/image-jonathan.jpg";
import jeanette from "./assets/image-jeanette.jpg";
import patrick from "./assets/image-patrick.jpg";
import kira from "./assets/image-kira.jpg";
import bgImage from "./assets/bg-pattern-quotation.svg";

function App() {
  return (
    <main className="grid-section">
      <Card
        image={daniel}
        bg="#733fc8"
        bgImage={bgImage}
        headerColor="#fff"
        descriptionColor="#bd99f9"
        name="Daniel Clifford"
        job="Verified Graduate"
        header="I received a job offer mid-course, and the subjects i learned were current, if not more so, in the company i joined. I honestly feel i got every penny's worth."
        description="I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
        transition and have heard some people who had an amazing experience here. I signed up 
        for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
        The next 12 weeks was the best - and most grueling - time of my life. Since completing 
        the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup."
      />
      <Card
        image={jonathan}
        bg="#49556b"
        headerColor="#fff"
        descriptionColor="#c2cbdc"
        name="Jonathan Walters"
        job="Verified Graduate"
        header="The team was very supportive and kept me motivated"
        description="I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
        for a big company. This was one of the best investments I’ve made in myself."
      />
      <Card
        image={jeanette}
        bg="#fff"
        headerColor="#48505d"
        descriptionColor="#9a9da2"
        name="Jeanette Harmon"
        job="Verified Graduate"
        header="An overall wonderful and rewarding experience"
        description="Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
        while doing something I love."
      />
      <Card
        image={patrick}
        bg="#18202d"
        headerColor="#fff"
        descriptionColor="#acb0b9"
        name="Patrick Abrams"
        job="Verified Graduate"
        header="Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
        learning from their experiences was easy."
        description="he staff seem genuinely concerned about my progress which I find really refreshing. The program 
        gave me the confidence necessary to be able to go out in the world and present myself as a capable 
        junior developer. The standard is above the rest. You will get the personal attention you need from 
        an incredible community of smart and amazing people."
      />
      <Card
        image={kira}
        bg="#fff"
        headerColor="#495060"
        descriptionColor="#81848b"
        name="Kira Whittle"
        job="Verified Graduate"
        header="Such a life-changing experience. Highly recommended!"
        description="Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
        professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
        student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
        did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
        project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
        could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
        experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
        100% recommend!"
      />
    </main>
  );
}

export default App;
