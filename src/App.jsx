import { Header } from "./components/Header";
import "./App.css";
import { SkillTag } from "./components/SkillTag/index.jsx";
import {
  BrandAdobe,
  BrandCss3,
  BrandFigma,
  BrandGit,
  BrandHtml5,
  BrandJavascript,
  BrandLaravel,
  BrandMysql,
  BrandNpm,
  BrandPhp,
  BrandPython,
  BrandReact,
  BrandRedux,
  BrandSass,
  BrandVisualStudio,
  BrandVite,
  BrandWordpress,
  Devices,
  MathSymbols,
} from "tabler-icons-react";
import { PortfolioItem } from "./components/PortfolioItem/index.jsx";

function App() {
  function getSuffix(i) {
    let j = i % 10,
      k = i % 100;
    if (j === 1 && k !== 11) {
      return i + "st";
    }
    if (j === 2 && k !== 12) {
      return i + "nd";
    }
    if (j === 3 && k !== 13) {
      return i + "rd";
    }
    return i + "th";
  }

  const year = new Date().getFullYear();
  return (
    <div className="main-wrapper">
      <Header />
      <main className={"main-content"}>
        <section id="bio">
          <div className="splash-bio-wrapper">
            <h1> Hey, I'm Char </h1>
            <p>
              I'm an aspiring software developer based in the UK, who's
              passionate about creating a <b>beautiful</b>, <b>functional</b>{" "}
              and <b>accessible</b> web.
            </p>
          </div>
        </section>
        <section id="about">
          <h2> About Me</h2>
          <div className={"section-content"}>
            <p>
              I'm a{" "}
              <s>
                {year < 2024
                  ? `${getSuffix(year.toString().charAt(3))} year`
                  : " "}
              </s>{" "}
              BSC Software Engineering{" "}
              {year > 2024 ? "graduate from" : "student"}
              <b>
                <a href={"https://www.port.ac.uk/"}>
                  {" "}
                  @University of Portsmouth
                </a>
              </b>
              .
            </p>
            <p>
              {year < 2024 ? (
                <>
                  <b>(From June 2022)</b> As part of my course, I'm undertaking
                  a industrial placement as Developer{" "}
                </>
              ) : (
                <>I work part time as a Developer</>
              )}
              <b>
                <a href={"https://radweb.co.uk"}> @Radweb</a>
              </b>
              , primarily working on{" "}
              <a href={"https://inventorybase.co.uk/"}> InventoryBase</a>.
            </p>
            <p>
              My professional interests lie in <b>Front-end Development</b>,{" "}
              <b>UX and HCI</b> - with specific interest in{" "}
              <a
                href={
                  "https://www.editorx.com/shaping-design/article/what-is-neurodiversity-in-web-design"
                }
              >
                neurodivergent-friendly design
              </a>
              .
            </p>
            <p>
              {" "}
              In my free time, I'm an avid gamer at the physical and virtual
              tabletop. Right now, I'm running{" "}
              <b> Icewind Dale: Rime of the Frostmaiden</b>, and exploring the
              Dragon Isles in <b>World of Warcraft: Dragonflight</b>.
            </p>
          </div>
        </section>
        <section id="portfolio">
          <h2> Portfolio </h2>
          <div className={"section-content"}>
            <PortfolioItem
              img={<MathSymbols size={100} />}
              link={"https://github.com/bl-kt/date-calc"}
              text={
                "I found myself googling 'date calculator' more often than I'd like, so I made one. " +
                "A little project I did whilst learning Javascript that I still use occasionally"
              }
              title={"Date Calculator"}
              direction={"left"}
              skills={[
                <SkillTag
                  size={"small"}
                  icon={<BrandJavascript size={20} />}
                />,
                <SkillTag size={"small"} icon={<BrandCss3 size={20} />} />,
              ]}
            />
            <PortfolioItem
              img={<Devices size={100} />}
              link={"https://github.com/bl-kt/bl-kt.github.io"}
              text={
                "This website. The first version was developed in 2021, as I was switching courses from BSc Computer Science to Software Engineering, and wanted to practice my Javascript Skills." +
                "The current version is made with React and Vite."
              }
              title={"Website"}
              direction={"right"}
              skills={[
                <SkillTag size={"small"} icon={<BrandReact size={20} />} />,
                <SkillTag size={"small"} icon={<BrandSass size={20} />} />,
                <SkillTag size={"small"} icon={<BrandVite size={20} />} />,
              ]}
            />
          </div>
        </section>
        <section id="skills">
          <h2> Skills </h2>
          <p>
            {" "}
            Once I have more examples to show, this list will be condensed.{" "}
          </p>
          <div className={"section-content"}>
            <h3> Languages</h3>
            <div className={"tag-container"}>
              <SkillTag icon={<BrandJavascript />} text={"JavaScript"} />
              <SkillTag icon={<BrandPhp />} text={"PHP"} />
              <SkillTag icon={<BrandPython />} text={"Python"} />
              <SkillTag text={"Java"} />
              <SkillTag icon={<BrandCss3 />} text={"CSS"} />
              <SkillTag icon={<BrandHtml5 />} text={"HTML"} />
            </div>
            <h3> Technologies </h3>
            <div className={"tag-container"}>
              <SkillTag icon={<BrandReact />} text={"React"} />
              <SkillTag icon={<BrandLaravel />} text={"Laravel"} />
              <SkillTag icon={<BrandSass />} text={"Sass"} />
              <SkillTag icon={<BrandNpm />} text={"Node.js"} />
              <SkillTag icon={<BrandWordpress />} text={"Wordpress"} />
              <SkillTag icon={<BrandGit />} text={"Git"} />
              <SkillTag icon={<BrandRedux />} text={"Redux"} />
            </div>
            <h3> Design </h3>
            <div className={"tag-container"}>
              <SkillTag icon={<BrandFigma />} text={"Figma"}></SkillTag>
              <SkillTag icon={<BrandAdobe />} text={"Adobe Suite"}></SkillTag>
            </div>
            <h3> Database </h3>
            <div className={"tag-container"}>
              <SkillTag icon={<BrandMysql />} text={"MySQL"} />
              <SkillTag text={"PostgresSQL"} />
            </div>
            <h3>Other</h3>
            <div className={"tag-container"}>
              <SkillTag
                icon={<BrandVisualStudio />}
                text={"Visual Studio"}
              ></SkillTag>{" "}
            </div>
          </div>
        </section>
        <section id="contact">
          <h2> Contact Me </h2>
          <div className={"section-content"}>
            Char Ryder
            <br />
            <p>
              Bsc Software Engineering Student <br />
              <a href={"https://www.port.ac.uk/"}>
                {" "}
                University of Portsmouth
              </a>{" "}
            </p>
            <p>
              Developer <br />
              <a href={"https://radweb.co.uk"}> Radweb</a>
            </p>
            <p> Portsmouth, Hampshire, UK</p>
            <p>
              {" "}
              <a href={"mailto:char.ryder@blkt.co.uk"}>char.ryder@blkt.co.uk</a>
            </p>
            <p>
              <a href={"https://www.linkedin.com/in/bl-kt/"}>LinkedIn</a>
              <br />
              <a href={"https://github.com/bl-kt"}>GitHub</a>
            </p>
          </div>
        </section>
      </main>
      <footer>
        <section>
          <p>© {year} BLKT </p>
        </section>
      </footer>
    </div>
  );
}

export default App;
