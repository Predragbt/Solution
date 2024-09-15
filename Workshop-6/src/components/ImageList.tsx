import { GalleryProps } from "../types";
import { ImageComponent } from "./Image";

interface Porps {
  images: GalleryProps[];
  setImages: (updateImages: GalleryProps[]) => void;
}

export const ImageList = ({ images, setImages }: Porps) => {
  return (
    <div>
      <ImageComponent images={images} setImages={setImages} />
    </div>
  );
};
