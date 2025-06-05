import React, { useContext, useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { Appbar, FAB, Modal, Portal } from 'react-native-paper'; // Importe Portal aqui
import { TaskContext } from '../contexts/TaskContext';
import { TaskItem } from '../components/TaskItem';
import { TaskModal } from '../components/TaskModal';

export function TaskScreen() {
  const { tasks, getTasks } = useContext(TaskContext);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const carregar = async () => {
      await getTasks();
    };
    carregar();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Minhas Tarefas" />
      </Appbar.Header>

      <View style={{ flex: 1, paddingBottom: 16 }}>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <TaskItem task={item} />}
        />
      </View>

      <FAB
        style={{ position: "absolute", bottom: 16, right: 16 }}
        icon="plus"
        onPress={() => setShowModal(true)}
      />

      {/* É uma boa prática usar Portal para Modais em React Native Paper */}
      <Portal> 
        <Modal 
          visible={showModal} 
          onDismiss={() => setShowModal(false)}
          contentContainerStyle={{ backgroundColor: 'white', padding: 20, margin: 20, borderRadius: 8 }}
        >
          <TaskModal setShowModal={setShowModal} />
        </Modal>
      </Portal>
    </View>
  );
}