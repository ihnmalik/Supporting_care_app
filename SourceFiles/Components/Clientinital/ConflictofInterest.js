import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native'

import styles from '../../Styles/FormStyles'
import RadioForm from 'react-native-simple-radio-button';

import SignatureCapture from 'react-native-signature-capture'

class ConflictofInterest extends React.Component {
    saveSign() {
        this.refs["sign"].saveImage();
    }

    resetSign() {
        this.refs["sign"].resetImage();
    }

    _onSaveEvent = (result) => {
        //result.encoded - for the base64 encoded png
        //result.pathName - for the file path name
        console.log(result);

        this.props.saveClientSign(result.pathName)
    }
    _onDragEvent() {
        // This callback will be called when the user enters signature
        console.log("dragged");
    }

    saveFamilySign() {
        this.refs["family_sign"].saveImage();
    }

    resetFamilySign() {
        this.refs["family_sign"].resetImage();
    }

    _onFamilySaveEvent = (result) => {
        //result.encoded - for the base64 encoded png
        //result.pathName - for the file path name
        console.log(result);

        this.props.saveFamilyMemberSign(result.pathName)
    }
    _onFamilyDragEvent() {
        // This callback will be called when the user enters signature
        console.log("dragged");
    }
    render() {
        let props = this.props
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
                            Client never to contact a staff member outside their rostered hours or ask for carer’s personal mobile/landline number. Also not to ask carers to undertake duties which are not in the Support Plan. Any changes to care needs must be notified to Supporting Care upon which we will review the care, inform relevant professional involved, and make necessary changes.
                        </Text>
                        {/* <TextInput
                            multiline={true}
                            numberOfLines={4}
                            style={{ ...styles.input, height: 100 }}
                            placeholder=""
                            placeholderTextColor="#333"
                            autoCapitalize="none"
                            value={props.data.district_nurse_name}
                            onChangeText={text => props.setDataState('district_nurse_name', text)}
                        /> */}
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
                            Client/Family member understands and will adhere to these conditions in receiving care:
                        </Text>
                    </View>
                </View>

                <View
                    style={styles.container}
                >
                    <View style={styles.colContainer}>
                        <Text>Client Signature</Text>
                        <SignatureCapture
                            style={styles.signature}
                            ref="sign"
                            onSaveEvent={this._onSaveEvent}
                            onDragEvent={this._onDragEvent}
                            saveImageFileInExtStorage={false}
                            showNativeButtons={false}
                            showTitleLabel={false}
                            viewMode={"portrait"}

                        />

                        <View style={{ flex: 1, flexDirection: "row", width: '50%' }}>
                            <TouchableHighlight style={styles.buttonStyle}
                                onPress={() => { this.saveSign() }} >
                                <Text>Save</Text>
                            </TouchableHighlight>

                            <TouchableHighlight style={styles.buttonStyle}
                                onPress={() => { this.resetSign() }} >
                                <Text>Reset</Text>
                            </TouchableHighlight>

                        </View>
                    </View>

                    <View style={styles.colContainer}>
                        <Text>Family Member</Text>
                        <SignatureCapture
                            style={styles.signature}
                            ref="family_sign"
                            onSaveEvent={this._onFamilySaveEvent}
                            onDragEvent={this._onFamilyDragEvent}
                            saveImageFileInExtStorage={false}
                            showNativeButtons={false}
                            showTitleLabel={false}
                            viewMode={"portrait"}

                        />

                        <View style={{ flex: 1, flexDirection: "row", width: '50%' }}>
                            <TouchableHighlight style={styles.buttonStyle}
                                onPress={() => { this.saveFamilySign() }} >
                                <Text>Save</Text>
                            </TouchableHighlight>

                            <TouchableHighlight style={styles.buttonStyle}
                                onPress={() => { this.resetFamilySign() }} >
                                <Text>Reset</Text>
                            </TouchableHighlight>

                        </View>
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
                            Physical health and wellbeing -  Disability (physical; learning; autism/autism spectrum) and details
                        </Text>
                        <TextInput
                            multiline={true}
                            numberOfLines={4}
                            style={{ ...styles.input, height: 100 }}
                            placeholder=""
                            placeholderTextColor="#333"
                            autoCapitalize="none"
                            value={props.data.physical_health_wellbeing}
                            onChangeText={text => props.setDataState('physical_health_wellbeing', text)}
                        />
                    </View>


                </View>

                <View style={{ ...styles.container, alignItems: 'center', alignContent: 'center' }}>
                    {/* <View style={styles.colContainer}> */}
                    <Text
                        style={{
                            fontWeight: 'bold',
                            // marginTop: 20
                            marginRight: 10,
                            marginLeft: 10
                        }}
                    >
                        Are there any pressure sores:
                        </Text>
                    <RadioForm
                        radio_props={props.pressure_scores}
                        initial={-1}
                        formHorizontal={true}
                        labelHorizontal={true}
                        onPress={(value) => props.onPressureScoresChange(value)}
                        buttonColor="black"
                    />
                </View>

                {props.isPressureScoreOpen &&
                    <View style={styles.container}>
                        <View style={styles.colContainer}>
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    marginTop: 0
                                }}
                            >
                                What is being done about this?
                    </Text>
                            <TextInput
                                multiline={true}
                                numberOfLines={4}
                                style={{ ...styles.input, height: 100 }}
                                placeholder=""
                                placeholderTextColor="#333"
                                autoCapitalize="none"
                                value={props.data.what_done_for_pressure_score}
                                onChangeText={text => props.setDataState('what_done_for_pressure_score', text)}
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
                            }}
                        >
                            Medical History and details – including any recent hospital admissions over the last 12 months and reasons for admission
                        </Text>
                        <RadioForm
                            radio_props={props.recent_hospital_check}
                            initial={-1}
                            formHorizontal={true}
                            labelHorizontal={true}
                            onPress={(value) => props.onRecentHospitalCheckChange(value)}
                            buttonColor="black"
                        />
                    </View>

                </View>

                {props.isRecetHospitalCheckOpen &&
                    <View style={styles.container}>
                        <View style={styles.colContainer}>
                            <TextInput
                                multiline={true}
                                numberOfLines={4}
                                style={{ ...styles.input, height: 100 }}
                                placeholder=""
                                placeholderTextColor="#333"
                                autoCapitalize="none"
                                value={props.data.reasons_for_admission}
                                onChangeText={text => props.setDataState('reasons_for_admission', text)}
                            />
                        </View>

                    </View>
                }



                <View style={styles.container}>
                    <View style={styles.colContainer}>
                        <Text
                            style={{
                                fontWeight: 'bold',
                                marginTop: 20
                            }}
                        >
                            Medication Taken (at time of assessment) including name and frequency
                        </Text>
                        <TextInput
                            style={{
                                ...styles.input,
                                borderWidth: 0,
                                borderBottomColor: '#d4d4d4',
                                borderBottomWidth: 1
                            }}
                            placeholder=""
                            placeholderTextColor="#333"
                            autoCapitalize="none"
                            value={props.data.medication_taken_1}
                            onChangeText={text => props.setDataState('medication_taken_1', text)}
                        />
                        <TextInput
                            style={{
                                ...styles.input,
                                borderWidth: 0,
                                borderBottomColor: '#d4d4d4',
                                borderBottomWidth: 1
                            }}
                            placeholder=""
                            placeholderTextColor="#333"
                            autoCapitalize="none"
                            value={props.data.medication_taken_2}
                            onChangeText={text => props.setDataState('medication_taken_2', text)}
                        />
                        <TextInput
                            style={{
                                ...styles.input,
                                borderWidth: 0,
                                borderBottomColor: '#d4d4d4',
                                borderBottomWidth: 1
                            }}
                            placeholder=""
                            placeholderTextColor="#333"
                            autoCapitalize="none"
                            value={props.data.medication_taken_3}
                            onChangeText={text => props.setDataState('medication_taken_3', text)}
                        />
                        <TextInput
                            style={{
                                ...styles.input,
                                borderWidth: 0,
                                borderBottomColor: '#d4d4d4',
                                borderBottomWidth: 1
                            }}
                            placeholder=""
                            placeholderTextColor="#333"
                            autoCapitalize="none"
                            value={props.data.medication_taken_4}
                            onChangeText={text => props.setDataState('medication_taken_4', text)}
                        />
                        <TextInput
                            style={{
                                ...styles.input,
                                borderWidth: 0,
                                borderBottomColor: '#d4d4d4',
                                borderBottomWidth: 1
                            }}
                            placeholder=""
                            placeholderTextColor="#333"
                            autoCapitalize="none"
                            value={props.data.medication_taken_5}
                            onChangeText={text => props.setDataState('medication_taken_5', text)}
                        />
                        <TextInput
                            style={{
                                ...styles.input,
                                borderWidth: 0,
                                borderBottomColor: '#d4d4d4',
                                borderBottomWidth: 1
                            }}
                            placeholder=""
                            placeholderTextColor="#333"
                            autoCapitalize="none"
                            value={props.data.medicaiton_taken_6}
                            onChangeText={text => props.setDataState('medicaiton_taken_6', text)}
                        />
                        <TextInput
                            style={{
                                ...styles.input,
                                borderWidth: 0,
                                borderBottomColor: '#d4d4d4',
                                borderBottomWidth: 1
                            }}
                            placeholder=""
                            placeholderTextColor="#333"
                            autoCapitalize="none"
                            value={props.data.medication_taken_7}
                            onChangeText={text => props.setDataState('medication_taken_7', text)}
                        />
                        <TextInput
                            style={{
                                ...styles.input,
                                borderWidth: 0,
                                borderBottomColor: '#d4d4d4',
                                borderBottomWidth: 1
                            }}
                            placeholder=""
                            placeholderTextColor="#333"
                            autoCapitalize="none"
                            value={props.data.medication_taken_8}
                            onChangeText={text => props.setDataState('medication_taken_8', text)}
                        />
                        <TextInput
                            style={{
                                ...styles.input,
                                borderWidth: 0,
                                borderBottomColor: '#d4d4d4',
                                borderBottomWidth: 1
                            }}
                            placeholder=""
                            placeholderTextColor="#333"
                            autoCapitalize="none"
                            value={props.data.medication_taken_9}
                            onChangeText={text => props.setDataState('medication_taken_9', text)}
                        />
                        <TextInput
                            style={{
                                ...styles.input,
                                borderWidth: 0,
                                borderBottomColor: '#d4d4d4',
                                borderBottomWidth: 1
                            }}
                            placeholder=""
                            placeholderTextColor="#333"
                            autoCapitalize="none"
                            value={props.data.medication_taken_10}
                            onChangeText={text => props.setDataState('medication_taken_10', text)}
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
                                marginLeft: 10
                            }}
                        >
                            How is medication administered? (e.g. by self; family; carers; blister pack; professionals with support of Telecare)
                        </Text>
                        <RadioForm
                            radio_props={props.medication_administration_check}
                            initial={-1}
                            formHorizontal={true}
                            labelHorizontal={true}
                            onPress={(value) => props.onMedicationAdministrationChange(value)}
                            buttonColor="black"
                        />
                    </View>
                </View>

                {props.isMedicationAdminOpen &&
                    <View style={styles.container}>
                        <View style={styles.colContainer}>
                            <TextInput
                                multiline={true}
                                numberOfLines={4}
                                style={{ ...styles.input, height: 100 }}
                                placeholder=""
                                placeholderTextColor="#333"
                                autoCapitalize="none"
                                value={props.data.how_medication_administarted_text}
                                onChangeText={text => props.setDataState('how_medication_administarted_text', text)}
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
                                marginLeft: 10
                            }}
                        >
                            Any known allergies – e.g. medication or food
                        </Text>
                        <RadioForm
                            radio_props={props.any_known_allergies_check}
                            initial={-1}
                            formHorizontal={true}
                            labelHorizontal={true}
                            onPress={(value) => props.onKnownAllergiesCheckChange(value)}
                            buttonColor="black"
                        />
                    </View>
                </View>

                {props.isKnownAllergiesOpen &&
                    <View style={styles.container}>
                        <View style={styles.colContainer}>
                            <TextInput
                                multiline={true}
                                numberOfLines={4}
                                style={{ ...styles.input, height: 100 }}
                                placeholder=""
                                placeholderTextColor="#333"
                                autoCapitalize="none"
                                value={props.data.known_allergies_text}
                                onChangeText={text => props.setDataState('known_allergies_text', text)}
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
                                marginLeft: 10
                            }}
                        >
                            Any falls over the last 12 months? How were the falls managed?
                        </Text>
                        <RadioForm
                            radio_props={props.any_falls_over_months_check}
                            initial={-1}
                            formHorizontal={true}
                            labelHorizontal={true}
                            onPress={(value) => props.onAnyFallsMonthsChange(value)}
                            buttonColor="black"
                        />
                    </View>
                </View>

                {props.isAnyFallsOpen &&
                    <View style={styles.container}>
                        <View style={styles.colContainer}>
                            <TextInput
                                multiline={true}
                                numberOfLines={4}
                                style={{ ...styles.input, height: 100 }}
                                placeholder=""
                                placeholderTextColor="#333"
                                autoCapitalize="none"
                                value={props.data.known_allergies_text}
                                onChangeText={text => props.setDataState('known_allergies_text', text)}
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
                                marginLeft: 10
                            }}
                        >
                            Communication Needs – verbal, non-verbal? How does the client best communicate their wishes and needs? Are gestures used? Are certain words preferred over others? Is behaviour an indicator?
                        </Text>
                        <RadioForm
                            radio_props={props.communication_needs_check}
                            initial={-1}
                            formHorizontal={true}
                            labelHorizontal={true}
                            onPress={(value) => props.onCommunicationNeedChange(value)}
                            buttonColor="black"
                        />
                    </View>
                </View>

                {props.isCommunicationNeedsOpen &&
                    <View style={styles.container}>
                        <View style={styles.colContainer}>
                            <TextInput
                                multiline={true}
                                numberOfLines={4}
                                style={{ ...styles.input, height: 100 }}
                                placeholder=""
                                placeholderTextColor="#333"
                                autoCapitalize="none"
                                value={props.data.communication_needs_text}
                                onChangeText={text => props.setDataState('communication_needs_text', text)}
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
                                marginLeft: 10
                            }}
                        >
                            Sensory Impairment - does the client consider themselves to have an impairment? Is it registered? How does it impact their lives? How do they manage the impairment?
                        </Text>
                        <RadioForm
                            radio_props={props.data.sensor_imparement_check}
                            initial={-1}
                            formHorizontal={true}
                            labelHorizontal={true}
                            onPress={(value) => props.onSensoryImpairmentChange(value)}
                            buttonColor="black"
                        />
                    </View>
                </View>

                {props.data.isSensoryImpairmentOpen &&
                    <View style={styles.container}>
                        <View style={styles.colContainer}>
                            <TextInput
                                multiline={true}
                                numberOfLines={4}
                                style={{ ...styles.input, height: 100 }}
                                placeholder=""
                                placeholderTextColor="#333"
                                autoCapitalize="none"
                                value={props.data.visualy_impairment_text}
                                onChangeText={text => props.setDataState('visualy_impairment_text', text)}
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
                                marginLeft: 10
                            }}
                        >
                            Visual Impairment – does the client consider themselves to have an impairment? Is it registered? How does it impact their lives? How do they manage the impairment?
                        </Text>
                        <RadioForm
                            radio_props={props.data.visual_imparement_check}
                            initial={-1}
                            formHorizontal={true}
                            labelHorizontal={true}
                            onPress={(value) => props.onVisualImpairmentChange(value)}
                            buttonColor="black"
                        />
                    </View>
                </View>

                {props.data.isVisualyImpairmentOpen &&
                    <View style={styles.container}>
                        <View style={styles.colContainer}>
                            <TextInput
                                multiline={true}
                                numberOfLines={4}
                                style={{ ...styles.input, height: 100 }}
                                placeholder=""
                                placeholderTextColor="#333"
                                autoCapitalize="none"
                                value={props.data.visualy_impairment_text}
                                onChangeText={text => props.setDataState('visual_impairment_text', text)}
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
                                marginLeft: 10
                            }}
                        >
                            Hearing impairment– does the client consider themselves to have a impairment? Is it registered? How does it impact their lives? How do they manage the impairment?
                        </Text>
                        <RadioForm
                            radio_props={props.data.hearing_imparement_check}
                            initial={-1}
                            formHorizontal={true}
                            labelHorizontal={true}
                            onPress={(value) => props.onHearingImpairmentChange(value)}
                            buttonColor="black"
                        />
                    </View>
                </View>

                {props.data.isHearingImpairmentOpen &&
                    <View style={styles.container}>
                        <View style={styles.colContainer}>
                            <TextInput
                                multiline={true}
                                numberOfLines={4}
                                style={{ ...styles.input, height: 100 }}
                                placeholder=""
                                placeholderTextColor="#333"
                                autoCapitalize="none"
                                value={props.data.hearing_impairment_text}
                                onChangeText={text => props.setDataState('hearing_impairment_text', text)}
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
                                marginLeft: 10
                            }}
                        >
                            Continence – no issues? Single continence? Double incontinence? Occasional or frequent? Has continence care been provided (e.g. inco pads) – if not, please make referral to the GP or Single Point of Access
                        </Text>
                        <RadioForm
                            radio_props={props.data.continence_check}
                            initial={-1}
                            formHorizontal={true}
                            labelHorizontal={true}
                            onPress={(value) => props.onContinenceChange(value)}
                            buttonColor="black"
                        />
                    </View>
                </View>

                {props.data.isContinenceOpen &&
                    <View style={styles.container}>
                        <View style={styles.colContainer}>
                            <TextInput
                                multiline={true}
                                numberOfLines={4}
                                style={{ ...styles.input, height: 100 }}
                                placeholder=""
                                placeholderTextColor="#333"
                                autoCapitalize="none"
                                value={props.data.continence_text}
                                onChangeText={text => props.setDataState('continence_text', text)}
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
                                marginLeft: 10
                            }}
                        >
                            Mobility – Around the house – is there any equipment in situ? Is a referral required to Occupational Therapy. How does mobility around the house affect clients ability to complete activities of daily living?
                        </Text>
                        <RadioForm
                            radio_props={props.data.mobility_check}
                            initial={-1}
                            formHorizontal={true}
                            labelHorizontal={true}
                            onPress={(value) => props.onMobilityChange(value)}
                            buttonColor="black"
                        />
                    </View>
                </View>

                {props.data.isMobilityOpen &&
                    <View style={styles.container}>
                        <View style={styles.colContainer}>
                            <TextInput
                                multiline={true}
                                numberOfLines={4}
                                style={{ ...styles.input, height: 100 }}
                                placeholder=""
                                placeholderTextColor="#333"
                                autoCapitalize="none"
                                value={props.data.mobility_text}
                                onChangeText={text => props.setDataState('mobility_text', text)}
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
                                marginLeft: 10
                            }}
                        >
                            Mobility – Transfer – is there any equipment in situ? Is a referral required to Occupational Therapy. Do mobility concerns affect the clients ability to go outdoors?
                        </Text>
                        <RadioForm
                            radio_props={props.data.mobility_transfer_check}
                            initial={-1}
                            formHorizontal={true}
                            labelHorizontal={true}
                            onPress={(value) => props.onMobilityTransferChange(value)}
                            buttonColor="black"
                        />
                    </View>
                </View>

                {props.data.isMobilityTransferOpen &&
                    <View style={styles.container}>
                        <View style={styles.colContainer}>
                            <TextInput
                                multiline={true}
                                numberOfLines={4}
                                style={{ ...styles.input, height: 100 }}
                                placeholder=""
                                placeholderTextColor="#333"
                                autoCapitalize="none"
                                value={props.data.mobility_transfer_text}
                                onChangeText={text => props.setDataState('mobility_transfer_text', text)}
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
                                marginLeft: 10
                            }}
                        >
                            Transfers – (e.g. bed; chair; commode; bath; shower) is assistance of another needed? If so, how many in order to complete the task safely?
                        </Text>
                        <RadioForm
                            radio_props={props.data.transfer_check}
                            initial={-1}
                            formHorizontal={true}
                            labelHorizontal={true}
                            onPress={(value) => props.onTransferChange(value)}
                            buttonColor="black"
                        />
                    </View>
                </View>

                {props.data.isTransferOpen &&
                    <View style={styles.container}>
                        <View style={styles.colContainer}>
                            <TextInput
                                multiline={true}
                                numberOfLines={4}
                                style={{ ...styles.input, height: 100 }}
                                placeholder=""
                                placeholderTextColor="#333"
                                autoCapitalize="none"
                                value={props.data.transfer_text}
                                onChangeText={text => props.setDataState('transfer_text', text)}
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
                                marginLeft: 10
                            }}
                        >
                            Mental and Emotional Well-being – has client ever been known to Mental Health Services; had depression; confusion; wandering or difficulties with orientation or memory
                        </Text>
                        <RadioForm
                            radio_props={props.data.mental_check}
                            initial={-1}
                            formHorizontal={true}
                            labelHorizontal={true}
                            onPress={(value) => props.onMentalCheckChange(value)}
                            buttonColor="black"
                        />
                    </View>
                </View>

                {props.data.isMentalCheckOpen &&
                    <View style={styles.container}>
                        <View style={styles.colContainer}>
                            <TextInput
                                multiline={true}
                                numberOfLines={4}
                                style={{ ...styles.input, height: 100 }}
                                placeholder=""
                                placeholderTextColor="#333"
                                autoCapitalize="none"
                                value={props.data.mental_check_text}
                                onChangeText={text => props.setDataState('mental_check_text', text)}
                            />
                        </View>


                    </View>
                }

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
    }
}
export default ConflictofInterest
// export default (props) => {

// }



