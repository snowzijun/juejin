import React, { Component } from 'react'
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native'
import { Card,  Flex, WhiteSpace } from 'antd-mobile-rn'
import SmIcon from './SmIcon'

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 14,
        color: 'rgb(72,72,72)'
    },
    contentStyle: {
        fontSize: 12
    },
    footerTextStyle: {
        fontSize: 10
    }
})


const Body = (props)=>{
    if(props.data.img!=null && props.data.img!==''){
        const {width} = Dimensions.get('window')
        return ( <Flex direction="row"  align="stretch">
            <View style={{width:width - 115}}>
                <Text numberOfLines={2} style={styles.titleStyle}>{props.data.title}</Text>
                <WhiteSpace size="lg"/>
                <Flex direction="row" >
                    <SmIcon icon={'\ue63b'} text={'1'}  onPressIcon={()=>{}}/>
                    <SmIcon icon={'\ue639'} text={'冯超'}/>
                    <SmIcon icon={'\ue848'} text={'12小时前'}/>
                </Flex>
            </View>
            <View style={{ paddingLeft:5}}>
                <Image source={{uri:props.data.img}} style={{width:90, height:90}}></Image>
            </View>
        </Flex>)
    }else{
        return (
            <View>
                <Text numberOfLines={2} style={styles.titleStyle}>{props.data.title}</Text>
                <WhiteSpace size="lg"/>
                <Flex direction="row" >
                    <SmIcon icon={'\ue63b'} text={'1'}/>
                    <SmIcon icon={'\ue639'} text={'冯超'}/>
                    <SmIcon icon={'\ue848'} text={'12小时前'}/>
                </Flex>
            </View>
        )
    }
}




/**
 * 用于显示标题，收藏数，作者，时间的组件
 */
export default class TitleArticleCard extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
     
        return (
            <Card full style={{ borderWidth: 0 }}>
                <Card.Body style={{ paddingLeft: 10, paddingRight: 10, borderTopWidth:0, paddingBottom:0}}>
                    <Body data={this.props.data}/>
                </Card.Body>
            </Card>
        )
    }
}