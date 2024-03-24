import { createContext, useState } from "react";

const FavouriteContext = createContext({
  favourites: [],
  favouritesCount: 0,
  addToFavs: (memory) => {},
  removeFromFav: (memoryId) => {},
  checkFav: (memoryId) => {},
});

export const FavouriteProvider = (props) => {
  const [userFavourite, setUserFavourite] = useState([]);

  function addFavourite(memory) {
    setUserFavourite((prevFavs) => {
      return prevFavs.concat(memory);
    });
  }
  function remomveFavourite(memoryId) {
    setUserFavourite((prevFavs) => {
      return prevFavs.filter((item) => {
        return item.id !== memoryId;
      });
    });
  }

  function checkFav(memoryId) {
    return userFavourite.some((item) => item.id === memoryId);
  }

  const context = {
    favourites: userFavourite,
    favouritesCount: userFavourite.length,
    addToFavs: addFavourite,
    removeFromFav: remomveFavourite,
    checkFav: checkFav,
  };
  return (
    <FavouriteContext.Provider value={context}>
      {props.children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteContext;
