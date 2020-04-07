import React from 'react';
import { connect } from 'react-redux';
import { peopleActions } from '../../actions';
import { Link } from 'react-router-dom';
import { SinglePerson } from '../../components';
import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility,
} from 'semantic-ui-react'


class HomePage extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        dispatch(peopleActions.getPeople());
    }

    render() {
        const { user, people } = this.props;
        return (
            <div>
                <Container text style={{ marginTop: '2em' }}>
                    <Header as='h1'>Sticky Example</Header>
                    <p>
                        This example shows how to use lazy loaded images, a sticky menu, and a simple text
                        container
                    </p>
                </Container>
                <h1>Hi {user.email}!</h1>
                People from SWAPI
                {!people.length &&
                    <img alt="loading" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                }
                <ul>
                    {people && people.length && people.map((item) =>
                        <SinglePerson item={item} key={item.id} />
                    )}
                </ul>
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>

        );
    }
}

function mapStateToProps(state) {
    const { authentication, people } = state;
    const { user } = authentication;
    return {
        user,
        people
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };