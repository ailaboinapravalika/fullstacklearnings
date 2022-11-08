import FilterRating from '../FilterRating'
import FilterCategory from '../FilterCategory'
import './index.css'

const FiltersGroup = props => {
  const {
    activeCategoryId,
    activeRatingId,
    categoryDetails,
    ratingsList,
    onChangeCategory,
    onChangeRating,
    onClearFiltersBtn,
  } = props

  const clearFilters = () => {
    onClearFiltersBtn()
  }

  return (
    <div className="filters-group-container">
      <h1 className="category">Category</h1>
      <ul className="category-list">
        {categoryDetails.map(item => (
          <FilterCategory
            activeCategoryId={activeCategoryId}
            key={item.categoryId}
            categoryData={item}
            onChangeCategory={onChangeCategory}
          />
        ))}
      </ul>
      <h1 className="category">Rating</h1>
      <ul className="category-list">
        {ratingsList.map(item => (
          <FilterRating
            ratingDetails={item}
            key={item.ratingId}
            onChangeRating={onChangeRating}
            activeRatingId={activeRatingId}
          />
        ))}
      </ul>
      <button type="button" className="clear-btn" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
