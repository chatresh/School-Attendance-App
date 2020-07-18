import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,Button} from 'react-native';
import db from '../config';

var attendanceRef, attendance;
var a1,
  a2,
  a3,
  a4,
  a5;

export default class Total extends React.Component {
  constructor() {
    super();
    this.state = {
      a1: '',
      a2: '',
      a3: '',
      a4: '',
      a5: ',',
    };
  }

  goBack = () => {
    this.props.navigation.navigate('BackAttendance');
  };
   
  registeringAttendance=()=>{
    this.setState({
      a1: a1,
      a2: a2,
      a3: a3,
      a4: a4,
      a5: a5,
    });
  }

  componentDidMount(){
    this.registeringAttendance();
  }
  
  getAttendance = () => {
    attendanceRef = db.ref('attendance'); 
    attendanceRef.on('value', (data) => {
      attendance = data.val();
    });
    a1 = attendance.asif;
    a2 = attendance.chatresh;
    a3 = attendance.gnanesh;
    a4 = attendance.himacharan;
    a5 = attendance.yogesh;
  };
   
  render() {
    return (
      <View style={{ marginTop: 25, marginLeft: 30 }}>
        {this.getAttendance()}
  <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Asif: {a1}</Text>
  <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Chatresh : {a2}</Text>
  <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Chatresh: {a3}</Text>
  <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Himacharan: {a4}</Text>
  <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Yogesh: {a5}</Text>
   <Button title="attend the stundents again" onPress={this.goBack}/>
      </View>
    );
  }
}
