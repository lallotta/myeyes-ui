import React, { Component } from 'react'
import styled from 'styled-components'
import Navigation from './Navigation.jsx'

const Global = styled.div`
    background-color: #333333;
    color: #FFF;
`

const Layout = styled.div`
    display: flex;
`


export default class App extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <Global>
                <Navigation />
                <Layout>

                </Layout>
            </Global>
        )
    }
}