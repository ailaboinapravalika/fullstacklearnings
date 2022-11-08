// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectData} = props
  const {
    imageUrl,
    id,
    projectTitle,
    duration,
    description,
    projectUrl,
  } = projectData

  return (
    <div className="project-card-bg" key={id}>
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="project-title-bg">
        <h1 className="project-title">{projectTitle}</h1>
        <AiFillCalendar className="calender-icon" />
        <p className="project-duration">{duration}</p>
      </div>
      <p className="project-description">{description}</p>
      <a href={projectUrl} className="visit-link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
