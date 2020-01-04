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
                    value={props.data.social_worker_name}
                    onChangeText={text => props.setDataState('social_worker_name', text)}
                />
            </View>

            <View style={styles.colContainer}>
                <Text>Address</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.social_worker_address}
                    onChangeText={text => props.setDataState('social_worker_address', text)}
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
                    value={props.data.social_worker_email}
                    onChangeText={text => props.setDataState('social_worker_email', text)}
                />
            </View>

            <View style={styles.colContainer}>
                <Text>Tel No:</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.social_worker_tel}
                    onChangeText={text => props.setDataState('social_worker_tel', text)}
                />
            </View>
        </View>
    </View>
)



