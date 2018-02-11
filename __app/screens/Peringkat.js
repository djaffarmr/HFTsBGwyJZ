import React, { Component } from 'react';
import { View,
         Text,
         Image,
         FlatList } from 'react-native';

import axios from 'axios';
import Carousel from 'react-native-swipeable-parallax-carousel';

import { Toolbar,
         Card,
         Button } from '../components/';

import { color_primary,
         white,
         mine_shaft } from '../styles/Palette';

const peringkat_json = 'https://api.myjson.com/bins/5zoc5';

const carouselImages=[
  {
    "id": 0,
    "title": "Maret Ini!",
    "subtitle": "Jadilah 3 besar dan dapatkan NIKE HYPERVENOMX PHANTOM III PRO TF Finale!",
    "imagePath": "https://www.r-gol.com/product_picture/fill_2128x1416_watermark_rgolcom/cc15eabce2ff5150196fae518c266992.jpg",
  },
  {
    "id": 1,
    "title": "Rio Pangestu Putra",
    "subtitle": "Anchor Timnas Futsal Indonesia 2017 dari Samarinda",
    "imagePath": "https://d10dnch8g6iuzs.cloudfront.net/picture/85120170807153242648_o",
  },
  {
    "id": 2,
    "title": "OUR TEAM, OUR PRIDE!",
    "subtitle": "Tifosi AMFC National Tournament 2018 Siap Digelar Januari Mendatang",
    "imagePath": "https://d10dnch8g6iuzs.cloudfront.net/picture/2420171205111516869_o",
  },
];

export default class Peringkat extends Component {

  static navigationOptions = {
    tabBarLabel: '2'
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
    axios.get(peringkat_json)
      .then(response => {
        this.setState({ data: response.data })
      })
      .catch(error => {
        console.log('Please check your internet connection.')
      });
  }

  render() {

    const { screen, content } = styles;

    return(
      <View style = { screen }>
        <Toolbar toolbarTitle = { 'Peringkat' } />
        <View style = { content }>

          <View
            style = {{
              backgroundColor: '#f5f5f5',
              borderColor: '#e0e0e0',
              borderBottomWidth: 1
            }}>
            <Carousel
              data = {carouselImages}
              height={175}
              titleColor={'#fff'}
              navigation = {true}
              navigationColor = {'#fff'}
              navigationType = {'bars'}
              parallax = {true} />
          </View>

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
                  {/*THUMBNAIL*/}
                  <View
                    style = {{
                      height: 40,
                      width: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 8 }}>
                    <Image
                      style = {{
                        height: 40,
                        width: 40,
                        borderRadius: 20,
                        borderWidth: 1,
                        borderColor: color_primary }}
                      resizeMode = 'cover'
                      source = {{ uri: item.thumbnail_img }} />
                  </View>

                  {/*NAME AND TITLE*/}
                  <View
                    style = {{
                      flex: 4,
                      justifyContent: 'center' }}>
                    <Text style = {{ color: mine_shaft }}>
                      { item.name }
                    </Text>
                    <Text>
                      { item.title }
                    </Text>
                  </View>

                  {/*RANK AND POINTS*/}
                  <View
                    style = {{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center' }}>
                    <Text
                      style = {{
                        color: mine_shaft,
                        fontSize: 15,
                        fontWeight: 'bold' }}>
                      { item.rank }
                    </Text>
                    <Text>
                      { item.points }
                    </Text>
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
    paddingBottom: 2
  }
}
