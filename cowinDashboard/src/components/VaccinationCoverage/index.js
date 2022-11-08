// Write your code here
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {coverageDetails} = props

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="coverage-chart-bg">
      <h1 className="coverage-heading">Vaccination Coverage</h1>

      <BarChart
        width={1000}
        height={300}
        data={coverageDetails}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="vaccine_date"
          tick={{
            stroke: '#94a3b8',
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: '#94a3b8',
            strokeWidth: 0,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 20,
          }}
        />
        <Bar
          radius={[10, 10, 0, 0]}
          dataKey="dose_1"
          name="Dose 1"
          fill="#5a8dee"
          barSize="14%"
        />
        <Bar
          radius={[10, 10, 0, 0]}
          dataKey="dose_2"
          name="Dose 2"
          fill="#f54394"
          barSize="14%"
        />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
