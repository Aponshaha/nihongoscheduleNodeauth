import React, { Component } from 'react'
import EnhancedTable from './Items/Table';
import CircularDeterminate from './Items/Loading';

export class Student extends Component {
    state = {
        data: [],
        loading: true
    }


    componentDidMount() {
        fetch('https://gitscheduleapp.herokuapp.com/api/users')
            .then(response => response.json())
            .then(user => {
                this.setState({ data: user, loading: false }, () => { console.log('state: ', this.state.data) })
            })
    }

    render() {
        return (
            this.state.loading ? <CircularDeterminate /> :
                <div>
                    < EnhancedTable
                        rows={
                            this.state.data
                        }
                    />
                </div>
        )
    }
}

export default Student
