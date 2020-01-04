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
                    value={props.data.nok_name}
                    onChangeText={text => props.setDataState('nok_name', text)}
                />
            </View>

            <View style={styles.colContainer}>
                <Text>Relationship to Client</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.nok_relationship_to_client}
                    onChangeText={text => props.setDataState('nok_relationship_to_client', text)}
                />
            </View>

        </View>

        {/* Address Inputs */}
        <View style={styles.container}>
            <View style={styles.colContainer}>
                <Text>NoK Address</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.nok_address}
                    onChangeText={text => props.setDataState('nok_address', text)}
                />
            </View>

            <View style={styles.colContainer}>
                <Text>NoK Mobile</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.nok_mobile}
                    onChangeText={text => props.setDataState('nok_mobile', text)}
                />
            </View>
        </View>
    </View>
)