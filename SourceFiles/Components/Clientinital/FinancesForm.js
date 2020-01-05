import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import styles from '../../Styles/FormStyles'
import RadioForm from 'react-native-simple-radio-button';

import moment from 'moment'

export default (props) => {
    return (
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
                        Finances – what benefits does the client receive? How are bills paid? Is the client able to access their own money? Does someone else manage the clients money and if so, who? Are there adequate safeguards against possible financial mismanagement
                    </Text>
                    <TextInput
                        multiline={true}
                        numberOfLines={4}
                        style={{ ...styles.input, height: 100 }}
                        placeholder=""
                        placeholderTextColor="#333"
                        autoCapitalize="none"
                        value={props.data.finances_benefit_text}
                        onChangeText={text => props.setDataState('finances_benefit_text', text)}
                    />
                </View>


            </View>

            <View style={styles.container}>
                <View style={styles.colContainer}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            marginTop: 20
                        }}
                    >
                        Has a mental capacity ever been assessed? If so, give reasons, date and outcome including if a best interest decision has been made (To be recorded on Care Planner)
                    </Text>

                    <Text
                        style={{
                            // fontWeight: 'bold',
                            marginTop: 20
                        }}
                    >
                        If assessment completed, date of assessment:
                    </Text>
                    <TouchableOpacity
                        style={{ ...styles.input, justifyContent: 'center', }}
                        onPress={props.showAssesmentDate}
                    >
                        <Text>
                            {
                                props.data.isAssesmentSelected ?
                                    moment(props.data.assesment_completed_date).format('DD/MM/YYYY')
                                    :
                                    ''
                            }
                        </Text>
                    </TouchableOpacity>
                </View>


            </View>

            <View style={styles.container}>
                <View style={{ marginLeft: 10 }}>
                    <RadioForm
                        radio_props={props.data.mental_capacity_check}
                        initial={-1}
                        // formHorizontal={true}
                        // labelHorizontal={true}
                        onPress={(value) => props.handleMentalCapacityCheck(value)}
                        buttonColor="black"
                    />
                </View>
            </View>



            <View style={{ ...styles.container, alignItems: 'center', alignContent: 'center' }}>
                <View style={styles.colContainer}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            // marginTop: 20
                            marginRight: 10,
                            // marginLeft: 10
                        }}
                    >
                        Are there any current Deprivation of Liberty concerns? If so, report this back to a senior member of the Team
                    </Text>
                    <RadioForm
                        radio_props={props.data.current_deprivation_check}
                        initial={-1}
                        formHorizontal={true}
                        labelHorizontal={true}
                        onPress={(value) => props.handleCurrentDeprivationChange(value)}
                        buttonColor="black"
                    />
                </View>
            </View>

            {props.data.isCurrentDeprivationOpen &&
                <View style={styles.container}>
                    <View style={styles.colContainer}>
                        <TextInput
                            multiline={true}
                            numberOfLines={4}
                            style={{ ...styles.input, height: 100 }}
                            placeholder=""
                            placeholderTextColor="#333"
                            autoCapitalize="none"
                            value={props.data.current_deprivation_check_text}
                            onChangeText={text => props.setDataState('current_deprivation_check_text', text)}
                        />
                    </View>


                </View>
            }


            <View style={{ ...styles.container, alignItems: 'center', alignContent: 'center' }}>
                <View style={styles.colContainer}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            // marginTop: 20
                            marginRight: 10,
                            // marginLeft: 10
                        }}
                    >
                        Is there a Lasting Power of Attorney? If so, please give details – a Lasting Power of Attorney or LPA is a legal document that allows one or more people to make decision on behalf of the client.
                    </Text>
                    <RadioForm
                        radio_props={props.data.lasting_power_check}
                        initial={-1}
                        formHorizontal={true}
                        labelHorizontal={true}
                        onPress={(value) => props.handleLastingPowerChange(value)}
                        buttonColor="black"
                    />
                </View>
            </View>

            {props.data.isLastingPowerOpen &&
                <View style={styles.container}>
                    <View style={styles.colContainer}>
                        <TextInput
                            multiline={true}
                            numberOfLines={4}
                            style={{ ...styles.input, height: 100 }}
                            placeholder=""
                            placeholderTextColor="#333"
                            autoCapitalize="none"
                            value={props.data.lasting_power_text}
                            onChangeText={text => props.setDataState('lasting_power_text', text)}
                        />
                    </View>


                </View>
            }


            <View style={{ ...styles.container, alignItems: 'center', alignContent: 'center' }}>
                <View style={styles.colContainer}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            // marginTop: 20
                            marginRight: 10,
                            // marginLeft: 10
                        }}
                    >
                        Is there Careline or Telecare in situ? Give details
                    </Text>
                    <RadioForm
                        radio_props={props.data.careline_check}
                        initial={-1}
                        formHorizontal={true}
                        labelHorizontal={true}
                        onPress={(value) => props.handleCarelineChange(value)}
                        buttonColor="black"
                    />
                </View>
            </View>

            {props.data.isCarelineOpen &&
                <View style={styles.container}>
                    <View style={styles.colContainer}>
                        <TextInput
                            multiline={true}
                            numberOfLines={4}
                            style={{ ...styles.input, height: 100 }}
                            placeholder=""
                            placeholderTextColor="#333"
                            autoCapitalize="none"
                            value={props.data.careline_text}
                            onChangeText={text => props.setDataState('careline_text', text)}
                        />
                    </View>


                </View>
            }


