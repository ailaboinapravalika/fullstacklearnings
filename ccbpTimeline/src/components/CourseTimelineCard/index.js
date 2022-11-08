// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseData} = props
  const {courseTitle, id, duration, tagsList, description} = courseData

  return (
    <div className="course-card-bg" key={id}>
      <div className="course-title-bg">
        <h1 className="title">{courseTitle}</h1>
        <AiFillClockCircle className="clock-icon" />
        <p className="duration">{duration}</p>
      </div>
      <p className="course-description">{description}</p>
      <ul className="tags-list-bg">
        {tagsList.map(tag => (
          <li key={tag.id} className="tag">
            <p>{tag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
