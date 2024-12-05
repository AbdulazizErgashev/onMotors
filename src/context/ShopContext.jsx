import { createContext, useCallback, useEffect, useMemo, useState } from "react";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const safeParseJSON = (data) => {
    try {
      const parsed = JSON.parse(data);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  };

  const [liked, setLiked] = useState(() => {
    const storedLiked = localStorage.getItem("liked");
    return safeParseJSON(storedLiked);
  });

  useEffect(() => {
    localStorage.setItem("liked", JSON.stringify(liked));
  }, [liked]);

  const likeProduct = (product) => {
    setLiked((prev) => {
      if (prev.some((item) => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const unlikeProduct = (ID) => {
    setLiked((prev) => prev.filter((item) => item.id !== ID));
  };

  const handleLike = useCallback(
    (product) => {
      if (liked.some((item) => item.id === product.id)) {
        unlikeProduct(product.id);
      } else {
        likeProduct(product);
      }
    },
    [liked]
  );

  const likedCount = useMemo(() => liked.length, [liked]);

  return (
    <ShopContext.Provider value={{ handleLike, likedCount, liked }}>
      {children}
    </ShopContext.Provider>
  );
};
