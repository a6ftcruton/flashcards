import React from 'react'
import Image from './Image'

const Card = ({
  title,
  desc,
  src,
}) => (
  // Image
  <div>
    <Image src={src} subject={title} />
    <h1>{title}</h1>
    <p>{desc}</p>
  </div>
)

export default Card
