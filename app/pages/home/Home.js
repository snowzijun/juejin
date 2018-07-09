import React, { Component } from 'react'
import { Tabs } from 'antd-mobile-rn'
import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import BaseArticleCard from '../../components/BaseArticleCard'

const styles = StyleSheet.create({
    containerHorizontal: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
    },
    tabsStyle:{
        backgroundColor:'blue'
    }
})


export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataSource: [
                {
                    id: '1',
                    author: '冯超',
                    thumb: 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
                    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
                    title: 'React Native基础&入门教程：初步使用Flexbox布局',
                    des: '在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中,笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装',
                    module: '前端'
                },
                {
                    id: '2',
                    author: '冯超',
                    thumb: 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
                    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
                    title: 'React Native基础&入门教程：初步使用Flexbox布局sdsdsdsdsdsdsd',
                    des: '在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装',
                    module: '前端'
                },
                {
                    id: '3',
                    author: '冯超',
                    thumb: 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
                    img: null,
                    title: 'React Native基础&入门教程：初步使用Flexbox布局',
                    des: '在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装',
                    module: '前端'
                },
                {
                    id: '4',
                    author: '冯超',
                    thumb: 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
                    img: null,
                    title: 'React Native基础&入门教程：初步使用Flexbox布局',
                    des: '在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装',
                    module: '前端'
                }, {
                    id: '5',
                    author: '冯超',
                    thumb: 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
                    img: null,
                    title: 'React Native基础&入门教程：初步使用Flexbox布局',
                    des: '在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装',
                    module: '前端'
                }, {
                    id: '6',
                    author: '冯超',
                    thumb: 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
                    img: null,
                    title: 'React Native基础&入门教程：初步使用Flexbox布局',
                    des: '在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装',
                    module: '前端'
                }, {
                    id: '7',
                    author: '冯超',
                    thumb: 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
                    img: null,
                    title: 'React Native基础&入门教程：初步使用Flexbox布局',
                    des: '在上篇中，笔者通过分享了部分安装在上篇中通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装',
                    module: '前端'
                },
            ],
            tabList:[{
                title:'首页',
                key:'Index'
            }, {
                title:'前端',
                key:'FontEnd'
            }, {
                title:'产品',
                key:'Product'
            }, {
                title:'后端',
                key:'BackEnd'
            }, {
                title:'Android',
                key:'Android'
            }, {
                title:'IOS',
                key:'IOS'
            }]
        }
    }

    renderItem({ item, separators }) {
        return (
            <BaseArticleCard data={item}></BaseArticleCard>
        )
    }

    keyExtractor(item, index) {
        return item.id
    }

    renderTabContent(tab, index){
        if(index==0){
            return (
                <FlatList ref={el => this.listview = el}
                    data={this.state.dataSource}
                    renderItem={this.renderItem.bind(this)}
                    keyExtractor={this.keyExtractor}></FlatList>
            )
        }
        return <View><Text>待开发</Text></View>
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Tabs tabs={this.state.tabList} initialPage={'Index'} tablePosition="top" 
                    tabBarBackgroundColor="rgb(2,127,255)"
                    tabBarActiveTextColor="rgb(216,250,255)"
                    tabBarInactiveTextColor="rgb(117,194,250)"
                    tabBarUnderlineStyle={{backgroundColor:'#fff'}}> 
                    {this.renderTabContent.bind(this)}
                </Tabs>
            </View>
            

        )
    }
}
