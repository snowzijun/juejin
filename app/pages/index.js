import React, { Component } from 'react'
import {TabBar} from 'antd-mobile-rn'
import Home from './home/Home'
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'])
export default class Index extends Component{

    constructor(props){
        super(props)
        this.state = {
            selected:'home'
        }
        this.changeTab = this.changeTab.bind(this)
    }

    changeTab(name){
        console.log(name)
        this.setState({
            selected:name
        })
    }

    render(){ 
        return (
            <TabBar>
                <TabBar.Item title="" key="home" onPress={()=>{this.changeTab('home')}} selected={this.state.selected==='home'} icon={require('../static/icons/home.png')} selectedIcon={require('../static/icons/home-select.png')}>
                    <Home></Home>
                </TabBar.Item>
                <TabBar.Item title="" key="search"  onPress={()=>{this.changeTab('search')}}  selected={this.state.selected==='search'} icon={require('../static/icons/search.png')} selectedIcon={require('../static/icons/search-select.png')}></TabBar.Item>
                <TabBar.Item title="" key="message"  onPress={()=>{this.changeTab('message')}}  selected={this.state.selected==='message'} icon={require('../static/icons/message.png')} selectedIcon={require('../static/icons/message-select.png')}></TabBar.Item>
                <TabBar.Item title="" key="book"  onPress={()=>{this.changeTab('book')}}  selected={this.state.selected==='book'} icon={require('../static/icons/book.png')} selectedIcon={require('../static/icons/book-select.png')}></TabBar.Item>
                <TabBar.Item title="" key="user"  onPress={()=>{this.changeTab('user')}}  selected={this.state.selected==='user'} icon={require('../static/icons/user.png')} selectedIcon={require('../static/icons/user-select.png')}></TabBar.Item>
            </TabBar>
        )
    }
}