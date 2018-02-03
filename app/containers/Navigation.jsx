import React, { Component } from 'react';
import styled from 'styled-components';
import { toggleSidebar } from '../actions/actions_index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

/*
* NAVIGATION

* PROPS
    - bgColor [string] hex or css color value for Navbar color
    - ?
*/

const Nav = styled.div`
    height: 65px;
    background-color: ${props => props.bgColor || '#111111'};
    box-shadow: -5px 6px 4px 0px rgba(0,0,0,0.1);
    font-family: ${props => props.font || 'Arial'};
    width: 100%;
`

const NavItem = styled.li`
    list-style-type: none;
    display: inline;
    padding: 0px 10px 0px 10px;

    &:hover {
        background-color: ${props => props.hoverColor}
    }
`

class Navigation extends Component {
    //ops
    constructor(props) {
        super(props)

    }

    componentDidMount() {

    }

    render() {
        return (
            <Nav font="Avenir" bgColor={this.props.bgColor}>
                <div>
                    <div onClick={() => this.props.toggleSidebar({ type: "TOGGLE_DRAWER" })} style={{ height: 45, width: 45, paddingLeft: 20, paddingTop: 10, display: 'inline-block', float: 'left' }}>
                        <img id="nav-logo" style={{ height: 45, width: 45 }} src="assets/logo.svg" alt="logo"/>
                    </div>

                    <div style={{ display: 'inline' }}>
                        <ul style={{ margin: 0, paddingTop: 30, display: 'inline-block' }}>
                            <NavItem hoverColor="red">Item</NavItem>
                            <NavItem hoverColor="green">Item</NavItem>
                            <NavItem hoverColor="yellow">Item</NavItem>
                        </ul>
                    </div>


                </div>
            </Nav>
        )
    }
};

function mapStateToProps(state) {
    return {
        view: state.interface
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ toggleSidebar }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)