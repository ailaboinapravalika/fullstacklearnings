import './index.css'

const ImageItem = props => {
  const {imageDetails, onSelectedThumbNail} = props
  const {id, imageUrl, thumbnailUrl, category} = imageDetails

  const onImageSelect = () => {
    onSelectedThumbNail(imageUrl)
  }

  return (
    <li key={id} className="image-list-item">
      <button className="img-btn" type="button" onClick={onImageSelect}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumb-image" />
      </button>
    </li>
  )
}

export default ImageItem
