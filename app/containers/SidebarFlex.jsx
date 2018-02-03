import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleSidebar } from '../actions/actions_index';


const Sidebar = styled.div`
    background-color: #37181B;
    flex: 1;
    ${'' /* max-width: 300px; */}
    max-width: ${props => props.drawer ? '300px' : '0px'} ;
    display: inline-block;
    height: 750px;
`;

const ListGroup = styled.ul`
    display: ${props => props.drawer ? 'block' : 'none'} ;
`

class SidebarFlex extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Sidebar drawer={this.props.view.drawer} id="drawer">
                    <ListGroup drawer={this.props.view.drawer}>
                        <li>bruh</li>
                        <li>bruh</li>
                        <li>bruh</li>
                        <li>bruh</li>
                        <li>bruh</li>
                        <li>bruh</li>
                        <li>bruh</li>
                        <li>bruh</li>
                        <li>bruh</li>
                    </ListGroup>
            </Sidebar>
        )
    };
};

function mapStateToProps(state) {
    return {
        view: state.interface
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ toggleSidebar }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarFlex)