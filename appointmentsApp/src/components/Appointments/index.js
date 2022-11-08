// Write your code here
import './index.css'

import {Component} from 'react'

import {format} from 'date-fns'

import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {
    appointmentsList: [],
    title: '',
    appointmentTime: '',
    filterOn: false,
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {title, appointmentTime, appointmentsList} = this.state
    const formattedAppointmentDate = format(
      new Date(appointmentTime),
      'dd MMMM yyyy, EEEE',
    )
    const newAppointment = {
      id: uuidv4(),
      title,
      appointmentTime: formattedAppointmentDate,
      isStarred: false,
    }

    this.setState({
      appointmentsList: [...appointmentsList, newAppointment],
      title: '',
      appointmentTime: '',
    })
  }

  onChangeTitle = e => {
    this.setState({title: e.target.value})
  }

  onChangeSchedule = e => {
    this.setState({appointmentTime: e.target.value})
  }

  onStarring = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachAppointment => {
        if (id === eachAppointment.id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  onFilterAppointments = () => {
    this.setState(prevState => ({
      filterOn: !prevState.filterOn,
    }))
  }

  render() {
    const {appointmentsList, title, appointmentTime, filterOn} = this.state
    let filteredAppointmentsList
    if (filterOn) {
      filteredAppointmentsList = appointmentsList.filter(
        eachItem => eachItem.isStarred === true,
      )
    } else {
      filteredAppointmentsList = appointmentsList
    }

    return (
      <div className="appointments-bg">
        <div className="appointments-main-card">
          <div className="form-container">
            <div>
              <h1 className="appointments-title">Add Appointments</h1>
              <form className="appointments-form" onSubmit={this.onSubmitForm}>
                <label htmlFor="title" className="label-title">
                  Title
                </label>
                <input
                  className="title-input"
                  id="title"
                  value={title}
                  placeholder="Title"
                  onChange={this.onChangeTitle}
                />
                <label htmlFor="date" className="label-title">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="title-input"
                  placeholder="dd/mm/yyyy"
                  onChange={this.onChangeSchedule}
                  value={appointmentTime}
                />
                <button className="add-btn" type="submit">
                  Add
                </button>
              </form>
            </div>

            <div className="img-appointments-box">
              <img
                className="img-appointments"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
          </div>
          <hr className="line" />
          <div className="appointments-list-bar">
            <p className="appointments-list-heading">Appointments</p>
            <button
              className="starred"
              type="button"
              onClick={this.onFilterAppointments}
            >
              Starred
            </button>
          </div>
          <ul className="list-appointments">
            {filteredAppointmentsList.map(eachItem => (
              <AppointmentItem
                appointmentDetails={eachItem}
                key={eachItem.id}
                onStarring={this.onStarring}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
