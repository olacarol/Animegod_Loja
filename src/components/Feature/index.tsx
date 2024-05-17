import React from 'react';
import { ICard } from '../../types';
import './style.css';

interface FeaturedCardProps {
  item: ICard;
}

export const FeaturedCard: React.FC<FeaturedCardProps> = ({ item }) => {
  return (
    <div className='texto2'>
        <h1>TOP SELLING PRODUCT</h1>

        <div className="featured-card">
        <div className="image-container">
            <img src={item.imgSrc} className="main-image" />
            <div className="extra-images">
            <img src={item.imgSrc1} className="extra-image" />
            <img src={item.imgSrc2} className="extra-image" />
            </div>
        </div>
        
        <div className='products'>
            <p className="product-title">{item.title}</p>
            <p className="product-collection">{item.collection}</p>
            <p className="product-price">Rs. {item.price}</p>
        </div>
        </div>
    </div>
  );
};

