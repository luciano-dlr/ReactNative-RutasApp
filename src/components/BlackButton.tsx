import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'




interface Props {
    title:string,
    onPress:() => void;
}

export const BlackButton = ({title,onPress}:Props) => {
  return (
    
    <TouchableOpacity
    style={styles.buttonStyle}
    onPress={onPress}
    
    activeOpacity={0.9}
    >
      <Text style={styles.txt}> {title}</Text>
    </TouchableOpacity>
    
  )
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyle: {
        width: '95%',
        height: 40,
        backgroundColor: 'whitesmoke',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40,
        marginHorizontal: 10,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'gray'
    },
    txt: {
        fontSize: 20,
        fontWeight: '500',
        color: 'black'
    }

});