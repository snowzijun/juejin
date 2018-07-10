import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Card, WingBlank, Icon, Flex, WhiteSpace } from 'antd-mobile-rn'

const styles = {
    textStyle:{
        fontSize: 10
    }
}

/**
 * 用于显示文章列表下部收藏 评论等图标
 */
export default class SmIcon extends Component{
    constructor(props){
        super(props)
        this.state = {}
        this.onPress = this.onPress.bind(this)
    }

    static defaultProps = {
        icon:'',
        text:'',
        //点击图标事件
        onPressIcon:()=>{}
    }

    onPress(){
        //触发点击图标事件
        this.props.onPressIcon()
    }
    render(){
        const props = this.props
        return (
            <TouchableOpacity style={{paddingLeft:5, paddingRight:5, borderRadius:8}} onPress={this.onPress} >
                <View style={{ flexDirection: 'row', alignItems:'center'}}>
                    <Icon type={props.icon} size={12} color="#ddd"></Icon>
                    <Text> </Text>
                    <Text style={styles.textStyle}>{props.text}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}