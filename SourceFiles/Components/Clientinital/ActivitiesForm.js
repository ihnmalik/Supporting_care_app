import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import styles from '../../Styles/FormStyles'
import moment from 'moment'

export default (props) => (
    <View style={{ marginTop: 30 }}>
        {/* Work Education Inputs */}
        <View style={styles.container}>
            <View style={styles.colContainer}>
                <Text style={{fontWeight: 'bold'}}>
                    Work, Education or Daytime activities
                </Text>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    style={{ ...styles.input, height: 100 }}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.work_activities_desc}
                    onChangeText={text => props.setDataState('work_activities_desc', text)}
                />
            </View>
        </View>

        {/* Cultural or Religion Needs */}
        <View style={styles.container}>
            <View style={styles.colContainer}>
                <Text style={{fontWeight: 'bold'}}>
                    Cultural and/or Religious Needs
                </Text>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    style={{ ...styles.input, height: 100 }}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.culture_religion_needs_desc}
                    onChangeText={text => props.setDataState('culture_religion_needs_desc', text)}
                />
            </View>
        </View>


        {/* Special Dietry Needs */}
        <View style={styles.container}>
            <View style={styles.colContainer}>
                <Text style={{fontWeight: 'bold'}}>
                    Any special dietary needs or preferred foods 
                </Text>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    style={{ ...styles.input, height: 100 }}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.special_dietry_desc}
                    onChangeText={text => props.setDataState('special_dietry_desc', text)}
                />
            </View>
        </View>


        {/* Support Network */}
        <View style={styles.container}>
            <View style={styles.colContainer}>
                <Text style={{fontWeight: 'bold'}}>
                    Support Network and Social Situation 
                </Text>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    style={{ ...styles.input, height: 100 }}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.support_network_desc}
                    onChangeText={text => props.setDataState('support_network_desc', text)}
                />
            </View>
        </View>
    </View>
)



