import { ICard} from '../../types';
import './style.css';

export function Card(props: ICard){

    return (
        <div className='card'>
        <img src={props.imgSrc} />
        <div>
          <p className='product-title'>  {props.title}</p>
          <p className='product-collection'>  {props.collection}</p>
          <p className='product-price'>Rs. {props.price}</p>
        </div>
      </div>
    )
}
