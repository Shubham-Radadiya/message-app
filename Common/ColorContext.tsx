import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState("#FFFFFF");

  useEffect(() => {
    loadColorFromStorage();
  }, []);

  const setNewColor = async (color) => {
    setSelectedColor(color);
    await saveColorToStorage(color);
  };

  const loadColorFromStorage = async () => {
    try {
      const storedColorString = await AsyncStorage.getItem("selectedColor");
      if (storedColorString) {
        const storedColor = JSON.parse(storedColorString);
        setSelectedColor(storedColor);
      }
    } catch (error) {
      console.error("Error loading color from AsyncStorage:", error);
    }
  };

  const saveColorToStorage = async (color) => {
    try {
      // Convert the color to a string using JSON.stringify
      const colorString = JSON.stringify(color);
      await AsyncStorage.setItem("selectedColor", colorString);
    } catch (error) {
      console.error("Error saving color to AsyncStorage:", error);
    }
  };

  const removeColorFromStorage = async () => {
    try {
      await AsyncStorage.removeItem("selectedColor");
      // setSelectedColor("#FFFFFF"); // Reset to default color or any other value you prefer
    } catch (error) {
      console.error("Error removing color from AsyncStorage:", error);
    }
  };

  return (
    <ColorContext.Provider
      value={{ selectedColor, setNewColor, removeColorFromStorage }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColor must be used within a ColorProvider");
  }
  return context;
};
