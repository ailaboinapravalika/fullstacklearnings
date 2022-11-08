// Write your code here
import {Chrono} from 'react-chrono'
import {Component} from 'react'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props

    return (
      <div className="my-journey-bg">
        <h1 className="myjourney">
          MY JOURNEY OF <br />
          <span className="ccbp">CCBP 4.0</span>
        </h1>

        <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
          {timelineItemsList.map(item =>
            item.categoryId === 'COURSE' ? (
              <CourseTimelineCard courseData={item} />
            ) : (
              <ProjectTimelineCard projectData={item} />
            ),
          )}
        </Chrono>
      </div>
    )
  }
}

export default TimelineView
