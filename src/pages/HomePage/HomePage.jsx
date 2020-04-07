import React from 'react';
import { connect } from 'react-redux';
import { peopleActions } from '../../actions';
import { NavigationMenu, AppLoader, PeopleTable, Footer } from '../../components';
import {
    Container,
    Header
} from 'semantic-ui-react'


class HomePage extends React.Component {
    state = {
        menuFixed: false,
        overlayFixed: false,
    }

    constructor(props) {
        super(props);

        document.title = "High Solutions Web";

        const { dispatch } = this.props;
        dispatch(peopleActions.getPeople());
    }

    render() {
        const { user, people } = this.props;
        return (
            <>
                {!people.length &&
                    <AppLoader />
                }
                <NavigationMenu />

                <Container style={{ paddingTop: '6em' }}>
                    <Header as='h1'>People from SWAPI</Header>
                    <p>
                        You are logged as: {user.email}
                    </p>
                </Container>

                <Container style={{ marginTop: '5em' }}>
                    <PeopleTable people={people} />
                </Container>

                <Footer />
            </>

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