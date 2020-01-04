import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import moment from 'moment'

import styles from '../../Styles/FormStyles'

export default (props) => (
    <View>
        {/* Name Input */}
        <View style={styles.container}>
            <View style={styles.colContainer}>
                <Text>Sur Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.client_surname}
                    onChangeText={text => props.setDataState('client_surname', text)}
                />
            </View>

            <View style={styles.colContainer}>
                <Text>First Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.client_first_name}
                    onChangeText={text => props.setDataState('client_first_name', text)}
                />
            </View>

            <View style={styles.colContainer}>
                <Text>Title</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.client_title}
                    onChangeText={text => props.setDataState('client_title', text)}
                />
            </View>
        </View>

        {/* DOB Inputs */}
        <View style={styles.container}>
            <View style={styles.colContainer}>
                <Text>Prefered Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.client_preferred_name}
                    onChangeText={text => props.setDataState('client_preferred_name', text)}
                />
            </View>

            <View style={styles.colContainer}>
                <Text>Date Of Birth</Text>
                <TouchableOpacity
                    style={{ ...styles.input, justifyContent: 'center', }}
                    onPress={props.showDOBPicker}
                >
                <Text>
                    {
                        props.isDOBSelected ?
                            moment(props.data.client_date_of_birth).format('DD/MM/YYYY')
                            :
                            ''
                    }
                </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.colContainer}>
                <Text>Place of Birth</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.client_place_of_birth}
                    onChangeText={text => props.setDataState('client_place_of_birth', text)}
                />
            </View>
        </View>


        {/* Gender Inputs */}
        <View style={styles.container}>
            <View style={styles.colContainer}>
                <Text>Gender</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.client_gender}
                    onChangeText={text => props.setDataState('client_gender', text)}
                />
            </View>

            <View style={styles.colContainer}>
                <Text>Marital Status</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.client_marital_status}
                    onChangeText={text => props.setDataState('client_marital_status', text)}
                />
            </View>

            <View style={styles.colContainer}>
                <Text>Hospital No.</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.client_hospital_no}
                    onChangeText={text => props.setDataState('client_hospital_no', text)}
                />
            </View>
        </View>

        {/* Religion Input */}
        <View style={styles.container}>
            <View style={styles.colContainer}>
                <Text>Religon</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.client_religion}
                    onChangeText={text => props.setDataState('client_religion', text)}
                />
            </View>

            <View style={styles.colContainer}>
                <Text>NHS No.</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.client_nhs_no}
                    onChangeText={text => props.setDataState('client_nhs_no', text)}
                />
            </View>

            <View style={styles.colContainer}>
                <Text>Tel Mobile</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.client_mobile}
                    onChangeText={text => props.setDataState('client_mobile', text)}
                />
            </View>
        </View>

        {/* Address Input */}
        <View style={styles.container}>
            <View style={styles.colContainer}>
                <Text>Address</Text>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    style={{ ...styles.input, height: 100 }}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.client_mobile}
                    onChangeText={text => props.setDataState('client_mobile', text)}
                />
            </View>
        </View>
    </View>
)