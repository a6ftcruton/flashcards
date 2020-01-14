import React from 'react'
import PropTypes from 'prop-types'

const defaultSrc = 'https://via.placeholder.com/500x300.png?text=Image+Missing'

const Image = ({ src = defaultSrc, subject }) => (
  <img alt={`${subject}`} src={src} />
)

Image.propTypes = {
  src: PropTypes.string,
  subject: PropTypes.string,
}

export default Image
