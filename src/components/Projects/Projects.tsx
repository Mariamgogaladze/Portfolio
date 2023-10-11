import {
  ProjectsContainer,
  ProjectsHeading,
  ProjectsSection,
  Project,
  ProjectImage,
  ProjectTitle,
  ProjectDesc,
  Mari,
  ProjectInfo,
  Projectsparagraph,
  Wrapper,
  Wrapper2,
} from "./ProjectsElements";
import ProjectData from "./ProjectData";
import 'aos/dist/aos.css';
import {useEffect} from "react";
import Aos from "aos";

function Projects() {
  useEffect(() => {
    Aos.init({
    });
  }, []);
  return (
    <ProjectsContainer>
      <ProjectsHeading>Portfolio</ProjectsHeading>
      <Projectsparagraph>Projects</Projectsparagraph>
      <ProjectsSection>
        {ProjectData.map((project) => (
          <Project data-aos="zoom-in" data-aos-duration="2000" key={project.key}>
            <Wrapper>
              <ProjectImage src={project.image} />
            </Wrapper>
            <ProjectInfo>
              <Wrapper2>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDesc>{project.description}</ProjectDesc>
                <Mari href={project.link} target="_blank">
                  Live Demo
                </Mari>
              </Wrapper2>
            </ProjectInfo>
          </Project>
        ))}
      </ProjectsSection>
    </ProjectsContainer>
  );
}

export default Projects;
