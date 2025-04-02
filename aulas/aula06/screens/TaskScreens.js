import { useState } from "react"
import { View, StyleSheet } from "react-native";
import { Appbar, List, TextInput, FAB, Modal, Button } from "react-native-paper";


function TaskScreen() {
    const [concluida, setConcluida] = useState(false);
    const [exibeModal, setExibeModal] = useState(false);
    return <View style={styles.container}>
        <Appbar.Header>
            <Appbar.Content title="Minhas Tarefas" />
        </Appbar.Header>
        <List.Item
            onPress={() => setConcluida(!concluida)}
            title="Estudar para a prova"
            right={(props) => {
                <List.Icon
                    icon={concluida
                        ? "check-circle-outline"
                        : "circule-outline"}
                />
            }}
        />
        <FAB onPress={()=> setexibeModal (true)} icon="plus" style={styles.fab} />
        <Modal visible ={exibeModal}>
            <TextInput label="Nova Tarefa"/>
            <Button onPress={() => setExibeModal(false)}>Salvar</Button>
        </Modal>
    </View>;
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fab: {
        position: "absolute",
        right: 16,
        bottom: 16,
    },
});


export default TaskScreen;


