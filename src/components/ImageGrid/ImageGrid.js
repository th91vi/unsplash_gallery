import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'

import './styles.css'

const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

const ImageGrid = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    getImages()
  }, [])

  const getImages = async () => {
    const res = await fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=28`)

    const data = await res.json()

    setImages(data)
  }

  return (
    <div className="content">
      <section className="grid">
        {images.map(image => (
          <div
            key={image.id}
            className={`item item-${Math.ceil(
              image.height / image.width,
            )}`}
          >
            <img
              src={image.urls.small}
              alt={image.user.username}
            />
          </div>
        ))}
      </section>
    </div>
  )
}

const mapStateToProps = ({ isLoading,images, error }) => ({
  isLoading,
  images,
  error
})

export default connect(
  mapStateToProps,
  null
)(ImageGrid)