<View style={{ ...styles.container, alignItems: 'center', alignContent: 'center' }}>
                <View style={styles.colContainer}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            // marginTop: 20
                            marginRight: 10,
                            // marginLeft: 10
                        }}
                    >
                        Is there a working smoke, fire and heat sensor? If not, does client consent to refer to the London Fire Service
                    </Text>
                    <RadioForm
                        radio_props={props.data.working_smoke_check}
                        initial={-1}
                        formHorizontal={true}
                        labelHorizontal={true}
                        onPress={(value) => props.handleWorkingSmokeChange(value)}
                        buttonColor="black"
                    />
                </View>
            </View>

            {props.data.is_working_smoke_open &&
                <View style={styles.container}>
                    <View style={styles.colContainer}>
                        <TextInput
                            multiline={true}
                            numberOfLines={4}
                            style={{ ...styles.input, height: 100 }}
                            placeholder=""
                            placeholderTextColor="#333"
                            autoCapitalize="none"
                            value={props.data.working_smoke_text}
                            onChangeText={text => props.setDataState('working_smoke_text', text)}
                        />
                    </View>


                </View>
            }


<View style={{ ...styles.container, alignItems: 'center', alignContent: 'center' }}>
                <View style={styles.colContainer}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            // marginTop: 20
                            marginRight: 10,
                            // marginLeft: 10
                        }}
                    >
                Would client like a carbon monoxide detector in the home?
                    </Text>
                    <RadioForm
                        radio_props={props.data.carbon_check}
                        initial={-1}
                        formHorizontal={true}
                        labelHorizontal={true}
                        onPress={(value) => props.handleCarbonCheckChange(value)}
                        buttonColor="black"
                    />
                </View>
            </View>

            {props.data.is_carbon_check_open &&
                <View style={styles.container}>
                    <View style={styles.colContainer}>
                        <TextInput
                            multiline={true}
                            numberOfLines={4}
                            style={{ ...styles.input, height: 100 }}
                            placeholder=""
                            placeholderTextColor="#333"
                            autoCapitalize="none"
                            value={props.data.carbon_text}
                            onChangeText={text => props.setDataState('carbon_text', text)}
                        />
                    </View>


                </View>
            }



<View style={{ ...styles.container, alignItems: 'center', alignContent: 'center' }}>
                <View style={styles.colContainer}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            // marginTop: 20
                            marginRight: 10,
                            // marginLeft: 10
                        }}
                    >
        Is there any specialist equipment or carer training needed to provide care? Please list (if so, each activity will need to be risk assessed, separately)
                    </Text>
                    <RadioForm
                        radio_props={props.data.specialist_check}
                        initial={-1}
                        formHorizontal={true}
                        labelHorizontal={true}
                        onPress={(value) => props.handleSpecialistEqChange(value)}
                        buttonColor="black"
                    />
                </View>
            </View>

            {props.data.is_specialist_eq_check_open &&
                <View style={styles.container}>
                    <View style={styles.colContainer}>
                        <TextInput
                            multiline={true}
                            numberOfLines={4}
                            style={{ ...styles.input, height: 100 }}
                            placeholder=""
                            placeholderTextColor="#333"
                            autoCapitalize="none"
                            value={props.data.specialist_eq_text}
                            onChangeText={text => props.setDataState('specialist_eq_text', text)}
                        />
                    </View>


                </View>
            }


<View style={{ ...styles.container, alignItems: 'center', alignContent: 'center' }}>
                <View style={styles.colContainer}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            // marginTop: 20
                            marginRight: 10,
                            // marginLeft: 10
                        }}
                    >
Safeguarding – does the client know what safeguarding is and how to report it?
                    </Text>
                    <RadioForm
                        radio_props={props.data.safeguarding_check}
                        initial={-1}
                        formHorizontal={true}
                        labelHorizontal={true}
                        onPress={(value) => props.handleSafeGuardingChange(value)}
                        buttonColor="black"
                    />
                </View>
            </View>

            {props.data.is_safeguarding_check_open &&
                <View style={styles.container}>
                    <View style={styles.colContainer}>
                        <TextInput
                            multiline={true}
                            numberOfLines={4}
                            style={{ ...styles.input, height: 100 }}
                            placeholder=""
                            placeholderTextColor="#333"
                            autoCapitalize="none"
                            value={props.data.safeguarding_text}
                            onChangeText={text => props.setDataState('safeguarding_text', text)}
                        />
                    </View>


                </View>
            }
        </View>
    )
}