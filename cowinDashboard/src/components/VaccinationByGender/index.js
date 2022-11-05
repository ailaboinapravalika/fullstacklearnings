// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {genderDetails} = props

  return (
    <div className="coverage-chart-bg">
      <h1 className="coverage-heading">Vaccination by gender</h1>
      <ResponsiveContainer width="100%" height={360}>
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            data={genderDetails}
            startAngel={0}
            endAngle={180}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill=" #5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
          </Pie>
          <Legend iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByGender
