import React, { Component } from 'react'
import { Card, WhiteSpace, WingBlank, Icon, Flex, Tag } from 'antd-mobile-rn'
import { FlatList, StyleSheet, Text, View, Image } from 'react-native'

const styles = StyleSheet.create({
    authorStyle: {
        fontSize: 12,
        fontWeight: '700',
        color: '#000'
    },
    moduleStyle: {
        fontSize: 12,
        fontWeight: '700',
        textAlign: 'right'
    },
    thumbStyle: {
        width: 16,
        height: 16,
        borderRadius: 8
    },
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
 * 基础的单个文章卡片
 */
export default class BaseArticleCard extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {

        const title = <Text style={styles.authorStyle}>{this.props.data.author}</Text>
        const extra = <Text style={styles.moduleStyle}>{this.props.data.module}</Text>
        //中间需要预留几个空格，用于分离喜欢与评论
        const footer = (<Flex direction="row" >
            <View style={{ flexDirection: 'row' }}>
                <Icon type={'\ue63b'} size={14} color="#ddd"></Icon>
                <Text style={styles.footerTextStyle}>  1</Text>
            </View>
            <WingBlank size="md"></WingBlank>
            <View style={{ flexDirection: 'row' }}>
                <Icon type={'\ue684'} size={14} color="#ddd"></Icon>
                <Text style={styles.footerTextStyle}>  评论</Text>
            </View>
        </Flex>)

        return (
            <View style={{ width: '100%', backgroundColor: 'rgb(244,248,251)' }}>
                <Card full style={{ borderWidth: 0 }}>
                    <Card.Header title={title}
                        thumb={this.props.data.thumb}
                        thumbStyle={styles.thumbStyle}
                        extra={extra}
                    >
                    </Card.Header>
                    <Card.Body style={{ paddingLeft: 10, paddingRight: 10 }}>
                        <View>
                            <Text numberOfLines={2} style={styles.titleStyle}>{this.props.data.title}</Text>
                            <WhiteSpace size="xs"></WhiteSpace>
                            <Text numberOfLines={3} style={styles.contentStyle}>{this.props.data.des}</Text>
                        </View>
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