import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
   
    },

    boxTop: {
        height:Dimensions.get('window').height /3,
        width: '100%',
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },

    boxMiddle: {
        height:Dimensions.get('window').height /4,
        width: '100%',
        backgroundColor: 'red',
        paddingHorizontal: 20,
    },
    boxBottom: {
        height:Dimensions.get('window').height /3,
        width: '100%',
        backgroundColor: 'blue',
        paddingHorizontal: 20,
    },
    
    logo: {
        width: 80,
        height: 80,
    },
    text: {
        fontWeight: 'bold',
        marginTop: 40,
        color: '#fff',
    },

})
