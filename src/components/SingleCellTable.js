import React, { Component } from 'react';
import { Table, Header, Image } from 'semantic-ui-react'

export class SingleCellTable extends Component {
    render() {
        return (
            <Table.Row>
                <Table.Cell>
                    <Header as='h4' image>
                        {this.props.item.gender !== 'female' && this.props.item.gender !== 'male' && <Image src='https://webmention.io/avatar/pbs.twimg.com/b75b4eece8176bedf22d10c8a8419659b36e66f55fc231c4ad3a72b310ca2168.jpg' rounded size='mini' />}
                        {this.props.item.gender === 'female' && <Image src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' rounded size='mini' />}
                        {this.props.item.gender === 'male' && <Image src='https://react.semantic-ui.com/images/avatar/small/matthew.png' rounded size='mini' />}
                        <Header.Content>
                            {this.props.item.name}
                            <Header.Subheader>#{this.props.item.id}</Header.Subheader>
                        </Header.Content>
                    </Header>
                </Table.Cell>
                <Table.Cell>{this.props.item.eye_color || 'unknown'}</Table.Cell>
                <Table.Cell>{this.props.item.gender || 'unknown'}</Table.Cell>
                <Table.Cell>{this.props.item.height || 'unknown'}</Table.Cell>
                <Table.Cell>{this.props.item.mass || 'unknown'}</Table.Cell>
            </Table.Row>
        );
    }
}