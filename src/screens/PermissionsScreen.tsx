import React, { useContext } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { PermissionsContext } from '../context/PermissionsContext'

export const PermissionsScreen = () => {

    const {permissions,askLocationPermission} = useContext(PermissionsContext)

   


    return (
        <View style={styles.container}>
            <Text>Permissions Screen </Text>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={askLocationPermission}
                >

                <Text style={styles.txt}>Permisos</Text>

            </TouchableOpacity>

            <Text>{JSON.stringify(permissions,null,5)}</Text>
        </View>
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