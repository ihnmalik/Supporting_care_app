import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

import styles from '../../Styles/FormStyles'
import RadioGroup from 'react-native-radio-buttons-group';


export default (props) => (
    <View>
        {/* Name Input */}
        <View style={styles.container}>
            <View style={styles.colContainer}>
                <Text>Name (individual and/or organisation)</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.housing_contact_name}
                    onChangeText={text => props.setDataState('housing_contact_name', text)}
                />
            </View>

            <View style={styles.colContainer}>
                <Text>Address</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.housing_contact_address}
                    onChangeText={text => props.setDataState('housing_contact_address', text)}
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
                    value={props.data.housing_contact_email}
                    onChangeText={text => props.setDataState('housing_contact_email', text)}
                />
            </View>

            <View style={styles.colContainer}>
                <Text>Telephone</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.housing_contact_tel}
                    onChangeText={text => props.setDataState('housing_contact_tel', text)}
                />
            </View>
        </View>
        <Text
            style={{
                marginLeft: 10,
                fontSize: 15,
                fontWeight: 'bold'
            }}
        >
            Other people living in the house or likely to be present during care visits:
        </Text>
        {/* First Person */}
        <View style={styles.container}>
            <View style={styles.colContainer}>
                <Text>Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.first_other_person_name}
                    onChangeText={text => props.setDataState('first_other_person_name', text)}
                />
            </View>
        </View>

        <View style={styles.container}>
            <RadioGroup 
                flexDirection="row" 
                radioButtons={props.otherPeopleData} 
                onPress={props.onFirstButtonPress} 
            />
        </View>

        {/* Second Person */}
        <View style={styles.container}>
            <View style={styles.colContainer}>
                <Text>Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.sec_other_person_name}
                    onChangeText={text => props.setDataState('sec_other_person_name', text)}
                />
            </View>
        </View>

        <View style={styles.container}>
            <RadioGroup 
                flexDirection="row" 
                radioButtons={props.secondPeopleData} 
                onPress={props.onSecondButtonPress} 
            />
        </View>

        {/* Third Person */}
        <View style={styles.container}>
            <View style={styles.colContainer}>
                <Text>Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.third_other_person_name}
                    onChangeText={text => props.setDataState('third_other_person_name', text)}
                />
            </View>
        </View>

        <View style={styles.container}>
            <RadioGroup 
                flexDirection="row" 
                radioButtons={props.thirdPeopleData} 
                onPress={props.onThirdButtonPress} 
            />
        </View>

        {/* Fourth Person */}
        <View style={styles.container}>
            <View style={styles.colContainer}>
                <Text>Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.fourth_other_person_name}
                    onChangeText={text => props.setDataState('fourth_other_person_name', text)}
                />
            </View>
        </View>

        <View style={styles.container}>
            <RadioGroup 
                flexDirection="row" 
                radioButtons={props.fourthPeopleData} 
                onPress={props.onFourthButtonPress} 
            />
        </View>

        {/* Fifth Person */}
        <View style={styles.container}>
            <View style={styles.colContainer}>
                <Text>Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.fifth_other_person_name}
                    onChangeText={text => props.setDataState('fifth_other_person_name', text)}
                />
            </View>
        </View>

        <View style={styles.container}>
            <RadioGroup 
                flexDirection="row" 
                radioButtons={props.fifthPeopleData} 
                onPress={props.onFifthButtonPress} 
            />
        </View>

        {/* Sixth Person */}
        <View style={styles.container}>
            <View style={styles.colContainer}>
                <Text>Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    placeholderTextColor="#333"
                    autoCapitalize="none"
                    value={props.data.sixth_other_person_name}
                    onChangeText={text => props.setDataState('sixth_other_person_name', text)}
                />
            </View>
        </View>

        <View style={styles.container}>
            <RadioGroup 
                flexDirection="row" 
                radioButtons={props.sixthPeopleData} 
                onPress={props.onSixthButtonPress} 
            />
        </View>
    </View>
)



