export interface ICard {
  imgSrc: string;
  imgSrc1?: string; // Adicionando uma interrogação torna essa propriedade opcional
  imgSrc2?: string; // Adicionando uma interrogação torna essa propriedade opcional
  title: string;
  collection: string;
  price: number;
}