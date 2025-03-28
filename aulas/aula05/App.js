import { SafeAreaProvider } from "react-native-safe-area-context"
import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
  <SafeAreaProvider>
    <LoginScreen />
  </SafeAreaProvider>
  )
}

export default App;