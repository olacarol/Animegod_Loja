import footer from '../../assets/footer.png';
import './style.css';


export function Footer() {
    return (
            <div className='footer'>
                <img className='footer-img' src={footer} />
            </div>
    );
}