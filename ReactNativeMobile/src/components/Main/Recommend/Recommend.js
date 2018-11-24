import {
    TextInput,
    Dimensions, SafeAreaView,
} from 'react-native';
import React, { Component } from 'react';
import { Header, createTabNavigator, TabNavigator } from 'react-navigation';
import BeautyListDeal from './ListDeal/BeautyListDeal';
import FashionListDeal from './ListDeal/FashionListDeal';
import FoodListDeal from './ListDeal/FoodListDeal';
//import { fetchFoodDeal } from '../../../../redux/actions/RecommendAction';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class Recommend extends Component {
    static navigationOptions = {
        headerTitle: (
            <TextInput
                inlineImageLeft='ic_search'
                style={{
                    height: SCREEN_HEIGHT / 11.3,
                    width: SCREEN_WIDTH,
                    backgroundColor: '#fff',
                    padding: 20,
                    paddingLeft: 25,
                    borderWidth: 0.5,
                    borderColor: 'black'
                }}
                placeholder="What are you looking for?"
            />
        ),
        /* eslint-disable global-require */
        //headerRight: (),
        /* eslint-enable global-require */
    }

    constructor() {
        super();
        this.state = {
            PickerValue: ''
        };
    }

    Tabs = navigation => {
        const Tabs = createTabNavigator(
            {
                FOOD: { screen: FoodListDeal },
                BEAUTY: { screen: BeautyListDeal },
                FASHION: { screen: FashionListDeal }
            },
            {
                ...TabNavigator.Presets.AndroidTopTabs,                
                lazyLoad: false,
                tabBarOnPress: {
                    jumpToIndex: true,
                },
                tabBarOptions: {
                    scrollEnabled: true,
                    style: {
                        backgroundColor: '#FEDBD0',
                        height: Header.HEIGHT - 15
                    },
                    tabStyle: {
                        width: SCREEN_WIDTH / 3
                    },
                    indicatorStyle: {
                        backgroundColor: '#442C2E',
                        width: SCREEN_WIDTH / 3,
                    },
                    labelStyle: {
                        fontFamily: 'Rubik-Medium',
                        color: '#442C2E',
                        fontWeight: 'bold',
                        justifyContent: 'center'
                    }
                }
            }
        );
        return <Tabs />;
    }

    render() {
        const { nav } = this.props;
        return (
            /* eslint-disable global-require */
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                {this.Tabs(nav)}
            </SafeAreaView>
            /* eslint-enable global-require */
        );
    }
}