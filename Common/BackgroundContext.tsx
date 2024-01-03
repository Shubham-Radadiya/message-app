// BackgroundContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BackgroundContext = createContext();

export const useBackground = () => {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error("useBackground must be used within a BackgroundProvider");
  }
  return context;
};

export const BackgroundProvider = ({ children }) => {
  const [selectedBackground, setSelectedBackground] = useState(null);

  useEffect(() => {
    loadBackgroundFromStorage();
  }, []);

  const setGlobalBackground = async (backgroundSource) => {
    setSelectedBackground(backgroundSource);
    await saveBackgroundToStorage(backgroundSource);
  };

  const loadBackgroundFromStorage = async () => {
    try {
      const storedBackground = await AsyncStorage.getItem("selectedBackground");
      if (storedBackground) {
        setSelectedBackground(storedBackground);
      }
    } catch (error) {
      console.error("Error loading background from AsyncStorage:", error);
    }
  };

  const saveBackgroundToStorage = async (backgroundSource) => {
    try {
      await AsyncStorage.setItem("selectedBackground", backgroundSource);
    } catch (error) {
      console.error("Error saving background to AsyncStorage:", error);
    }
  };
  const removeBackgroundFromStorage = async () => {
    try {
      await AsyncStorage.removeItem("selectedBackground");
      setSelectedBackground(null); // Optionally, reset the selectedBackground state
    } catch (error) {
      console.error("Error removing background from AsyncStorage:", error);
    }
  };

  return (
    <BackgroundContext.Provider
      value={{
        selectedBackground,
        setGlobalBackground,
        removeBackgroundFromStorage,
      }}
    >
      {children}
    </BackgroundContext.Provider>
  );
};
