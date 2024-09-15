import { Link } from "react-router-dom";
import { GalleryProps } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";

interface Porps {
  images: GalleryProps[];
  setImages: (updateImages: GalleryProps[]) => void;
}

export const ImageComponent = ({ images, setImages }: Porps) => {
  const toggleFavourite = (id: number) => {
    const updatedImages = images.map((image) =>
      +image.id === id ? { ...image, isFavorite: !image.isFavorite } : image
    );

    setImages(updatedImages);
  };
  return (
    <div>
      {images.map((image) => (
        <div className="image-container-links">
          <Link to={`/imageDetail/${image.id}`} key={image.id}>
            <img
              src={image.url}
              alt="Image of Something"
              className="all-images"
            />
          </Link>
          {!image.isFavorite ? (
            <FontAwesomeIcon
              icon={faRegularHeart}
              className="header-favorites link-centered-to-img"
              onClick={() => toggleFavourite(+image.id)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faSolidHeart}
              className="header-favorites link-centered-to-img"
              onClick={() => toggleFavourite(+image.id)}
            />
          )}
        </div>
      ))}
    </div>
  );
};
