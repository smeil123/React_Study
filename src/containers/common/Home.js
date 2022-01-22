import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import imgA from '../../data/images/fatbaby.png'
const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
  },
];

class Home extends Component {
  render() {
    return (
      <div>
      <ImageGallery items={images} /> 
      <img className='post-img' src={imgA} />
      </div>
    );
  }
}

export default Home;