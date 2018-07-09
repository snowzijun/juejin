import React, { Component } from 'react'
import { Dimensions,  StyleSheet, Text, View, Image } from 'react-native'
import { Card, WhiteSpace, WingBlank, Icon, Flex, Tag } from 'antd-mobile-rn'


const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 16,
        fontWeight: '700',
        color: 'rgb(72,72,72)'
    },
    contentStyle: {
        fontSize: 12
    },
    footerTextStyle: {
        fontSize: 10
    }

})

/**
 * 用于显示标题，收藏数，作者，时间的组件
 */
export default class TitleArticleCard extends Comment{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        //中间需要预留几个空格，用于分离喜欢与评论
        const footer = (<Flex direction="row" >
            <View style={{ flexDirection: 'row' }}>
                <Icon type={'\ue63b'} size={14} color="#ddd"></Icon>
                <Text> </Text>
                <Text style={styles.footerTextStyle}>1</Text>
            </View>
            <WingBlank size="md"></WingBlank>
            <View style={{ flexDirection: 'row' }}>
                <Icon type={'\ue684'} size={14} color="#ddd"></Icon>
                <Text> </Text>
                <Text style={styles.footerTextStyle}>评论</Text>
            </View>
        </Flex>)
        return (
            <View style={{ width: '100%', backgroundColor: 'rgb(244,248,251)' }}>
                <Card full style={{ borderWidth: 0 }}>
                    <Card.Body style={{ paddingLeft: 10, paddingRight: 10 }}>
                        <Text numberOfLines={2} style={styles.titleStyle}>{this.props.data.title}</Text>
                    </Card.Body>
                    <Card.Footer
                        content={footer}
                    />
                </Card>
                <WhiteSpace size="md"></WhiteSpace>
            </View>

        )
    }
}