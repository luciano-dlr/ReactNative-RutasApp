import React from 'react'
import { Button, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { PERMISSIONS, PermissionStatus, check, request } from 'react-native-permissions'

export const PermissionsScreen = () => {

    const handleCheckLocationPermission = async () => {

        let permissionStatus: PermissionStatus

        if(Platform.OS === 'ios') {

        //    permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
           permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)

        } else {

        //    permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
           permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)

        }

        console.log({permissionStatus});
        

    }


    return (
        <View style={styles.container}>
            <Text>Permissions Screen </Text>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={handleCheckLocationPermission}
                >

                <Text style={styles.txt}>Permisos</Text>

            </TouchableOpacity>
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