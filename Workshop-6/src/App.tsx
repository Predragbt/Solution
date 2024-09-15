import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ImageList } from "./components/ImageList";
import { Favorites } from "./components/Favorites";
import { ImageDetail } from "./components/ImageDetail";
import { Header } from "./components/Header";
import "./App.css";
import { useEffect, useState } from "react";
import { GalleryProps } from "./types";

const App = () => {
  const [images, setImages] = useState<GalleryProps[]>([]);

  // Function to load images from localStorage
  const loadImagesFromLocalStorage = () => {
    const savedImages = localStorage.getItem("images");
    return savedImages ? JSON.parse(savedImages) : null;
  };

  // Save images to localStorage when they change
  useEffect(() => {
    if (images.length > 0) {
      localStorage.setItem("images", JSON.stringify(images));
    }
  }, [images]);

  // Fetch data initially and whenever images are cleared (empty array)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const localImages = loadImagesFromLocalStorage();

        if (localImages) {
          setImages(localImages); // Load from localStorage if available
        } else {
          // Fetch from the API if no data in localStorage
          const response = await fetch(
            `https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json`
          );
          const data = await response.json();

          setImages(data); // Set state and trigger localStorage update
        }
      } catch (error) {
        console.log(error);
      }
    };

    // Only fetch if images is empty, meaning localStorage was cleared
    if (images.length === 0) {
      fetchData();
    }
  }, [images]);

  const clearLocalStorage = () => {
    localStorage.clear();
    setImages([]); // Clear images, trigger re-render and re-fetch via useEffect
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header clearLocalStorage={clearLocalStorage} />
          <div className="content">
            <Outlet />
          </div>
        </>
      ),
      children: [
        {
          path: "/",
          element: <ImageList images={images} setImages={setImages} />,
        },
        { path: "/favorites", element: <Favorites images={images} /> },
        { path: "/imageDetail/:id", element: <ImageDetail images={images} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
