import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {

  const { username } = useParams();

  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchPortfolio = async () => {

      const res = await axios.get(
        `https://portfolio-backend-oq6g.onrender.com/api/${username}`
      );

      setPortfolio(res.data);
      setLoading(false);
    };

    fetchPortfolio();

  }, [username]);

console.log(portfolio);


  return (
    <PortfolioContext.Provider value={{ portfolio, loading }}>
      {children}
    </PortfolioContext.Provider>
  );
};