import React from 'react';

import {
    Text,
    View,
    Image,
    TextInput

} from 'react-native';

import { styles } from './style';
import Logo from '../../assets/logo.png';

export default function Login(){
    return (
        <View style={styles.container}>
            <View style={styles.boxTop}>
                <Image source={Logo}
                    style={{ width: 100, height: 100 }}
                    resizeMode="contain"
                />
                <Text style={styles.text}>Bem-vindo</Text>
            </View>
            <View style={styles.boxMiddle}>
                <Text style={styles.text}>Endereço de Email</Text>
                <TextInput/>
                <TextInput/>
            </View>
            <View style={styles.boxBottom}>
                <Text style={styles.text}>Senha</Text>
            </View>
        </View>
    ) 
}