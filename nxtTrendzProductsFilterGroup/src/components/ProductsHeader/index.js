import {BsFilterRight, BsSearch} from 'react-icons/bs'

import './index.css'

const ProductsHeader = props => {
  const {onChangeSearchInput, noProductsHeader} = props

  const onSearch = e => {
    console.log(e.key)
    if (e.key === 'Enter') {
      onChangeSearchInput(e.target.value)
    }
  }

  const onChangeSortby = event => {
    const {changeSortby} = props
    changeSortby(event.target.value)
  }

  const {sortbyOptions, activeOptionId} = props

  return (
    <div className="products-header">
      <div className="search-box">
        <input
          type="search"
          className="search-bar"
          placeholder="Search"
          onKeyDown={onSearch}
        />
        <BsSearch className="search-icon" />
      </div>
      {!noProductsHeader && (
        <div className="header-sort-container">
          <h1 className="products-list-heading">All Products</h1>
          <div className="sort-by-container">
            <BsFilterRight className="sort-by-icon" />
            <p className="sort-by">Sort by</p>
            <select
              className="sort-by-select"
              value={activeOptionId}
              onChange={onChangeSortby}
            >
              {sortbyOptions.map(eachOption => (
                <option
                  key={eachOption.optionId}
                  value={eachOption.optionId}
                  className="select-option"
                >
                  {eachOption.displayText}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductsHeader
