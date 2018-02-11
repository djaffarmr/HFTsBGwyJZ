import React, { Component } from 'react';
import { View,
         Text,
         Image,
         FlatList,
         TouchableHighlight } from 'react-native';

import axios from 'axios';
import { Icon } from 'react-native-elements';

import { Toolbar,
         Card,
         CardItem,
         Button } from '../components/';

import { color_primary,
         transparent,
         white,
         silver,
         mine_shaft } from '../styles/Palette';

const beranda_json = 'https://api.myjson.com/bins/zwmbl';

export default class Beranda extends Component {

  static navigationOptions = {
    tabBarLabel: '1'
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
    axios.get(beranda_json)
      .then(response => {
        this.setState({ data: response.data })
      })
      .catch(error => {
        console.log('Please check your internet connection.')
      });
  }

  render() {

    const { screen,
            content,
            thumbnailContainer,
            thumbnail,
            userContainer,
            name,
            imageContent } = styles;

    return(
      <View style = { screen }>
        <Toolbar toolbarTitle = { 'Beranda' }/>
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
                    position: 'relative'
                  }}>
                  <View style = { thumbnailContainer }>
                    <Image
                      style = { thumbnail }
                      resizeMode = 'cover'
                      source = {{ uri: item.thumbnail_img }} />
                  </View>
                  <View style = { userContainer }>
                    <Text style = { name }>{ item.name }</Text>
                    <Text>{ item.title }</Text>
                  </View>
                </View>

                <View
                  style = {{
                    paddingRight: 8,
                    paddingBottom: 8,
                    paddingLeft: 8,
                    justifyContent: 'flex-start',
                    flexDirection: 'row',
                    position: 'relative'
                  }}>
                  <Image
                    style = { imageContent }
                    height = { 200 }
                    width = { undefined }
                    resizeMode = 'cover'
                    source = {{ uri: item.field_img }} />
                </View>

                <View
                  style = {{
                    paddingRight: 8,
                    paddingBottom: 8,
                    paddingLeft: 8,
                    justifyContent: 'flex-start',
                    flexDirection: 'row',
                    position: 'relative'
                  }}>
                  <View style = {{ flex: 1 }}>
                    <Text style = {{
                      color: mine_shaft,
                      fontWeight: 'bold' }}>
                        { item.field_name.toUpperCase() }
                    </Text>
                    <Text>{ `${item.field_num} ${item.field_date}` }</Text>
                  </View>

                  <View
                    style = {{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingLeft: 16
                    }}>

                    <Icon
                      name = 'like'
                      type = 'evilicon'
                      size = { 32 }
                      color = { mine_shaft } />

                    <Icon
                      name = 'comment'
                      type = 'evilicon'
                      size = { 32 }
                      color = { mine_shaft } />

                    <Icon
                      name = 'user'
                      type = 'evilicon'
                      size = { 32 }
                      color = { mine_shaft } />

                    <Icon
                      name = 'share-google'
                      type = 'evilicon'
                      size = { 32 }
                      color = { mine_shaft } />
                  </View>
                </View>

                <Button onPress = { () => console.log('clicked!') }>
                  Gabung Gan!
                </Button>
              </Card>
            )}
            keyExtractor = {item => item.id } />
        </View>
      </View>
    );
  }
}

const styles = {
  screen: {
    flex: 1
  },
  content: {
    flex: 1,
    paddingTop: 2,
    paddingBottom: 2
  },
  thumbnailContainer: {
    height: 40,
    width: 40,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  thumbnail: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: color_primary
  },
  userContainer: {
    justifyContent: 'center'
  },
  name: {
    color: mine_shaft,
    fontSize: 15,
    fontWeight: 'bold'
  },
  imageContent: {
    flex: 1,
    height: 250,
    width: undefined,
    resizeMode: 'contain'
  }
}
