import { SafeAreaProvider }
  from "react-native-safe-area-context";
import TaskScreen from "./screens/TaskScreen";
import { TaskProvider } from "./conttexts/TaskContext";

function App() {
  return (
    <SafeAreaProvider>
      <TaskProvider>
        <TaskScreen />
      </TaskProvider>
    </SafeAreaProvider>
  );
}

export default App;
