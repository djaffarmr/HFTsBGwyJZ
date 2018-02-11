import React, { Component } from 'react';
import { View,
         Text,
         Image,
         FlatList,
         Dimensions } from 'react-native';

import axios from 'axios';
import { Icon } from 'react-native-elements';

import { Toolbar,
         CardItem,
         Button } from '../components/';

import { color_primary,
         silver,
         mine_shaft } from '../styles/Palette';

import { fire } from '../../App';

const profil_json = 'https://api.myjson.com/bins/1eem2d';
const {height, width} = Dimensions.get('window');

export default class Profil extends Component {

  static navigationOptions = {
    tabBarLabel: '5'
  }

  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    this.onGETRequest();
  }

  onGETRequest() {
    axios.get(profil_json)
      .then(response => {
        this.setState({ data: response.data })
      })
      .catch(error => {
        console.log('Please check your internet connection.')
      });
  }

  render() {
    return(
      <View style={{ flex: 1 }}>
        <Toolbar toolbarTitle={ 'Profil' } />
        <View>
          <FlatList
            data={this.state.data}
            renderItem={({item}) => (
              <View>

                {/* pic */}
                <View
                  style={{
                    height: 175,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#7b1fa2'
                  }}>
                  <Image
                    style={{
                      height: 100,
                      width: 100,
                      borderRadius: 50,
                      borderWidth: 1,
                      borderColor: color_primary
                    }}
                    resizeMode='cover'
                    source={{ uri: item.pic }} />
                </View>

                {/* info card */}
                <View
                  style={{
                    height: 175,
                    backgroundColor: 'white',
                    borderRadius: 4,
                    borderColor: 'transparent',
                    borderWidth: 1,
                    marginRight: 16,
                    marginLeft: 16,
                    padding: 16,
                    top: -16,
                    alignItems: 'center'
                  }}>

                  {/* name */}
                  <Text
                    style={{
                      color: mine_shaft,
                      fontWeight: 'bold',
                      fontSize: 16,
                    }}>
                    { item.name }
                  </Text>

                  {/* rank and title */}
                  <View
                    style={{
                      flexDirection: 'row',
                      marginBottom: 8
                    }}>
                    <Text>{ `${item.rank} ${item.title}` }</Text>
                  </View>

                  {/* icons */}
                  <View
                    style={{
                      flexDirection: 'row',
                      borderTopWidth: 1,
                      borderBottomWidth: 1,
                      borderColor: silver,
                      justifyContent: 'space-between',
                      padding: 8,
                      marginBottom: 8
                    }}>
                    <Icon
                      name = 'like'
                      type = 'evilicon'
                      size = { 40 }
                      color = { mine_shaft } />
                    <Icon
                      name = 'comment'
                      type = 'evilicon'
                      size = { 40 }
                      color = { mine_shaft } />
                    <Icon
                      name = 'user'
                      type = 'evilicon'
                      size = { 40 }
                      color = { mine_shaft } />
                  </View>

                  {/* bio */}
                  <View>
                    <Text
                      style={{
                        fontSize: 15,
                        fontStyle: 'italic'
                      }}>
                      { item.bio }
                    </Text>
                  </View>
                </View>

                {/* info card */}
                <View
                  style={{
                    height: 175,
                    backgroundColor: 'white',
                    borderRadius: 4,
                    borderColor: 'transparent',
                    borderWidth: 1,
                    marginRight: 16,
                    marginLeft: 16,
                    padding: 16,
                    top: -10
                  }}>

                  {/* email */}
                  <View style={{ marginBottom: 8 }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 16
                      }}>
                      EMAIL
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        marginLeft: 8
                      }}>{ item.email }</Text>
                  </View>

                  {/* phone */}
                  <View style={{ marginBottom: 8 }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 16
                      }}>
                      PHONE
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        marginLeft: 8
                      }}>{ item.phone }</Text>
                  </View>

                  {/* tombol keluar */}
                  <Button onPress={() => fire.auth().signOut()}>
                    Keluar
                  </Button>
                </View>
              </View>
            )}
            keyExtractor={ item => item.id } />
        </View>
      </View>
    );
  }
}
