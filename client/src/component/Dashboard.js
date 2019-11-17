import React, { Component } from 'react'
import { ViewComponent } from './ViewSchedule'

export class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <ViewComponent />
            </div>
        )
    }
}

export default Dashboard
