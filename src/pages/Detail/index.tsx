import React from 'react';
import { useNavigation } from '@react-navigation/native';
import WhatsApp from 'react-native-vector-icons/FontAwesome';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

const Detail = () => {
    const navigation = useNavigation();

    function handleNavigateBack() {
      navigation.goBack();
    }

    return (
      <>
        <View style={styles.container}>
          <TouchableOpacity onPress={handleNavigateBack}>
            <Icon name="arrow-left" size={20} color="#34cb79" />
          </TouchableOpacity>

          <Image style={styles.pointImage} source={{ uri: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80' }} />
          <Text style={styles.pointName}>Mercadão do seu João</Text>
          <Text>Lâmpadas, Óleo de Cozinha</Text>

          <View style={styles.address}>
            <Text style={styles.addressTitle}>Endereço</Text>
            <Text style={styles.addressContent}>Rio do Sul, SC</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <RectButton style={styles.button} onPress={() => {}}>
            <WhatsApp name="whatsapp" size={20} color="#fff" />
            <Text style={styles.buttonText}>WhatsApp</Text>
          </RectButton>

          <RectButton style={styles.button} onPress={() => {}}>
            <Icon name="mail" size={20} color="#fff" />
            <Text style={styles.buttonText}>E-mail</Text>
          </RectButton>
        </View>
      </>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32,
      paddingTop: 20 + Constants.statusBarHeight,
    },
  
    pointImage: {
      width: '100%',
      height: 120,
      resizeMode: 'cover',
      borderRadius: 10,
      marginTop: 32,
    },
  
    pointName: {
      color: '#322153',
      fontSize: 28,
      marginTop: 24,
    },
  
    pointItems: {
      fontSize: 16,
      lineHeight: 24,
      marginTop: 8,
      color: '#6C6C80'
    },
  
    address: {
      marginTop: 32,
    },
    
    addressTitle: {
      color: '#322153',
      fontSize: 16,
    },
  
    addressContent: {
      lineHeight: 24,
      marginTop: 8,
      color: '#6C6C80'
    },
  
    footer: {
      borderTopWidth: StyleSheet.hairlineWidth,
      borderColor: '#999',
      paddingVertical: 20,
      paddingHorizontal: 32,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    
    button: {
      width: '48%',
      backgroundColor: '#34CB79',
      borderRadius: 10,
      height: 50,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    buttonText: {
      marginLeft: 8,
      color: '#FFF',
      fontSize: 16,
    },
  });

export default Detail;