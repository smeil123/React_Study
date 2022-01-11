import React, { Component, useState } from 'react';
import ImageGallery from 'react-image-gallery';

export default function PostList(){
    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
          },
          {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
          },
          {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
          },
    ];

    return (
        <div>
            <h1>판매글 목록</h1>
            <ImageGallery items={images} />;
        </div>
    )
}