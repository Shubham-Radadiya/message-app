/**
 * @format
 */
import "react-native-gesture-handler";
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { ColorProvider } from "./Common/ColorContext";
import { BackgroundProvider } from "./Common/BackgroundContext";

const Root = () => (
  <BackgroundProvider>
    <ColorProvider>
      <App />
    </ColorProvider>
  </BackgroundProvider>
);

AppRegistry.registerComponent(appName, () => Root);
