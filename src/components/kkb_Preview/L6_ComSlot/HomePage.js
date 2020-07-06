import React, { Component } from 'react'
import Layout from './Layout'

export default class HomePage extends Component {
    render() {
        return (
            <Layout showTopBar={false} showBottomBar={true} title="home">

                {
                    {
                        content: (
                            <div>
                                <h3>HomePage</h3>
                            </div>),
                        txt: '这是一段文本',
                        btnClick: () => {
                            console.log("btnClick")
                        }

                    }
                }
            </Layout>
        )
    }
}
