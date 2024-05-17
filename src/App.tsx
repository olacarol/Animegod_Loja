import { PreHeader, Header, Provider, Card, FeaturedCard, Footer} from './components';
import { ICard } from './types';
import image7 from './assets/image7.png';
import image8 from './assets/image8.png';
import image9 from './assets/image9.png';
import image10 from './assets/image10.png';
import image11 from './assets/image11.png';
import image12 from './assets/image12.png';
import image13 from './assets/image13.png';
import image14 from './assets/image14.png'; // Nova imagem para o card de destaque
import image15 from './assets/image15.png';

function App() {
  const cards: ICard[] = [
    { collection: 'Premium Hoodie', imgSrc: image7, price: 899, title: 'Anime Legends - Hoodie' },
    { collection: 'T-shirt', imgSrc: image8, price: 549, title: 'Warrior Evolution - T-shirt' },
    { collection: 'Drop Cut', imgSrc: image9, price: 659, title: 'Wings of Freedom - Drop cut T-shirt' },
    { collection: 'T-shirt', imgSrc: image10, price: 529, title: 'Sharingan Symbols' },
    { collection: 'T-shirt', imgSrc: image11, price: 599, title: 'Leaf Village Legends - Naruto' },
    { collection: 'Hoodie', imgSrc: image12, price: 899, title: 'Pirate Hunter - Hoodie' },
  ];

  const featuredCard: ICard = { 
    collection: 'Oversize Shirts', 
    imgSrc: image14, 
    imgSrc1: image13, // Adiciona o caminho da primeira imagem extra
    imgSrc2: image15, // Adiciona o caminho da segunda imagem extra
    price: 1499, 
    title: 'Naruto: Kakashi Ninja' }

  return (
    <Provider>
      <PreHeader />
      <Header />
      <div className="card-container">
        {cards.map((item, index) => (
          <Card
            key={index}
            collection={item.collection}
            imgSrc={item.imgSrc}
            price={item.price}
            title={item.title}
          />
        ))}
      </div>
      <div className="featured-container"> {/* Container para o card de destaque */}
        <FeaturedCard item={featuredCard} /> {/* Passa o card de destaque como prop para o componente */}
      </div>
      
      <Footer/>

    </Provider>
  );
}

export default App;


