import { useParams } from "react-router-dom";
import { GalleryProps } from "../types";

interface Porps {
  images: GalleryProps[];
}

export const ImageDetail = ({ images }: Porps) => {
  const { id } = useParams();

  const updateImages = images.find((image) => image.id === id);
  return (
    <div>
      <img src={updateImages?.url} alt="Image" />
    </div>
  );
};
