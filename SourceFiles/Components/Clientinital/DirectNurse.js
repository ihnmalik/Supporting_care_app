import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

import styles from '../../Styles/FormStyles'

export default (props) => (
    <View>
        {/* Name Input */}
        <View style={styles.container}>
            <View style={styles.colContainer}>
                <Text>Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.district_nurse_name}
                    onChangeText={text => props.setDataState('district_nurse_name', text)}
                />
            </View>

            <View style={styles.colContainer}>
                <Text>Address</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.district_nurse_address}
                    onChangeText={text => props.setDataState('district_nurse_address', text)}
                />
            </View>

        </View>

        {/* Address Inputs */}
        <View style={styles.container}>
            <View style={styles.colContainer}>
                <Text>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.district_nurse_email}
                    onChangeText={text => props.setDataState('district_nurse_email', text)}
                />
            </View>

            <View style={styles.colContainer}>
                <Text>Tel No:</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.district_nurse_tel}
                    onChangeText={text => props.setDataState('district_nurse_tel', text)}
                />
            </View>
        </View>
    </View>
)



