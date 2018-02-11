import React, { Component } from 'react';
import { View,
         Text,
         Image,
         FlatList } from 'react-native';

import axios from 'axios';

import { Toolbar,
         Card,
         Button } from '../components/';

import { color_primary,
         white,
         mine_shaft } from '../styles/Palette';

const notifikasi_json = 'https://api.myjson.com/bins/1dyg75';
const url = 'https://api.mainapi.net/smsnotification/1.0.0/messages';
const header = {
  'Authorization': 'Bearer cf6ee88a4f0186acec773ba609684a1f',
  'Accept': 'application/json',
  'Content-Type': 'application/x-www-form-urlencoded'
}

const data = {
  'msisdn': '085333226989',
  'content': 'Pertandingan di Cipedes Futsal Arena pada Jum\'at 2 Maret.'
}

export default class Notifikasi extends Component {

  static navigationOptions = {
    tabBarLabel: '4'
  }

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.onGETRequest();
  }

  onGETRequest() {
    axios.get(notifikasi_json)
      .then(response => {
        this.setState({ data: response.data })
      })
      .catch(error => {
        console.log('Please check your internet connection.')
      });
  }

  onPOSTRequest() {
    axios({
      method: 'post',
      url: 'https://api.mainapi.net/smsnotification/1.0.0/messages',
      headers: {
        'Authorization': 'Bearer cf6ee88a4f0186acec773ba609684a1f',
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      msisdn: '085333226989',
      content: 'Pertandingan di Cipedes Futsal Arena pada Jum\'at 2 Maret.'
    })
      .then((response ) => {
        console.log('response: ' + response.data)
      })
      .catch(error => {
        console.log('Please check your internet connection.')
      });
  }

  render() {

    const { screen, content } = styles;

    return(
      <View style = { screen }>
        <Toolbar toolbarTitle = { 'Notifikasi' } />
        <View style = { content }>
          <FlatList
            data = { this.state.data }
            renderItem = {({ item }) => (
              <Card>
                <View
                  style = {{
                    padding: 8,
                    justifyContent: 'flex-start',
                    flexDirection: 'row',
                    position: 'relative',
                    backgroundColor: white
                  }}>

                  <View style = {{
                    height: 40,
                    width: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 8
                  }}>
                    <Image
                      style = {{
                        height: 40,
                        width: 40,
                        borderRadius: 20,
                        borderWidth: 1,
                        borderColor: color_primary
                      }}
                      resizeMode = 'cover'
                      source = {{ uri: item.thumbnail_img }} />
                  </View>

                  <View
                    style = {{
                      flex: 4,
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center'
                    }}>
                    <Text style = {{ color: mine_shaft }}>
                      { `${item.name} ${item.message} ${item.created_at}` }
                    </Text>
                  </View>

                  <View style = {{
                    flex: 1,
                    height: 40,
                    width: 40,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>

                  { item.message_img === null ?
                    <View
                      style = {{
                        flexDirection: 'row',
                        justifyContent: 'flex-start'
                      }}>
                      <Button
                        onPress = { this.onPOSTRequest.bind(this) }>
                        Ping
                      </Button>
                    </View> :
                    <Image
                      style = {{
                        height: 40,
                        width: 40
                      }}
                      resizeMode = 'cover'
                      source = {{ uri: item.message_img }} />
                  }
                  </View>
                </View>
              </Card>
            )}
            keyExtractor = { item => item.id } />
        </View>
      </View>
    );
  }
}

const styles = {
  screen: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: 2,
    paddingBottom: 2
  }
}
