import { SplashScreen } from "expo-router";
import { useEffect } from "react";
import { Provider } from "react-redux";
import App from ".";
import { store } from "../../store";

export default function TabLayout() {
  useEffect(() => {
    // Hide the splash screen once the component mounts
    SplashScreen.hideAsync().catch(() => {});
  }, []);
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
