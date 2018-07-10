import React, { Component } from 'react'
import { Tabs } from 'antd-mobile-rn'
import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import BaseArticleCard from '../../components/BaseArticleCard'

export default class Content  extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        const props = this.props
        return (
            // <FlatList ref={el => this.listview = el}
            //     data={this.state.dataSource}
            //     renderItem={this.renderItem.bind(this)}
            //     keyExtractor={this.keyExtractor}></FlatList>
        )   
    }
} 