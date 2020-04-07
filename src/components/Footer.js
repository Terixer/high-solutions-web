import React from 'react';
import { Link } from 'react-router-dom';

import {
    Container,
    Segment,
    List,
    Image,
    Divider
} from 'semantic-ui-react'

export const Footer = () => (
    <Segment inverted style={{ margin: '5em 0em 0em', padding: '5em 0em' }} vertical>
        <Container textAlign='center'>
            <List horizontal inverted divided link size='small'>
                <List.Item as='a' href='https://github.com/Terixer/high-solutions-web'>
                    Github
              </List.Item>
                <List.Item as='a' href='http://high-solutions-task.herokuapp.com/ '>
                    Backend
              </List.Item>
                <List.Item as='a' href='https://highsolutions.pl/'>
                    High Solutions
              </List.Item>
                <List.Item as='a' href='http://kamilbartczak.pl/'>
                    Author
              </List.Item>
            </List>
            <Divider />
            <Container textAlign='center'>
                Made with <Image src='https://www.montessoriandmore.ca/wp-content/uploads/2016/03/favourite-heart-icon.png' avatar size='mini' style={{ paddingBottom: '8px', marginLeft: '8px' }} /> for <Image src='https://static.highsolutions.pl/images/logo.png' inline size='tiny' />
            </Container>
        </Container>
    </Segment>
)