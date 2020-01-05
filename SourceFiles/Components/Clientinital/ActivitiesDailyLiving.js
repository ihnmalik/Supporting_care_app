import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import RadioForm from 'react-native-simple-radio-button';

import styles from '../../Styles/FormStyles'
import moment from 'moment'

export default (props) => (
    <View style={{ marginTop: 30 }}>
        <View style={styles.container}>
            <View style={styles.colContainer}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                    Activities of Daily Living – e.g. how tasks are currently carried out; support needed; any client preferences if care to be provided by Supporting Care; is client independent in these tasks or needs assistance of one/assistance of two
            </Text>
            </View>
        </View>
        {/* Work Education Inputs */}
        <View style={styles.container}>
            <View style={styles.colContainer}>
                <Text style={{ fontWeight: 'bold' }}>
                    Personal Care
                </Text>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    style={{ ...styles.input, height: 100 }}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.personal_care_text}
                    onChangeText={text => props.setDataState('personal_care_text', text)}
                />
            </View>
        </View>

        {/* Cultural or Religion Needs */}
        <View style={styles.container}>
            <View style={styles.colContainer}>
                <Text style={{ fontWeight: 'bold' }}>
                    Domestic (housework)
                </Text>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    style={{ ...styles.input, height: 100 }}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.domestion_work_text}
                    onChangeText={text => props.setDataState('domestion_work_text', text)}
                />
            </View>
        </View>


        {/* Special Dietry Needs */}
        <View style={styles.container}>
            <View style={styles.colContainer}>
                <Text style={{ fontWeight: 'bold' }}>
                    Domestic (laundry)
                </Text>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    style={{ ...styles.input, height: 100 }}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.domestion_laundry_text}
                    onChangeText={text => props.setDataState('domestion_laundry_text', text)}
                />
            </View>
        </View>


        {/* Support Network */}
        <View style={styles.container}>
            <View style={styles.colContainer}>
                <Text style={{ fontWeight: 'bold' }}>
                    Shopping
                </Text>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    style={{ ...styles.input, height: 100 }}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.shopping_text}
                    onChangeText={text => props.setDataState('shopping_text', text)}
                />
            </View>
        </View>

        {/* Cooking */}
        <View style={styles.container}>
            <View style={styles.colContainer}>
                <Text style={{ fontWeight: 'bold' }}>
                    Cooking
                </Text>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    style={{ ...styles.input, height: 100 }}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.cooking_text}
                    onChangeText={text => props.setDataState('cooking_text', text)}
                />
            </View>
        </View>




        <View style={styles.container}>
            <View style={styles.colContainer}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                    Carers View and Comments – include whether carer has opportunity for respite
            </Text>
            </View>
        </View>
        {/* Work Education Inputs */}
        <View style={styles.container}>
            <View style={styles.colContainer}>
                <Text style={{ fontWeight: 'bold' }}>
                    Carer view (clients family/NoK)
                </Text>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    style={{ ...styles.input, height: 100 }}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.carer_view_text}
                    onChangeText={text => props.setDataState('carer_view_text', text)}
                />
            </View>
        </View>


        <View style={styles.container}>
            <View style={{ ...styles.colContainer, marginTop: 0 }}>
                <Text style={{ fontSize: 13, fontStyle: 'italic' }}>
                    Information: From time to time Care Workers may run late especially if there are any emergency with their client or due to public transport delays. If it is more than 15min late, we will call and let you know the reason or arrange for a replacement care worker.
            </Text>
            </View>
        </View>


        {/* Referrer Information */}
        <View style={styles.container}>
            <View style={styles.colContainer}>
                <Text style={{ fontWeight: 'bold' }}>
                    Referrer information about the client – including any risks (copied over from referral information)
                </Text>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    style={{ ...styles.input, height: 100 }}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.referrer_information_text}
                    onChangeText={text => props.setDataState('referrer_information_text', text)}
                />
            </View>
        </View>


        <View style={styles.container}>
            <View style={styles.colContainer}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                    Any changes to Support Plan as requested by Client (e.g. schedule change or how tasks are completed)
            </Text>
            </View>
        </View>

        <View style={styles.container}>
            <View style={styles.colContainer}>
                <Text style={{ fontWeight: 'bold' }}>
                    REVIEW - Has anything changed since last review / changes in care plan / changes in functionality / Medication / Hrs or any other concerns
                </Text>
            </View>
        </View>

        <View style={styles.container}>
            <View style={{ marginLeft: 10 }}>
                <RadioForm
                    radio_props={props.data.review_check}
                    initial={-1}
                    // formHorizontal={true}
                    // labelHorizontal={true}
                    onPress={(value) => props.handleReviewCheckChange(value)}
                    buttonColor="black"
                />
            </View>
        </View>



        <View style={styles.container}>
            <View style={styles.colContainer}>
                <Text style={{ fontWeight: 'bold' }}>
                    Do you still consent to us in providing care for you?
                </Text>
            </View>
        </View>

        <View style={styles.container}>
            <View style={{ marginLeft: 10 }}>
                <RadioForm
                    radio_props={props.data.review_check}
                    initial={-1}
                    // formHorizontal={true}
                    // labelHorizontal={true}
                    onPress={(value) => props.handleReviewCheckChange(value)}
                    buttonColor="black"
                />
            </View>
        </View>
    </View>
)



