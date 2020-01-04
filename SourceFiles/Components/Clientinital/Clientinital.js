import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Row,
  Button,
  Alert
} from 'react-native';
import PhoneInput from 'react-phone-number-input';
import CheckBox from 'react-native-check-box';
import axios from 'axios';


import InitialForm from './InitialForm'
import ClientDetails from './ClientDetails'
import NextofKinForm from './NextofKinForm'
import GPForm from './GPForm'
import DirectNurse from './DirectNurse'
import SocialWorker from './SocialWorker'
import CCGForm from './CCGForm'
import DayCentreForm from './DayCentreForm'
import AnyOtherProfessionalForm from './AnyOtherProfessionalForm'
import HousingContactForm from './HousingContactForm'
import ClientBackgroundForm from './ClientBackgroundForm'
import ConflictofInterestForm from './ConflictofInterest'

import DateTimePicker from '@react-native-community/datetimepicker'
import DatePickerModal from '../GeneralComponents/DatePickerModal'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class Clientinital extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: [
        ' Null',
        'Null',
        'Null',
        'Null',
        'Null',
        'Null',
        ' Null',
        'Null',
        'Null',
      ],
      widthArr: [40, 60, 80, 100, 120, 140, 160, 180, 200],
      tableHead2: [' Null', ' Null', ' Null', ' Null'],
      tableData2: [
        ['0', '0', '0', '0'],
        ['0', '0', '0', '0'],
        ['0', '0', '0', '0'],
        ['0', '0', '0', '0'],
      ],
      data: {
        start_date_of_support_package: new Date(),
        referral_from: "",
        date_of_completion_of_form: new Date(),
        client_surname: "",
        client_first_name: "",
        client_title: "",
        client_preferred_name: "",
        client_date_of_birth: new Date(),
        client_place_of_birth: "",
        client_gender: "",
        client_marital_status: "",
        client_religion: "",
        client_nhs_no: "",
        client_hospital_no: "",
        client_address: "",
        client_mobile: "",
        client_home_owner: false,
        client_living_with_others: false,
        client_housing_association_on: false,
        client_council_owned: false,
        client_sheltered_accommodation_on: false,
        nok_name: "",
        nok_relationship_to_client: "",
        nok_address: "",
        nok_mobile: "",
        gp_name: "",
        gp_address: "",
        gp_email: "",
        gp_tel: "",
        district_nurse_name: "",
        district_nurse_address: "",
        district_nurse_email: "",
        district_nurse_tel: "",
        social_worker_name: "",
        social_worker_address: "",
        social_worker_email: "",
        social_worker_tel: "",
        ccg_care_coordinator_name: "",
        ccg_care_coordinator_address: "",
        ccg_care_coordinator_email: "",
        ccg_care_coordinator_tel: "",
        day_centre_name: "",
        day_centre_address: "",
        day_centre_email: "",
        day_centre_tel: "",
        any_other_professionals_name_and_profession: "",
        any_other_professionals_email: "",
        any_other_professionals_tel: "",
        housing_contact_name: "",
        housing_contact_address: "",
        housing_contact_email: "",
        housing_contact_tel: "",
        first_other_person_name: "",
        sec_other_person_name: "",
        third_other_person_name: "",
        fourth_other_person_name: "",
        fifth_other_person_name: "",
        sixth_other_person_name: "",
        otherPeopleData: [{
          label: 'Dependent',
          value: "dependent",
        }, {
          label: '(Emergency) Key Holder',
          value: "(Emergency) Key Holder",
        }, {
          label: "Informal Carer",
          value: "Informal Carer"
        }],
        secondPeopleData: [{
          label: 'Dependent',
          value: "dependent",
        }, {
          label: '(Emergency) Key Holder',
          value: "(Emergency) Key Holder",
        }, {
          label: "Informal Carer",
          value: "Informal Carer"
        }],
        thirdPeopleData: [{
          label: 'Dependent',
          value: "dependent",
        }, {
          label: '(Emergency) Key Holder',
          value: "(Emergency) Key Holder",
        }, {
          label: "Informal Carer",
          value: "Informal Carer"
        }],
        fourthPeopleData: [{
          label: 'Dependent',
          value: "dependent",
        }, {
          label: '(Emergency) Key Holder',
          value: "(Emergency) Key Holder",
        }, {
          label: "Informal Carer",
          value: "Informal Carer"
        }],
        fifthPeopleData: [{
          label: 'Dependent',
          value: "dependent",
        }, {
          label: '(Emergency) Key Holder',
          value: "(Emergency) Key Holder",
        }, {
          label: "Informal Carer",
          value: "Informal Carer"
        }],
        sixthPeopleData: [{
          label: 'Dependent',
          value: "dependent",
        }, {
          label: '(Emergency) Key Holder',
          value: "(Emergency) Key Holder",
        }, {
          label: "Informal Carer",
          value: "Informal Carer"
        }],
        showEndDatePicker: false,
        showStartDatePicker: false,
        isStartDateSelected: false,
        isEndDateSelected: false,
        showDOBPicker: false,
        isDOBSelected: false
      },
    };
  }
  toggleExpand3 = () => {
    this.setState({ expanded3: !this.state.expanded3 });
  };

  toggleExpand4 = () => {
    this.setState({ expanded4: !this.state.expanded4 });
  };
  toggleExpand1 = () => {
    this.setState({ expanded1: !this.state.expanded1 });
  };
  toggleExpand2 = () => {
    this.setState({ expanded2: !this.state.expanded2 });
  };
  toggleExpand5 = () => {
    this.setState({ expanded5: !this.state.expanded5 });
  };

  onFirstButtonPress = data => this.setState({
    data: {
      ...this.state.data,
      otherPeopleData: data
    }
  })

  onSecondButtonPress = data => this.setState({
    data: {
      ...this.state.data,
      secondPeopleData: data
    }
  })

  onThirdButtonPress = data => this.setState({
    data: {
      ...this.state.data,
      thirdPeopleData: data
    }
  })

  onFourthButtonPress = data => this.setState({
    data: {
      ...this.state.data,
      fourthPeopleData: data
    }
  })

  onFifthButtonPress = data => this.setState({
    data: {
      ...this.state.data,
      fifthPeopleData: data
    }
  })

  onSixthButtonPress = data => this.setState({
    data: {
      ...this.state.data,
      sixthPeopleData: data
    }
  })

  setDataState = (key, value) => {
    this.setState({
      data: {
        ...this.state.data,
        [key]: value,
      }
    })
  }


  setStartDate = (event, date) => {
    const start_date_of_support_package = date || this.state.data.start_date_of_support_package;
    this.setState({
      data: {
        ...this.state.data,
        showStartDatePicker: Platform.OS === 'ios' ? true : false,
        start_date_of_support_package,
        isStartDateSelected: true
      }
    });
  }
  setEndDate = (event, date) => {
    const date_of_completion_of_form = date || this.state.data.date_of_completion_of_form;
    this.setState({
      data: {
        ...this.state.data,
        showEndDatePicker: Platform.OS === 'ios' ? true : false,
        date_of_completion_of_form,
        isEndDateSelected: true
      }
    });
  }

  setDOB = (event, date) => {
    const client_date_of_birth = date || this.state.data.client_date_of_birth
    this.setState({
      data: {
        ...this.state.data,
        showDOBPicker: Platform.OS === 'ios' ? true : false,
        client_date_of_birth,
        isDOBSelected: true
      }
    });
  }
  showStartDate = () => {
    this.setState({ data: { ...this.state.data, showStartDatePicker: true } })
  }
  showEndDate = () => {
    this.setState({ data: { ...this.state.data, showEndDatePicker: true } })
  }

  showDOBPicker = () => {
    this.setState({ data: { ...this.state.data, showDOBPicker: true } })    
  }

  onStartDateChange = (date) => {
    this.setState({
      data: {
        ...this.state.data,
        showStartDatePicker: false,
        start_date_of_support_package: date,
        isStartDateSelected: true
      }
    })
  }

  onEndDateChange = (date) => {
    this.setState({
      data: {
        ...this.state.data,
        showEndDatePicker: false,
        date_of_completion_of_form: date,
        isEndDateSelected: true
      }
    })
  }

  onDOBChange = (date) => {
    this.setState({
      data: {
        ...this.state.data,
        showDOBPicker: false,
        client_date_of_birth: date,
        isDOBSelected: true
      }
    })
  }

  saveData = async () => {
    try {
      const url = "http://192.241.130.199:3010/assessment-form";
      await axios.post(url, this.state.data);
      Alert.alert("Success", "Data saved successfully");
    } catch (err) {
      console.log(err);
    }
  };


  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView >
          <View style={styles.textContainer}>
            <Text
              style={{
                fontSize: 24,
                marginTop: 30,
                textAlign: 'center',
                fontSize: 40,
              }}>
              Client Inital Assesment Form
            </Text>
          </View>

          <InitialForm
            data={this.state.data}
            setDataState={this.setDataState}
            showStartDate={this.showStartDate}
            showEndDate={this.showEndDate}
            isStartDateSelected={this.state.data.isStartDateSelected}
            isEndDateselected={this.state.data.isEndDateSelected}
          />

          {/* <Text style={{marginTop: '10%'}}>Start Date of Support Package</Text>
          <TextInput
            style={styles.input5}
            placeholder=""
            placeholderTextColor="#333"
            autoCapitalize="none"
            value={this.state.data.start_date_of_support_package}
            onChangeText={text => this.setDataState('start_date_of_support_package', text)}
          />
          <Text style={{marginTop: '2%'}}>
            Referral from: Please state name of referrer and/or{'\n'}referring
            agency including contact details
          </Text>
          <TextInput
            style={styles.input5}
            placeholder=""
            placeholderTextColor="#333"
            autoCapitalize="none"
            value={this.state.data.referral_from}
            onChangeText={text => this.setDataState('referral_from', text)}
          />
          <Text style={{marginTop: '2%'}}>Date of completion of form:</Text>
          <TextInput
            style={styles.input5}
            placeholder=""
            placeholderTextColor="#333"
            autoCapitalize="none"
            value={this.state.data.date_of_completion_of_form}
            onChangeText={text => this.setDataState('date_of_completion_of_form', text)}
          /> */}

          <View>
            <Text
              style={{
                fontSize: 24,
                // marginTop: 30,
                fontSize: 25,
                alignSelf: 'center'
              }}>
              {'\n'}Client Personal Details{'\n'}
            </Text>

            <ClientDetails
              data={this.state.data}
              setDataState={this.setDataState}
              isDOBSelected={this.state.data.isDOBSelected}
              showDOBPicker={this.showDOBPicker}
            />

            <View>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ padding: 10, }}>Home Owner</Text>
                <CheckBox
                  style={{ borderColor: '#333', padding: 10 }}
                  onClick={() => {
                    this.setDataState('client_home_owner', !this.state.data.client_home_owner)
                  }}
                  isChecked={this.state.data.client_home_owner}
                  leftText={'CheckBox'}
                />

                <Text style={{ marginLeft: '4%', padding: 10 }}>
                  Living with{'\n'}Others
                </Text>
                <CheckBox
                  style={{ borderColor: '#333', padding: 10 }}
                  onClick={() => {
                    this.setDataState('client_living_with_others', !this.state.data.client_living_with_others)
                  }}
                  isChecked={this.state.data.client_living_with_others}
                  leftText={'CheckBox'}
                />

                <Text style={{ marginLeft: '4%', padding: 10 }}>
                  Household{'\n'}Association
                </Text>
                <CheckBox
                  style={{ borderColor: '#333', padding: 10 }}
                  onClick={() => {
                    this.setDataState('client_housing_association_on', !this.state.data.client_housing_association_on)
                  }}
                  isChecked={this.state.data.client_housing_association_on}
                  leftText={'CheckBox'}
                />
                <Text style={{ marginLeft: '4%', padding: 10 }}>
                  Council{'\n'}Owned
                </Text>
                <CheckBox
                  style={{ borderColor: '#333', padding: 10 }}
                  onClick={() => {
                    this.setDataState('client_council_owned', !this.state.data.client_council_owned)
                  }}
                  isChecked={this.state.data.client_council_owned}
                  leftText={'CheckBox'}
                />
                <Text style={{ marginLeft: '1%', padding: 10 }}>
                  Shelter{'\n'}Accomadation
                </Text>
                <CheckBox
                  style={{ borderColor: '#333', padding: 10 }}
                  onClick={() => {
                    this.setDataState('client_sheltered_accommodation_on', !this.state.data.client_sheltered_accommodation_on)
                  }}
                  isChecked={this.state.data.client_sheltered_accommodation_on}
                  leftText={'CheckBox'}
                />
              </View>
            </View>

            <Text
              style={{
                fontSize: 24,
                marginTop: 30,
                textAlign: 'center',
                fontSize: 25,
              }}>
              {'\n'}Next of Kin{'\n'}
            </Text>


            <NextofKinForm
              data={this.state.data}
              setDataState={this.setDataState}
            />



            <Text
              style={{
                fontSize: 24,
                marginTop: 30,
                textAlign: 'center',
                fontSize: 25,
              }}>
              {'\n'}Professional Involvements{'\n'}
            </Text>

            <View>
              <Text
                style={{
                  fontSize: 24,
                  marginTop: 20,
                  marginBottom: 10,
                  textAlign: 'center',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                GP
              </Text>

              <GPForm
                data={this.state.data}
                setDataState={this.setDataState}
              />

            </View>

            <View>
              <Text
                style={{
                  fontSize: 24,
                  marginTop: 20,
                  marginBottom: 10,
                  textAlign: 'center',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                District Nurse
              </Text>

              <DirectNurse
                data={this.state.data}
                setDataState={this.setDataState}
              />

            </View>

            <View>
              <Text
                style={{
                  fontSize: 24,
                  marginTop: 20,
                  marginBottom: 10,
                  textAlign: 'center',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Social Worker
              </Text>

              <SocialWorker
                data={this.state.data}
                setDataState={this.setDataState}
              />

            </View>

            <View>
              <Text
                style={{
                  fontSize: 24,
                  marginTop: 20,
                  marginBottom: 10,
                  textAlign: 'center',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                CCG Care Coordinator:
              </Text>

              <CCGForm
                data={this.state.data}
                setDataState={this.setDataState}
              />
            </View>

            <View>
              <Text
                style={{
                  fontSize: 24,
                  marginTop: 20,
                  marginBottom: 10,
                  textAlign: 'center',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Day Centre:
              </Text>

              <DayCentreForm
                data={this.state.data}
                setDataState={this.setDataState}
              />
              {/* <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={{marginTop: '3%'}}>Name</Text>
                <TextInput
                  style={styles.input5}
                  placeholder=""
                  placeholderTextColor="#333"
                  autoCapitalize="none"
                  value={this.state.data.day_centre_name}
                  onChangeText={text => this.setDataState('day_centre_name', text)}
                />
              </View>

              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={{marginTop: '3%'}}>Address</Text>
                <TextInput
                  style={styles.input5}
                  placeholder=""
                  placeholderTextColor="#333"
                  autoCapitalize="none"
                  value={this.state.data.day_centre_address}
                  onChangeText={text => this.setDataState('day_centre_address', text)}
                />
              </View>

              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={{marginTop: '3%'}}>Email</Text>
                <TextInput
                  style={styles.input5}
                  placeholder=""
                  placeholderTextColor="#333"
                  autoCapitalize="none"
                  value={this.state.data.day_centre_email}
                  onChangeText={text => this.setDataState('day_centre_email', text)}
                />
              </View>

              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={{marginTop: '3%'}}>Tel No:</Text>
                <TextInput
                  style={styles.input5}
                  placeholder=""
                  placeholderTextColor="#333"
                  autoCapitalize="none"
                  value={this.state.data.day_centre_tel}
                  onChangeText={text => this.setDataState('day_centre_tel', text)}
                />
              </View> */}
            </View>

            <View>
              <Text
                style={{
                  fontSize: 24,
                  marginTop: 20,
                  // marginBottom: 10,
                  textAlign: 'center',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Any Other professionals:
              </Text>

              <AnyOtherProfessionalForm
                data={this.state.data}
                setDataState={this.setDataState}
              />

            </View>

            <View>
              <Text
                style={{
                  fontSize: 24,
                  marginTop: 20,
                  // marginBottom: 10,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                Housing Contact
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  // marginTop: 20,
                  // marginBottom: 10,
                  textAlign: 'center',
                  // fontWeight: 'bold',
                }}>
                (required to gain consent for housing related issues or concerns, such as access, key safe, any adjustments etc.)
              </Text>

              <HousingContactForm
                data={this.state.data}
                setDataState={this.setDataState}
                otherPeopleData={this.state.data.otherPeopleData}
                secondPeopleData={this.state.data.secondPeopleData}
                thirdPeopleData={this.state.data.thirdPeopleData}
                fourthPeopleData={this.state.data.fourthPeopleData}
                fifthPeopleData={this.state.data.fifthPeopleData}
                sixthPeopleData={this.state.data.sixthPeopleData}
                onFirstButtonPress={this.onFirstButtonPress}
                onSecondButtonPress={this.onSecondButtonPress}
                onThirdButtonPress={this.onThirdButtonPress}
                onFourthButtonPress={this.onFourthButtonPress}
                onFifthButtonPress={this.onFifthButtonPress}
                onSixthButtonPress={this.onSixthButtonPress}
              />

            </View>

            <ClientBackgroundForm
              data={this.state.data}
              setDataState={this.setDataState}
            />


            <View>
              <Text
                style={{
                  fontSize: 24,
                  marginTop: 20,
                  // marginBottom: 10,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                Conflict of Interest
              </Text>

              <ConflictofInterestForm
                data={this.state.data}
                setDataState={this.setDataState}
              />
            </View>

            <View style={[{ margin: 20, backgroundColor: "red" }]}>
              <Button
                onPress={this.saveData}
                title="Save"
                color="#FF3D00"
              />
            </View>

          </View>
        </KeyboardAwareScrollView>
        {this.state.data.showStartDatePicker && Platform.OS !== 'ios' && <View style={styles.dateContainer}>
          <DateTimePicker
            value={this.state.data.start_date_of_support_package}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={(event, date) => {
              this.setState({ data: {...this.state.data, showStartDatePicker: false} })
              this.setStartDate(event, date)
            }}
            maximumDate={new Date()}
          />
        </View>}

        {this.state.data.showEndDatePicker && Platform.OS !== 'ios' && <View style={styles.dateContainer}>
          <DateTimePicker
            value={this.state.data.date_of_completion_of_form}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={(event, date) => {
              this.setState({ data: {...this.state.data, showEndDatePicker: false} })
              this.setEndDate(event, date)
            }}
          />
        </View>}

        {this.state.data.showDOBPicker && Platform.OS !== 'ios' && <View style={styles.dateContainer}>
          <DateTimePicker
            value={this.state.data.client_date_of_birth}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={(event, date) => {
              this.setState({ data: {...this.state.data, showDOBPicker: false} })
              this.setDOB(event, date)
            }}
          />
        </View>}

        {/* Date Picker Modal for IOS (start date) */}
        <DatePickerModal
          visible={Platform.OS === "ios" ? this.state.data.showStartDatePicker : false}
          date={this.state.data.start_date_of_support_package}
          onClose={() =>  this.setState({ data: {...this.state.data, showStartDatePicker: false} })}
          setDate={this.setStartDate}
          onChange={this.onStartDateChange}
          // maximumDate={new Date()}
        />

        {/* Date Picker Modal for IOS (end date) */}
        <DatePickerModal
          visible={Platform.OS === "ios" ? this.state.data.showEndDatePicker : false}
          date={this.state.data.date_of_completion_of_form}
          onClose={() => this.setState({ data: {...this.state.data, showEndDatePicker: false} })}
          setDate={this.setEndDate}
          onChange={this.onEndDateChange}
        />

        {/* DOB Picker for IOS */}
        <DatePickerModal
          visible={Platform.OS === "ios" ? this.state.data.showDOBPicker : false}
          date={this.state.data.client_date_of_birth}
          onClose={() => this.setState({ data: {...this.state.data, showDOBPicker: false} })}
          setDate={this.setDOB}
          onChange={this.onDOBChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    padding: 20,
    backgroundColor: '#ededed',
  },

  textContent: {
    color: '#333',
    fontWeight: '300',

    textAlign: 'center',
    marginTop: 30,
  },

  textContent1: {
    color: '#333',
    fontWeight: '200',
    textAlign: 'center',
    marginRight: 12,
    marginLeft: 12,
    marginBottom: 40,
  },

  input: {
    margin: 5,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 12,
    // padding: 20,
    borderRadius: 6,
    marginBottom: 10,
    borderWidth: 20,
    marginLeft: '2%',
    width: '30%',
    borderColor: '#d4d4d4',
    borderWidth: 1,
  },
  input2: {
    margin: 5,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 12,
    // padding: 20,
    borderRadius: 6,
    marginBottom: 10,
    borderWidth: 20,
    marginLeft: '2%',
    width: '30%',
    borderColor: '#d4d4d4',
    borderWidth: 1,
  },

  input4: {
    margin: 5,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 12,
    // padding: 20,
    borderRadius: 6,
    marginBottom: 10,
    borderWidth: 20,
    marginLeft: '1%',
    width: '30%',
    borderColor: '#d4d4d4',
    borderWidth: 1,
  },
  input3: {
    margin: 5,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 12,
    // padding: 20,
    borderRadius: 6,
    marginBottom: 10,
    borderWidth: 20,

    width: '30%',
    borderColor: '#d4d4d4',
    borderWidth: 1,
  },

  input5: {
    margin: 5,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 12,
    // padding: 20,
    borderRadius: 6,
    marginBottom: 10,
    borderWidth: 20,

    width: '60%',
    borderColor: '#d4d4d4',
    borderWidth: 1,
  },
});
