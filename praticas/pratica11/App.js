import { TaskScreen } from './screens/TaskScreen';
import { TaskProvider } from './contexts/TaskContext';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <TaskProvider>
        <TaskScreen />
      </TaskProvider>
    </PaperProvider>
  );
}