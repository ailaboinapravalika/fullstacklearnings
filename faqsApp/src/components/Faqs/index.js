// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  state = {faqList: []}

  componentDidMount() {
    const {faqsList} = this.props
    const newFaqsList = faqsList.map(faq => ({...faq, isExpanded: false}))
    this.setState({faqList: newFaqsList})
  }

  onChangeExpand = id => {
    this.setState(prevState => ({
      faqList: prevState.faqList.map(faq => {
        if (faq.id === id) {
          return {...faq, isExpanded: !faq.isExpanded}
        }
        return faq
      }),
    }))
  }

  render() {
    const {faqList} = this.state

    return (
      <div className="bg-faqs">
        <div className="faqs-main-container">
          <h1 className="faqs-title">FAQS</h1>
          <ul className="faq-list-container">
            {faqList.map(faq => (
              <FaqItem
                faqDetails={faq}
                key={faq.id}
                onChangeExpand={this.onChangeExpand}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
