import React, { Component } from 'react'
import styled from 'styled-components'
import Navigation from '../containers/Navigation.jsx'
import Sidebar from '../containers/SidebarFlex.jsx'

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
    flex-direction: column;
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

                    <Sidebar />

                    <Layout>
                        {/* card area */}
                        <LayContainer maxHeight="" width="500" padding="0px" margin="20px"> {/* issa card */}
                                
                                <video autoPlay style={{ height: 400 }} src="assets/rain.mp4"></video>
                                <span style={{ textAlign: 'center' }}>LE MAIN CONTENT</span>
         
                        </LayContainer>

                        {/* <LayContainer width="500" padding="0px" margin="20px">
                            <div>
                                LE OTHER CONTENT
                            </div>
                        </LayContainer> */}


                

                    </Layout>


                </Main>
                
            </Global>
        )
    }
}