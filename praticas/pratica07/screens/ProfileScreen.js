// screens/ProfileScreen.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imageText}>Imagem</Text>
          <Text style={styles.imageText}>Perfil</Text>
        </View>
        <Text style={styles.name}>João da Silva</Text>
        <Text style={styles.email}>joao.silva@email.com.br</Text>
        <Text style={styles.phone}>(61) 99999-9999</Text>
      </View>

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Editar Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'whitesmoke', 
    justifyContent: 'space-between',
  },
  profileContainer: {
    alignItems: 'center', 
  },
  imagePlaceholder: {
    backgroundColor: 'lightgray', 
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  imageText: {
    color: 'gray',
    fontSize: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black', 
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: 'dimgray',
    marginBottom: 4,
  },
  phone: {
    fontSize: 16,
    color: 'dimgray', 
  },
  editButton: {
    backgroundColor: 'cornflowerblue', 
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  editButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});