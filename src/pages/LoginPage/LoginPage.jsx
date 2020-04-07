import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../actions';
import { Button, Form, Grid, Header, Image, Message, Segment, Dimmer, Loader } from 'semantic-ui-react'
import { history } from '../../helpers';
import { alertActions } from '../../actions';



class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;

        dispatch(userActions.logout());

        history.listen(() => {
            dispatch(alertActions.clear());
        });

        this.state = {
            email: '',
            password: '',
            submitted: false
        };



        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        const { dispatch } = this.props;
        if (email && password) {
            dispatch(userActions.login(email, password));
        }
    }

    render() {
        const { loggingIn, alert } = this.props;
        const { email, password, submitted } = this.state;
        return (
            <>
                {loggingIn &&
                    <Dimmer active>
                        <Loader />
                    </Dimmer>
                }
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>

                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='teal' textAlign='center'>
                            Log-in to your account
                    </Header>
                        {alert.message &&
                            <Message negative>
                                <Message.Header>{alert.message} </Message.Header>
                            </Message>
                        }
                        <Form size='large' onSubmit={this.handleSubmit}>
                            <Segment stacked>
                                <Form.Input
                                    fluid
                                    icon='user'
                                    iconPosition='left'
                                    name='email'
                                    type='email'
                                    value={email}
                                    onChange={this.handleChange}
                                    placeholder='E-mail address'
                                    error={submitted && !email && {
                                        content: 'Please enter email',
                                        pointing: 'below',
                                    }}
                                />

                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    name="password"
                                    value={password}
                                    onChange={this.handleChange}
                                    error={submitted && !password && {
                                        content: 'Please enter password',
                                        pointing: 'below',
                                    }}
                                />

                                <Button color='teal' fluid size='large'>
                                    Login
                            </Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    const { loggingIn } = state.authentication;
    return {
        loggingIn,
        alert
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 
