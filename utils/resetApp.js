import AsyncStorage from "@react-native-async-storage/async-storage";
import { resetDatabase } from "../database";

export default resetApp = async () => {
  try {
    await AsyncStorage.clear();
    await resetDatabase();
    alert("App Async Storage & DB Reset");
  } catch (e) {
    alert("Error resetting Database and AsyncStorage...");
  }
};
