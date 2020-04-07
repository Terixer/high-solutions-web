import React, { Component } from 'react';

export class SinglePerson extends Component {
    render() {
        return (
            <li>
                {this.props.item.name}
                <ul>
                    <li>
                        Eyes color: {this.props.item.eye_color}
                    </li>
                    <li>
                        Gender: {this.props.item.gender}
                    </li>
                    <li>
                        Height: {this.props.item.height}
                    </li>
                    <li>
                        Mass: {this.props.item.mass}
                    </li>
                </ul>
            </li>
        );
    }
}