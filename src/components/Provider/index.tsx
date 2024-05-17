
import type {PropsWithChildren} from 'react';
import './style.css';

export function Provider(props: PropsWithChildren)
 {
    return(
        <div className='provider'>
            {props.children}
        </div>
    )
}
