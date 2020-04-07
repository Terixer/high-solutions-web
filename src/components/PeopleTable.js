import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import { SingleCellTable } from './index'

export class PeopleTable extends Component {
    render() {
        return (
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Eye color</Table.HeaderCell>
                        <Table.HeaderCell>Gender</Table.HeaderCell>
                        <Table.HeaderCell>Height</Table.HeaderCell>
                        <Table.HeaderCell>Mass</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {this.props.people && this.props.people.length && this.props.people.map((item) =>
                        <SingleCellTable item={item} key={item.id} />
                    )}
                </Table.Body>
            </Table>
        )
    }
}
