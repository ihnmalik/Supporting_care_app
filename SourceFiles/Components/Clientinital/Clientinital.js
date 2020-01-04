import React, {Component} from 'react';
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
import ClientDetails from './ClientDetails'

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
        start_date_of_support_package: "",
        referral_from: "",
        date_of_completion_of_form: "",
        client_surname: "",
        client_first_name: "",
        client_title: "",
        client_preferred_name: "",
        client_date_of_birth: "",
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
      },
    };
  }
  toggleExpand3 = () => {
    this.setState({expanded3: !this.state.expanded3});
  };

  toggleExpand4 = () => {
    this.setState({expanded4: !this.state.expanded4});
  };
  toggleExpand1 = () => {
    this.setState({expanded1: !this.state.expanded1});
  };
  toggleExpand2 = () => {
    this.setState({expanded2: !this.state.expanded2});
  };
  toggleExpand5 = () => {
    this.setState({expanded5: !this.state.expanded5});
  };

  setDataState = (key, value) => {
    this.setState({
      data: {
        ...this.state.data,
        [key]: value,
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

          <Text style={{marginTop: '10%'}}>Start Date of Support Package</Text>
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
          />

          <View>
            <Text
              style={{
                fontSize: 24,
                marginTop: 30,
                fontSize: 25,
              }}>
              {'\n'}Client Personal Details{'\n'}
            </Text>

            <ClientDetails 
              data={this.state.data}
              setDataState={this.setDataState}
            />


            {/* <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={{marginTop: '2%'}}>Sur Name</Text>
              <Text style={{marginLeft: '30%', marginTop: '2%'}}>
                First Name
              </Text>
              <Text style={{marginLeft: '20%', marginTop: '2%'}}>Title</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <TextInput
                style={styles.input2}
                placeholder=""
                placeholderTextColor="#333"
                autoCapitalize="none"
                value={this.state.data.client_surname}
                onChangeText={text => this.setDataState('client_surname', text)}
              />
              <TextInput
                style={styles.input}
                placeholder=""
                placeholderTextColor="#333"
                autoCapitalize="none"
                value={this.state.data.client_first_name}
                onChangeText={text => this.setDataState('client_first_name', text)}
              />

              <TextInput
                style={styles.input4}
                placeholder=""
                placeholderTextColor="#333"
                autoCapitalize="none"
                value={this.state.data.client_title}
                onChangeText={text => this.setDataState('client_title', text)}
              />
            </View> */}

            {/* <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={{marginTop: '2%'}}>Prefered Name</Text>
              <Text style={{marginLeft: '26%', marginTop: '2%'}}>
                Date Of Birth
              </Text>
              <Text style={{marginLeft: '18%', marginTop: '2%'}}>
                Place of Birth
              </Text>
            </View>

            <View style={{flex: 1, flexDirection: 'row'}}>
              <TextInput
                style={styles.input2}
                placeholder=""
                placeholderTextColor="#333"
                autoCapitalize="none"
                value={this.state.data.client_preferred_name}
                onChangeText={text => this.setDataState('client_preferred_name', text)}
              />
              <TextInput
                style={styles.input}
                placeholder=""
                placeholderTextColor="#333"
                autoCapitalize="none"
                value={this.state.data.client_date_of_birth}
                onChangeText={text => this.setDataState('client_date_of_birth', text)}
              />

              <TextInput
                style={styles.input4}
                placeholder=""
                placeholderTextColor="#333"
                autoCapitalize="none"
                value={this.state.data.client_place_of_birth}
                onChangeText={text => this.setDataState('client_place_of_birth', text)}
              />
            </View> */}

            {/* <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={{marginTop: '2%'}}>Gender</Text>
              <Text style={{marginLeft: '32%', marginTop: '2%'}}>
                Marital Status
              </Text>
              <Text style={{marginLeft: '17%', marginTop: '2%'}}>
                Hospital NO.
              </Text>
            </View> */}

            {/* <View style={{flex: 1, flexDirection: 'row'}}>
              <TextInput
                style={styles.input2}
                placeholder=""
                placeholderTextColor="#333"
                autoCapitalize="none"
                value={this.state.data.client_gender}
                onChangeText={text => this.setDataState('client_gender', text)}
              />
              <TextInput
                style={styles.input}
                placeholder=""
                placeholderTextColor="#333"
                autoCapitalize="none"
                value={this.state.data.client_marital_status}
                onChangeText={text => this.setDataState('client_marital_status', text)}
              />
              <TextInput
                style={styles.input4}
                placeholder=""
                placeholderTextColor="#333"
                autoCapitalize="none"
                value={this.state.data.client_hospital_no}
                onChangeText={text => this.setDataState('client_hospital_no', text)}
              />
            </View> */}
            {/* <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={{marginTop: '2%'}}>Religon</Text>
              <Text style={{marginLeft: '33%', marginTop: '2%'}}>NHS No.</Text>
            </View> */}

            {/* <View style={{flex: 1, flexDirection: 'row'}}>
              <TextInput
                style={styles.input2}
                placeholder=""
                placeholderTextColor="#333"
                autoCapitalize="none"
                value={this.state.data.client_religion}
                onChangeText={text => this.setDataState('client_religion', text)}
              />
              <TextInput
                style={styles.input}
                placeholder=""
                placeholderTextColor="#333"
                autoCapitalize="none"
                value={this.state.data.client_nhs_no}
                onChangeText={text => this.setDataState('client_nhs_no', text)}
              />
            </View> */}

            <View>
              {/* <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={{marginTop: '2%'}}>
                  {'\n'}
                  {'\n'}Address
                </Text>
                <Text style={{marginLeft: '40%', marginTop: '2%'}}>
                  {'\n'}
                  {'\n'}Tel Mobile
                </Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <TextInput
                  style={styles.input3}
                  placeholder=""
                  placeholderTextColor="#333"
                  autoCapitalize="none"
                  value={this.state.data.client_address}
                  onChangeText={text => this.setDataState('client_address', text)}
                />
                <TextInput
                  style={styles.input2}
                  placeholder=""
                  placeholderTextColor="#333"
                  autoCapitalize="none"
                  value={this.state.data.client_mobile}
                  onChangeText={text => this.setDataState('client_mobile', text)}
                />
              </View> */}

              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{padding: 10}}>Home Owner</Text>
                <CheckBox
                  style={{borderColor: '#333', padding: 10}}
                  onClick={() => {
                    this.setDataState('client_home_owner', !this.state.data.client_home_owner)
                  }}
                  isChecked={this.state.data.client_home_owner}
                  leftText={'CheckBox'}
                />

                <Text style={{marginLeft: '4%', padding: 10}}>
                  Living with{'\n'}Others
                </Text>
                <CheckBox
                  style={{borderColor: '#333', padding: 10}}
                  onClick={() => {
                    this.setDataState('client_living_with_others', !this.state.data.client_living_with_others)
                  }}
                  isChecked={this.state.data.client_living_with_others}
                  leftText={'CheckBox'}
                />

                <Text style={{marginLeft: '4%', padding: 10}}>
                  Household{'\n'}Association
                </Text>
                <CheckBox
                  style={{borderColor: '#333', padding: 10}}
                  onClick={() => {
                    this.setDataState('client_housing_association_on', !this.state.data.client_housing_association_on)
                  }}
                  isChecked={this.state.data.client_housing_association_on}
                  leftText={'CheckBox'}
                />
                <Text style={{marginLeft: '4%', padding: 10}}>
                  Council{'\n'}Owned
                </Text>
                <CheckBox
                  style={{borderColor: '#333', padding: 10}}
                  onClick={() => {
                    this.setDataState('client_council_owned', !this.state.data.client_council_owned)
                  }}
                  isChecked={this.state.data.client_council_owned}
                  leftText={'CheckBox'}
                />
                <Text style={{marginLeft: '1%', padding: 10}}>
                  Shelter{'\n'}Accomadation
                </Text>
                <CheckBox
                  style={{borderColor: '#333', padding: 10}}
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
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={{marginTop: '2%'}}>Name</Text>
              <Text style={{marginLeft: '30%', marginTop: '2%'}}>
                Relationship to Client
              </Text>
            </View>

            <View style={{flex: 1, flexDirection: 'row'}}>
              <TextInput
                style={styles.input2}
                placeholder=""
                placeholderTextColor="#333"
                autoCapitalize="none"
                value={this.state.data.nok_name}
                onChangeText={text => this.setDataState('nok_name', text)}
              />
              <TextInput
                style={styles.input5}
                placeholder=""
                placeholderTextColor="#333"
                autoCapitalize="none"
                value={this.state.data.nok_relationship_to_client}
                onChangeText={text => this.setDataState('nok_relationship_to_client', text)}
              />
            </View>

            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={{marginLeft: '6%', marginTop: '2%'}}>
                NoK Address:
              </Text>
              <Text style={{marginLeft: '16%', marginTop: '2%'}}>
                NoK Mobile:
              </Text>
            </View>

            <View style={{flex: 1, flexDirection: 'row'}}>
              <TextInput
                style={styles.input2}
                placeholder=""
                placeholderTextColor="#333"
                autoCapitalize="none"
                value={this.state.data.nok_address}
                onChangeText={text => this.setDataState('nok_address', text)}
              />
              <TextInput
                style={styles.input5}
                placeholder=""
                placeholderTextColor="#333"
                autoCapitalize="none"
                value={this.state.data.nok_mobile}
                onChangeText={text => this.setDataState('nok_mobile', text)}
              />
            </View>

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
                GP:{' '}
              </Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={{marginTop: '3%'}}>Name</Text>
                <TextInput
                  style={styles.input5}
                  placeholder=""
                  placeholderTextColor="#333"
                  autoCapitalize="none"
                  value={this.state.data.gp_name}
                  onChangeText={text => this.setDataState('gp_name', text)}
                />
              </View>

              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={{marginTop: '3%'}}>Address</Text>
                <TextInput
                  style={styles.input5}
                  placeholder=""
                  placeholderTextColor="#333"
                  autoCapitalize="none"
                  value={this.state.data.gp_address}
                  onChangeText={text => this.setDataState('gp_address', text)}
                />
              </View>

              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={{marginTop: '3%'}}>Email</Text>
                <TextInput
                  style={styles.input5}
                  placeholder=""
                  placeholderTextColor="#333"
                  autoCapitalize="none"
                  value={this.state.data.gp_email}
                  onChangeText={text => this.setDataState('gp_email', text)}
                />
              </View>

              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={{marginTop: '3%'}}>Tel No:</Text>
                <TextInput
                  style={styles.input5}
                  placeholder=""
                  placeholderTextColor="#333"
                  autoCapitalize="none"
                  value={this.state.data.gp_tel}
                  onChangeText={text => this.setDataState('gp_tel', text)}
                />
              </View>
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
                District Nurse:
              </Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={{marginTop: '3%'}}>Name</Text>
                <TextInput
                  style={styles.input5}
                  placeholder=""
                  placeholderTextColor="#333"
                  autoCapitalize="none"
                  value={this.state.data.district_nurse_name}
                  onChangeText={text => this.setDataState('district_nurse_name', text)}
                />
              </View>

              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={{marginTop: '3%'}}>Address</Text>
                <TextInput
                  style={styles.input5}
                  placeholder=""
                  placeholderTextColor="#333"
                  autoCapitalize="none"
                  value={this.state.data.district_nurse_address}
                  onChangeText={text => this.setDataState('district_nurse_address', text)}
                />
              </View>

              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={{marginTop: '3%'}}>Email</Text>
                <TextInput
                  style={styles.input5}
                  placeholder=""
                  placeholderTextColor="#333"
                  autoCapitalize="none"
                  value={this.state.data.district_nurse_email}
                  onChangeText={text => this.setDataState('district_nurse_email', text)}
                />
              </View>

              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={{marginTop: '3%'}}>Tel No:</Text>
                <TextInput
                  style={styles.input5}
                  placeholder=""
                  placeholderTextColor="#333"
                  autoCapitalize="none"
                  value={this.state.data.district_nurse_tel}
                  onChangeText={text => this.setDataState('district_nurse_tel', text)}
                />
              </View>
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
                Social Worker:
              </Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={{marginTop: '3%'}}>Name</Text>
                <TextInput
                  style={styles.input5}
                  placeholder=""
                  placeholderTextColor="#333"
                  autoCapitalize="none"
                  value={this.state.data.social_worker_name}
                  onChangeText={text => this.setDataState('social_worker_name', text)}
                />
              </View>

              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={{marginTop: '3%'}}>Address</Text>
                <TextInput
                  style={styles.input5}
                  placeholder=""
                  placeholderTextColor="#333"
                  autoCapitalize="none"
                  value={this.state.data.social_worker_address}
                  onChangeText={text => this.setDataState('social_worker_address', text)}
                />
              </View>

              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={{marginTop: '3%'}}>Email</Text>
                <TextInput
                  style={styles.input5}
                  placeholder=""
                  placeholderTextColor="#333"
                  autoCapitalize="none"
                  value={this.state.data.social_worker_email}
                  onChangeText={text => this.setDataState('social_worker_email', text)}
                />
              </View>

              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={{marginTop: '3%'}}>Tel No:</Text>
                <TextInput
                  style={styles.input5}
                  placeholder=""
                  placeholderTextColor="#333"
                  autoCapitalize="none"
                  value={this.state.data.social_worker_tel}
                  onChangeText={text => this.setDataState('social_worker_tel', text)}
                />
              </View>
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
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={{marginTop: '3%'}}>Name</Text>
                <TextInput
                  style={styles.input5}
                  placeholder=""
                  placeholderTextColor="#333"
                  autoCapitalize="none"
                  value={this.state.data.ccg_care_coordinator_name}
                  onChangeText={text => this.setDataState('ccg_care_coordinator_name', text)}
                />
              </View>

              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={{marginTop: '3%'}}>Address</Text>
                <TextInput
                  style={styles.input5}
                  placeholder=""
                  placeholderTextColor="#333"
                  autoCapitalize="none"
                  value={this.state.data.ccg_care_coordinator_address}
                  onChangeText={text => this.setDataState('ccg_care_coordinator_address', text)}
                />
              </View>

              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={{marginTop: '3%'}}>Email</Text>
                <TextInput
                  style={styles.input5}
                  placeholder=""
                  placeholderTextColor="#333"
                  autoCapitalize="none"
                  value={this.state.data.ccg_care_coordinator_email}
                  onChangeText={text => this.setDataState('ccg_care_coordinator_email', text)}
                />
              </View>

              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={{marginTop: '3%'}}>Tel No:</Text>
                <TextInput
                  style={styles.input5}
                  placeholder=""
                  placeholderTextColor="#333"
                  autoCapitalize="none"
                  value={this.state.data.ccg_care_coordinator_tel}
                  onChangeText={text => this.setDataState('ccg_care_coordinator_tel', text)}
                />
              </View>
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
              <View style={{flex: 1, flexDirection: 'row'}}>
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
              </View>
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
                Any Other professionals:
              </Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={{marginTop: '3%'}}>Name and Profession</Text>
                <TextInput
                  style={styles.input5}
                  placeholder=""
                  placeholderTextColor="#333"
                  autoCapitalize="none"
                  value={this.state.data.any_other_professionals_name_and_profession}
                  onChangeText={text => this.setDataState('any_other_professionals_name_and_profession', text)}
                />
              </View>

              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={{marginTop: '3%'}}>Email</Text>
                <TextInput
                  style={styles.input5}
                  placeholder=""
                  placeholderTextColor="#333"
                  autoCapitalize="none"
                  value={this.state.data.any_other_professionals_email}
                  onChangeText={text => this.setDataState('any_other_professionals_email', text)}
                />
              </View>

              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={{marginTop: '3%'}}>Telphone</Text>
                <TextInput
                  style={styles.input5}
                  placeholder=""
                  placeholderTextColor="#333"
                  autoCapitalize="none"
                  value={this.state.data.any_other_professionals_tel}
                  onChangeText={text => this.setDataState('any_other_professionals_tel', text)}
                />
              </View>

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
