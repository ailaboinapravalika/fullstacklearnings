import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import FiltersGroup from '../FiltersGroup'
import ProductCard from '../ProductCard'
import ProductsHeader from '../ProductsHeader'

import './index.css'

const categoryOptions = [
  {
    name: 'Clothing',
    categoryId: '1',
  },
  {
    name: 'Electronics',
    categoryId: '2',
  },
  {
    name: 'Appliances',
    categoryId: '3',
  },
  {
    name: 'Grocery',
    categoryId: '4',
  },
  {
    name: 'Toys',
    categoryId: '5',
  },
]

const sortbyOptions = [
  {
    optionId: 'PRICE_HIGH',
    displayText: 'Price (High-Low)',
  },
  {
    optionId: 'PRICE_LOW',
    displayText: 'Price (Low-High)',
  },
]

const ratingsList = [
  {
    ratingId: '4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png',
  },
  {
    ratingId: '3',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png',
  },
  {
    ratingId: '2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png',
  },
  {
    ratingId: '1',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png',
  },
]

class AllProductsSection extends Component {
  state = {
    productsList: [],
    isLoading: false,
    activeOptionId: sortbyOptions[0].optionId,
    activeCategoryId: '',
    activeRatingId: '',
    searchInput: '',
    apiStatus: '',
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({
      isLoading: true,
    })
    const jwtToken = Cookies.get('jwt_token')

    // TODO: Update the code to get products with filters applied

    const {
      activeOptionId,
      activeCategoryId,
      activeRatingId,
      searchInput,
    } = this.state
    const apiUrl = `https://apis.ccbp.in/products?sort_by=${activeOptionId}&category=${activeCategoryId}&title_search=${searchInput}&rating=${activeRatingId}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.products.map(product => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }))
      this.setState({
        productsList: updatedData,
        isLoading: false,
        apiStatus: 'SUCCESS',
      })
    } else {
      this.setState({isLoading: false, apiStatus: 'FAILURE'})
    }
  }

  changeSortby = activeOptionId => {
    this.setState({activeOptionId}, this.getProducts)
  }

  renderSuccessView = () => {
    const {productsList} = this.state
    return (
      <div className="all-products-container">
        <ul className="products-list">
          {productsList.map(product => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
      </div>
    )
  }

  renderNoProductsView = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
        alt="no products"
        className="failure-img"
      />
      <h1 className="failure-heading">No Products Found</h1>
      <p className="failure-text">
        We could not find any products. Try other filters.
      </p>
    </div>
  )

  renderProductsList = () => {
    const {productsList, activeOptionId, apiStatus} = this.state
    const productsCount = productsList.length
    const noProducts = productsCount === 0

    // TODO: Add No Products View
    switch (apiStatus) {
      case 'SUCCESS':
        return noProducts
          ? this.renderNoProductsView()
          : this.renderSuccessView()
      case 'FAILURE':
        return (
          <div className="failure-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
              alt="products failure"
              className="failure-img"
            />
            <h1 className="failure-heading">Oops! Something Went Wrong</h1>
            <p className="failure-text">
              We are having some trouble processing your request. Please try
              again.
            </p>
          </div>
        )
      default:
        return null
    }
  }

  renderLoader = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  // TODO: Add failure view

  onChangeSearchInput = searchValue => {
    this.setState({searchInput: searchValue}, this.getProducts)
  }

  onChangeCategory = selectedCategory => {
    console.log(selectedCategory)
    this.setState({activeCategoryId: selectedCategory}, this.getProducts)
  }

  onChangeRating = selectedRating => {
    console.log(selectedRating)
    this.setState({activeRatingId: selectedRating}, this.getProducts)
  }

  onClearFiltersBtn = () => {
    this.setState(
      {searchInput: '', activeCategoryId: '', activeRatingId: ''},
      this.getProducts,
    )
  }

  render() {
    const {
      isLoading,
      productsList,
      activeOptionId,
      apiStatus,
      activeCategoryId,
      activeRatingId,
    } = this.state
    const productsCount = productsList.length
    const noProductsHeader = productsCount === 0 || apiStatus === 'FAILURE'

    return (
      <div className="all-products-section">
        {/* TODO: Update the below element */}

        <ProductsHeader
          activeOptionId={activeOptionId}
          sortbyOptions={sortbyOptions}
          changeSortby={this.changeSortby}
          onChangeSearchInput={this.onChangeSearchInput}
          noProductsHeader={noProductsHeader}
        />
        <div className="filter-products-container">
          <FiltersGroup
            categoryDetails={categoryOptions}
            ratingsList={ratingsList}
            onChangeCategory={this.onChangeCategory}
            onChangeRating={this.onChangeRating}
            activeCategoryId={activeCategoryId}
            activeRatingId={activeRatingId}
            onClearFiltersBtn={this.onClearFiltersBtn}
          />

          {isLoading ? this.renderLoader() : this.renderProductsList()}
        </div>
      </div>
    )
  }
}

export default AllProductsSection
