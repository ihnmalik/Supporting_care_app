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
                    Client never to contact a staff member outside their rostered hours or ask for carer’s personal mobile/landline number. Also not to ask carers to undertake duties which are not in the Support Plan. Any changes to care needs must be notified to Supporting Care upon which we will review the care, inform relevant professional involved, and make necessary changes.

Client/Family member understands and will adhere to these conditions in receiving care:

                </Text>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    style={{ ...styles.input, height: 100 }}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.district_nurse_name}
                    onChangeText={text => props.setDataState('district_nurse_name', text)}
                />
            </View>


        </View>

        {/* Address Inputs */}
        {/* <View style={styles.container}>
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
        </View> */}
    </View>
)



