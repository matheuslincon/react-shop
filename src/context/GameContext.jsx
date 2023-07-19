import { createContext, useState, useEffect } from "react";
import { getAllGames } from "../services/games-service";

export const GameContext = createContext();

export const GameProvider = ({children}) => {
  const [games, setGames] = useState([]);

  const getGames = async () => {
    const data = await getAllGames()
    setGames(data);
  }

  useEffect(() => {
    getGames();
  },[]);

  const contextValue = { games, setGames };

  return (
    <GameContext.Provider value={contextValue}>
      {children}
    </GameContext.Provider>
  )
}