import React, { Component } from 'react'
import styled from 'styled-components'
import Navigation from './Navigation.jsx'

const Global = styled.div`
    background-color: #333333;
    color: #FFF;
`

const Layout = styled.div`
    flex: 1;
    padding: 30px;
    display: flex;
    flex-direction: column; {/* height will be ignored from children this way */}
`

const Sidebar = styled.div`
    background-color: #37181B;
    flex: 1;
    max-width: 300px;
    display: inline-block;
    height: 750px;
`

const LayContainer = styled.div`
    background-color: #FAFAFA;
    color: #333333;
    display: flex;
    max-height: ${props => props.maxHeight || ''};
    ${'' /* width: ${props => props.width || '60px'}; */}
    flex: 1;
    padding: ${props => props.padding || 0};
    margin: ${props => props.margin || 0};
    opacity: 0.5;
`

const Main = styled.div`
    ${'' /* display: inline-block; */}
    display: flex;
    width: 100%;
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

                <Main>

                    <Sidebar>
                        <div style={{ minHeight: 700 }}>
                            {/* sidebar items */}
                        </div>
                    </Sidebar>

                    <Layout>
                        {/* card area */}
                        <LayContainer maxHeight="80px" width="500" padding="0px" margin="20px"> {/* issa card */}
                            <div>
                                LE MAIN CONTENT
                            </div>
                        </LayContainer>

                        <LayContainer width="500" padding="0px" margin="20px"> {/* issa card */}
                            <div>
                                LE OTHER CONTENT
                            </div>
                        </LayContainer>


                

                    </Layout>


                </Main>
                
            </Global>
        )
    }
}