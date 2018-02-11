import React, { Component } from 'react';
import { View,
         Text,
         Picker,
         ScrollView,
         Dimensions } from 'react-native';

import { Icon } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import Modal from "react-native-modal";
import RadioForm,
      { RadioButton,
        RadioButtonInput,
        RadioButtonLabel } from 'react-native-simple-radio-button';

import { Toolbar, Button } from '../components/';

import { color_primary,
         transparent,
         white,
         silver,
         mine_shaft } from '../styles/Palette';

const {height, width} = Dimensions.get('window');
const width_40 = width * .4;
const radio_props = [
  {label: 'Cash', value: 0},
  {label: 'Transfer Bank', value: 1},
  {label: 'TMoney', value: 2}
]

export default class Pertandingan extends Component {

  static navigationOptions = {
    tabBarLabel: '3'
  }

  constructor() {
    super();
    this.state = {
      isModalVisible: false,
      kota: '',
      namaLap: '',
      tanggal: '2018-02-11',
      jamMulai: '17:00',
      jamAkhir: '18:00',
      pemain: '',
      jenislap: '',
      harga: 'Rp 200.000',
      value: 0
    }
  }

  onLapanganChange(value) {
    switch(value) {
      case 0:
        this.setState({ harga: 'Rp 200.000' });
        break;
      case 1:
        this.setState({ harga: 'Rp 150.000' });
        break;
      case 2:
        this.setState({ harga: 'Rp 100.000' });
        break;
      case 3:
        this.setState({ harga: 'Rp 80.000' });
        break;
      default:
        this.setState({ harga: 'null' });
    }
  }

