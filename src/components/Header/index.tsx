import logo from '../../assets/logo.png';
import cart from '../../assets/cart.svg';
import profile from '../../assets/profile.png';
import banner from '../../assets/banner.png';
import './style.css';


export function Header() {
    return (
        <div className="header">
            <div className='header-content'>
                <div className='header-logo'>
                    <img src={logo} />
                </div>
                <div className='header-icons'>
                    <input placeholder='search' />
                    <img src={cart} />
                    <img src={profile} />
                </div>
            </div>
            <div className='header-banner'>
                <img className='header-banner-img' src={banner} />
            </div>
            <div className='texto'>
                <p>ANIME XX-COLLECTION</p>
            </div>
        </div>
    );
}
