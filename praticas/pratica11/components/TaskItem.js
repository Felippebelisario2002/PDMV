import React, { useContext } from 'react';
import { List, IconButton } from 'react-native-paper';
import { TaskContext } from '../contexts/TaskContext';

export function TaskItem({ task }) {
  const { updateTask, deleteTask } = useContext(TaskContext);

  return (
    <List.Item
      title={task.descricao}
      description={task.concluida ? 'Concluída' : 'Pendente'}
      left={() => (
        <IconButton
          icon={task.concluida ? 'check-circle' : 'circle'}
          onPress={async () =>
            updateTask({ ...task, concluida: !task.concluida })
          }
        />
      )}
      right={() => (
        <IconButton
          icon="delete"
          onPress={async () => deleteTask(task.id)}
        />
      )}
    />
  );
}