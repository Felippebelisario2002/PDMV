import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function ContactScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <View style={styles.contactCard}>
          <View style={styles.contactInfo}>
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>👤</Text>
            </View>
            <View>
              <Text style={styles.name}>Nome do Contato</Text>
              <Text style={styles.phone}>(99) 99999-9999</Text>
            </View>
          </View>
        </View>
  
        <View style={styles.contactCard}>
          <View style={styles.contactInfo}>
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>👤</Text>
            </View>
            <View>
              <Text style={styles.name}>Nome do Contato</Text>
              <Text style={styles.phone}>(99) 99999-9999</Text>
            </View>
          </View>
        </View>
  
        <View style={styles.contactCard}>
          <View style={styles.contactInfo}>
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>👤</Text>
            </View>
            <View>
              <Text style={styles.name}>Nome do Contato</Text>
              <Text style={styles.phone}>(99) 99999-9999</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: 'lightgray',
    },
    contactCard: {
      backgroundColor: 'white',
      padding: 16,
      marginBottom: 12,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: 'gainsboro',
    },
    contactInfo: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconContainer: {
      backgroundColor: 'royalblue', 
      borderRadius: 15,
      width: 30,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
    },
    icon: {
      color: 'white', 
      fontSize: 18,
      fontWeight: 'bold',
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black', 
    },
    phone: {
      fontSize: 16,
      color: 'dimgray', 
    },
  });
  export default ContactScreen;