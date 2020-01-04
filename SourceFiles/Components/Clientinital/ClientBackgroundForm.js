import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

import styles from '../../Styles/FormStyles'

export default (props) => (
    <View>
        {/* Name Input */}
        <View style={styles.container}>
            <View style={styles.colContainer}>
                <Text
                    style={{
                        fontWeight: 'bold',
                        marginTop: 20
                    }}
                >
                    Client’s background (personal and family history, strengths, culture, and social network); hopes, dreams and/or fears; likes and dislikes and/or any other information the client would like to share.
                </Text>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    style={{...styles.input, height: 100}}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.district_nurse_name}
                    onChangeText={text => props.setDataState('district_nurse_name', text)}
                />
            </View>
        </View>
    </View>
)