  onToggleModal() {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  render() {

    const { screen, content } = styles;

    return(
      <View style = { screen }>
        <Toolbar toolbarTitle = { 'Buat Pertandingan' } />

        <ScrollView contentContainerStyle = { content }>
          {/*KOTA*/}
          <Text>Kota</Text>
          <View
            style = {{
              height: 40,
              borderColor: silver,
              borderWidth: 1,
              borderRadius: 4,
              justifyContent: 'center',
              marginBottom: 8 }}>
            <Picker
              selectedValue = { this.state.kota }
              onValueChange = {(value) => this.setState({kota: value})}>
              <Picker.Item
                label = 'Bandung'
                value = { 0 } />
              <Picker.Item
                label = 'Jakarta'
                value = { 1 } />
              <Picker.Item
                label = 'Bogor'
                value = { 2 } />
              <Picker.Item
                label = 'Depok'
                value = { 3 } />
              <Picker.Item
                label = 'Tangerang'
                value = { 4 } />
              <Picker.Item
                label = 'Bekasi'
                value = { 5 } />
            </Picker>
          </View>

          {/*NAMA LAPANGAN*/}
          <Text>Nama Lapangan</Text>
          <View
            style = {{
              height: 40,
              borderColor: silver,
              borderWidth: 1,
              borderRadius: 4,
              justifyContent: 'center',
              marginBottom: 8 }}>
            <Picker
              selectedValue = { this.state.namaLap }
              onValueChange = {(value) => this.setState({ namaLap: value })}>
              <Picker.Item
                label = 'Cipedes Futsal Arena'
                value = { 0 } />
              <Picker.Item
                label = 'YPKP Futsal Arena'
                value = { 1 } />
              <Picker.Item
                label = 'Planet Futsal'
                value = { 2 } />
              <Picker.Item
                label = 'Parahyangan Futsal Hall'
                value = { 3 } />
              <Picker.Item
                label = 'Queen Futsal'
                value = { 4 } />
              <Picker.Item
                label = 'Futsal Shakti Taridi'
                value = { 5 } />
            </Picker>
          </View>

          {/*TANGGAL PERTANDINGAN*/}
          <Text>Tanggal Pertandingan</Text>
          <DatePicker
            style = {{
              width: width,
              marginBottom: 8 }}
            date = { this.state.tanggal }
            mode = 'time'
            format = 'YYYY-MM-DD'
            minDate = '2018-01-01'
            maxDate = '2018-12-31'
            confirmBtnText = 'Ok'
            cancelBtnText = 'Batal'
            onDateChange = {(date) => {this.setState({ tanggal: date })}}
            customStyles = {{
              dateInput: {
                paddingLeft: 8,
                alignItems: 'flex-start',
                borderRadius: 4
              },
              dateText: {
                fontSize: 15
              },
              dateTouchBody: {
                borderRadius: 4
              }
            }} />

          <Text>Jam Pertandingan</Text>
          <View
            style = {{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 8 }}>
            <DatePicker
              style = {{
                alignItems: 'flex-start',
                width: width_40 }}
              date = { this.state.jamMulai }
              mode = 'time'
              is24Hour = { true }
              showIcon = { false }
              confirmBtnText = 'Ok'
              cancelBtnText = 'Batal'
              onDateChange = {(mulai) => {this.setState({ jamMulai: mulai })}}
              customStyles = {{
                dateInput: {
                  paddingLeft: 8,
                  alignItems: 'flex-start',
                  borderRadius: 4
                },
                dateText: {
                  fontSize: 15
                },
                dateTouchBody: {
                  borderRadius: 4
                }
              }} />

            <Icon
              name = 'chevron-right'
              type = 'evilicon'
              size = { 32 }
              color = { mine_shaft } />

            <DatePicker
                style = {{ width: width_40 }}
                date = { this.state.jamAkhir }
                mode = 'time'
                is24Hour = { true }
                showIcon = { false }
                confirmBtnText = 'Ok'
                cancelBtnText = 'Batal'
                onDateChange = {(akhir) => {this.setState({ jamAkhir: akhir })}}
                customStyles = {{
                  dateInput: {
                    paddingLeft: 8,
                    alignItems: 'flex-start',
                    borderRadius: 4
                  },
                  dateText: {
                    fontSize: 15
                  },
                  dateTouchBody: {
                    borderRadius: 4
                  }
                }} />
          </View>

          {/*JUMLAH PEMAIN*/}
          <Text>Jumlah Pemain</Text>
          <View
            style = {{
              height: 40,
              borderColor: silver,
              borderWidth: 1,
              borderRadius: 4,
              justifyContent: 'center',
              marginBottom: 8 }}>
            <Picker
              selectedValue = { this.state.pemain }
              onValueChange = {(value) => this.setState({pemain: value})}>
              <Picker.Item
                label = '10'
                value = { 0 } />
              <Picker.Item
                label = '12'
                value = { 1 } />
              <Picker.Item
                label = '14'
                value = { 2 } />
              <Picker.Item
                label = '16'
                value = { 3 } />
            </Picker>
          </View>

          {/*JENIS LAPANGAN*/}
          <Text>Jenis Lapangan</Text>
          <View
            style = {{
              height: 40,
              borderColor: silver,
              borderWidth: 1,
              borderRadius: 4,
              justifyContent: 'center',
              marginBottom: 8
            }}>
              <Picker
                selectedValue = { this.state.jenislap }
                onValueChange = {(value) => {
                  this.setState({jenislap: value})
                  this.onLapanganChange(value)
                }}>
                <Picker.Item
                  label = 'Parquette'
                  value = { 0 } />
                <Picker.Item
                  label = 'Vynil'
                  value = { 1 } />
                <Picker.Item
                  label = 'Rumput Sintetis'
                  value = { 2 } />
                <Picker.Item
                  label = 'Semen'
                  value = { 3 } />
              </Picker>
          </View>

          {/*TOTAL HARGA*/}
          <View
            style = {{
              height: 100,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Text>Total Harga</Text>
            <Text
              style = {{
                fontSize: 24,
                fontWeight: 'bold'
              }}>
              { this.state.harga }
            </Text>
          </View>
        </ScrollView>

        {/*BUAT PERTANDINGAN*/}
        <View
          style = {{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            margin: 4
          }}>
          <Button onPress={() => this.onToggleModal()}>
            Buat Pertandingan
          </Button>
        </View>

        <Modal isVisible={this.state.isModalVisible}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 4,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                fontWeight: 'bold'
              }}>
              Pilih Metode Pembayaran
            </Text>
            <View
              style={{
                margin: 8
              }}>
              <RadioForm
                radio_props={radio_props}
                initial={0}
                animation={true}
                formHorizontal={true}
                onPress={(value) => {this.setState({value:value})}}
              />
            </View>
            <View
              style = {{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                margin: 4
              }}>
              <Button onPress={() => this.onToggleModal()}>
                Ok
              </Button>
            </View>
          </View>
        </Modal>

      </View>
    );
  }
}

const styles = {
  screen: {
    flex: 1,
    backgroundColor: white
  },
  content: {
    padding: 4
  }
}
