import './index.css'

const FilterCategory = props => {
  const {activeCategoryId, categoryData, onChangeCategory} = props
  const {name, categoryId} = categoryData

  const onClickCategory = () => {
    onChangeCategory(categoryId)
  }

  const active = activeCategoryId === categoryId ? 'active' : ''

  return (
    <li className="category-filter" key={categoryId} onClick={onClickCategory}>
      <p className={`cat-btn ${active}`}>{name}</p>
    </li>
  )
}

export default FilterCategory
