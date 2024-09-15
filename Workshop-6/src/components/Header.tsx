import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface Props {
  clearLocalStorage: () => void;
}

export const Header = ({ clearLocalStorage }: Props) => {
  return (
    <header>
      <Link to={"/"} className="header-home">
        <p>All Images</p>
      </Link>
      <button onClick={clearLocalStorage}>Clear Favourites</button>
      <Link to={"/favorites"}>
        <FontAwesomeIcon icon={faHeart} className="header-favorites" />
      </Link>
    </header>
  );
};
