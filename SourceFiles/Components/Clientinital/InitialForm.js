import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import styles from '../../Styles/FormStyles'
import moment from 'moment'

export default (props) => (
    <View style={{ marginTop: 30 }}>
        {/* Name Input */}
        <View style={styles.container}>
            <View style={styles.colContainer}>
                <Text>Start Date of Support Package</Text>
                <TouchableOpacity
                    style={{ ...styles.input, justifyContent: 'center', }}
                    onPress={props.showStartDate}
                >
                    <Text>
                        {
                            props.isStartDateSelected ?
                                moment(props.data.start_date_of_support_package).format('DD/MM/YYYY')
                                :
                                ''
                        }
                    </Text>
                </TouchableOpacity>
                {/* <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.start_date_of_support_package}
                    onChangeText={text => props.setDataState('start_date_of_support_package', text)}
                /> */}
            </View>

            <View style={styles.colContainer}>
                <Text>Date of completion of form:</Text>
                <TouchableOpacity
                    style={{ ...styles.input, justifyContent: 'center', }}
                    onPress={props.showEndDate}
                >
                <Text>
                    {
                        props.isEndDateselected ?
                            moment(props.data.date_of_completion_of_form).format('DD/MM/YYYY')
                            :
                            ''
                    }
                </Text>
                </TouchableOpacity>
            </View>

        </View>

        {/* Address Inputs */}
        <View style={styles.container}>
            <View style={styles.colContainer}>
                <Text>
                    Referral from: Please state name of referrer and/or referring
                    agency including contact details
                </Text>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    style={{ ...styles.input, height: 100 }}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.referral_from}
                    onChangeText={text => props.setDataState('referral_from', text)}
                />
            </View>
        </View>
    </View>
)



