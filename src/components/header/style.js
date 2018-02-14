
import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
      height: 60, 
      backgroundColor: '#d3d3d3', 
      justifyContent: 'center',
      paddingTop: 20,
      paddingHorizontal: 20,
    },
    container: {
      height: 20, 
      backgroundColor: '#d3d3d3',
      justifyContent: 'space-between', 
      alignItems: 'center',
      flexDirection: 'row',       
    },
    button: {
      width: 40,
      height: 40,
      justifyContent: 'center',
    },
    arrow_button: {
      flexDirection: 'row',   
    },
    text: {
      color: '#1E90FF',
    },
    image: {
      width: 40, 
      height: 40,
    },
    
});

export default styles;