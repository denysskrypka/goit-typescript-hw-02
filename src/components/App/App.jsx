import { useState, useEffect } from "react";
import { getPhotos } from "../../helpers/photos-api";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import ReactModal from "react-modal";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [image, setImage] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (!inputValue) return;
    async function fetchPhotos() {
      try {
        setLoader(true);
        setError(false);
        const data = await getPhotos(inputValue, page);

        setPhotos((prevPhotos) => [...prevPhotos, ...data]);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    }

    fetchPhotos();
  }, [inputValue, page]);

  const handleChangeInputValue = (newValue) => {
    setPhotos([]);
    setPage(1);
    setInputValue(newValue);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleOpenModal = (photo) => {
    setImage(photo);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  ReactModal.setAppElement("#root");
  return (
    <div>
      <SearchBar onSearch={handleChangeInputValue} />
      {error && <ErrorMessage />}
      {loader && <Loader />}
      <ImageGallery listPhoto={photos} onOpen={handleOpenModal} />
      {image && (
        <ImageModal
          isOpen={openModal}
          image={image}
          onClose={handleCloseModal}
        />
      )}
      {photos.length > 0 && <LoadMoreBtn onLoad={handleLoadMore} />}
    </div>
  );
}
