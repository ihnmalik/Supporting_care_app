import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

import styles from '../../Styles/FormStyles'

export default (props) => (
    <View style={{ marginTop: 30 }}>
        {/* Name Input */}
        <View style={styles.container}>
            <View style={styles.colContainer}>
                <Text>Name and Profession</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.any_other_professionals_name_and_profession}
                    onChangeText={text => props.setDataState('any_other_professionals_name_and_profession', text)}
                />
            </View>

            <View style={styles.colContainer}>
                <Text>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.any_other_professionals_email}
                    onChangeText={text => props.setDataState('any_other_professionals_email', text)}
                />
            </View>

        </View>

        {/* Address Inputs */}
        <View style={{...styles.container, width: '50%'}}>
            <View style={styles.colContainer}>
                <Text>Telphone</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.any_other_professionals_tel}
                    onChangeText={text => props.setDataState('any_other_professionals_tel', text)}
                />
            </View>
        </View>
    </View>
)



