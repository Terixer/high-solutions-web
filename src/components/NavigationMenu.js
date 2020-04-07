import React from 'react';
import { Link } from 'react-router-dom';

import {
    Container,
    Menu,
    Visibility,
} from 'semantic-ui-react'

export const NavigationMenu = () => (
    <Visibility>
        <Menu
            borderless
            fixed='top'
        >
            <Container text>
                <Menu.Item header>HighSolutionsTask</Menu.Item>
                <Menu.Item position='right'>
                    <Link to="/login">Logout</Link>
                </Menu.Item>
            </Container>
        </Menu>
    </Visibility>
)