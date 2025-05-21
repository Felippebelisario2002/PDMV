import { View, FlatList } from "react-native";
import { Button, Text } from "react-native-paper";

const categorias = [
    "Restaurantes",
    "Lanchonetes",
    "Bares",
    "Pizzarias",
    "Mercados",
    "Soverterias",
    "Cafeterias",
  ];
  
function Grid() {
  return (
    <View>
      <Text variant="titleMedium">Categorias</Text>
      <FlatList
        data={categorias}
        numColumns={2}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <View style={{ flex: 1 }}>
            <Button mode="outlined" onPress={() => {}}>
              {item}
            </Button>
          </View>
        )}
      />
    </View>
  );
}

export default Grid;