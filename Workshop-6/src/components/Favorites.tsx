import { GalleryProps } from "../types";

interface Porps {
  images: GalleryProps[];
}

export const Favorites = ({ images }: Porps) => {
  const filteredImages = images.filter((image) => image.isFavorite);
  return (
    <div>
      {filteredImages.map((image) => (
        <img
          src={image.url}
          key={image.id}
          alt="Image"
          className="all-images"
        />
      ))}
    </div>
  );
};
