// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import Header from '../Header'
import './index.css'
import SimilarProductItem from '../SimilarProductItem'

class ProductItemDetails extends Component {
  state = {
    productDetails: {},
    isLoading: false,
    apiStatus: '',
    similarProducts: [],
    itemCount: 1,
  }

  componentDidMount() {
    this.getProductData()
  }

  getFormattedData = data => {
    const formattedProductData = {
      availability: data.availability,
      brand: data.brand,
      description: data.description,
      id: data.id,
      imageUrl: data.image_url,
      price: data.price,
      rating: data.rating,

      title: data.title,
      totalReviews: data.total_reviews,
    }

    return formattedProductData
  }

  getProductData = async () => {
    console.log(this.props)
    const {match} = this.props
    const {id} = match.params
    console.log(id)
    this.setState({isLoading: true})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/products/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      const productItemObj = this.getFormattedData(data)
      const similarProducts = data.similar_products.map(eachProduct =>
        this.getFormattedData(eachProduct),
      )
      this.setState({
        productDetails: productItemObj,
        isLoading: false,
        apiStatus: 'success',
        similarProducts,
      })
    } else {
      this.setState({isLoading: false, apiStatus: 'failure'})
    }
  }

  onIncreaseItemCount = () => {
    this.setState(prevState => ({itemCount: prevState.itemCount + 1}))
  }

  onDecreaseItemCount = () => {
    const {itemCount} = this.state
    if (itemCount > 1) {
      this.setState(prevState => ({itemCount: prevState.itemCount - 1}))
    }
  }

  goBackToProductsView = () => {
    const {history} = this.props
    history.push('/products')
  }

  renderFailureView = () => (
    <>
      <div className="error-img-box">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
          alt="failure view"
          className="error-view-img"
        />
      </div>
      <h1 className="error-tag">Product Not Found</h1>
      <button
        className="continue-shop-btn"
        type="button"
        onClick={this.goBackToProductsView}
      >
        Continue Shopping
      </button>
    </>
  )

  renderSuccessView = () => {
    const {similarProducts, productDetails, itemCount} = this.state
    const {
      availability,
      brand,
      description,
      id,
      imageUrl,
      price,
      rating,

      title,
      totalReviews,
    } = productDetails

    return (
      <>
        <div className="product-item-container">
          <div className="product-item-img-bg">
            <img src={imageUrl} alt="product" className="product-item-img" />
          </div>
          <div className="product-item-data">
            <h1 className="product-name">{title}</h1>
            <p className="item-price">{`Rs ${price}/-`}</p>
            <div className="ratings-box">
              <div className="rating">
                <p className="item-rating">{rating}</p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                  alt="star"
                  className="stars-img"
                />
              </div>

              <p className="reviews-count">{`${totalReviews} Reviews`}</p>
            </div>
            <p className="item-description">{description}</p>
            <p className="in-stock-info">
              <span className="dark-clr">Available:</span>
              {` ${availability}`}
            </p>
            <p className="in-stock-info">
              <span className="dark-clr">Brand:</span>
              {` ${brand}`}
            </p>
            <hr className="product-item-line" />
            <div className="item-add-container">
              <button
                className="plus-btn"
                type="button"
                onClick={this.onIncreaseItemCount}
                testid="plus"
              >
                <BsPlusSquare />
              </button>
              <p className="count-items">{itemCount}</p>
              <button
                className="plus-btn"
                type="button"
                onClick={this.onDecreaseItemCount}
                testid="minus"
              >
                <BsDashSquare />
              </button>
            </div>
            <button type="button" className="continue-shop-btn">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="similar-products-container">
          <h1 className="heading-similar-products">Similar Products</h1>
          <ul className="similar-products-list">
            {similarProducts.map(productItem => (
              <SimilarProductItem
                similarProductDetails={productItem}
                key={productItem.id}
              />
            ))}
          </ul>
        </div>
      </>
    )
  }

  renderProductItemView = () => {
    const {apiStatus} = this.state
    const selectView = apiStatus === 'success'

    return (
      <div className="product-item-bg">
        {selectView ? this.renderSuccessView() : this.renderFailureView()}
      </div>
    )
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <>
        <Header />
        <div className="productItem-bg-container">
          {isLoading ? this.renderLoader() : this.renderProductItemView()}
        </div>
      </>
    )
  }
}

export default ProductItemDetails
