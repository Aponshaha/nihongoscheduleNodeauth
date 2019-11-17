import React, { Component } from 'react'
import AccountDetails from './Items/Profiledetails'
import CircularDeterminate from './Items/Loading';

export class Profile extends Component {
    state = {
        data: [],
        loading: true
    }


    componentDidMount() {
        fetch('https://gitscheduleapp.herokuapp.com/api/user/5daff5e50c60ba64f00a232e')
            .then(response => response.json())
            .then(user => {
                this.setState({
                    data: user,
                    loading: false
                }, () => {
                    console.log('state: ', this.state.data)
                })
            })
    }

    render() {
        return (
            this.state.loading ? < CircularDeterminate /> :
            <div>
                <p>Profile</p>
                <AccountDetails values = {
                    this.state.data
                }    
                />
            </div>
        )
    }
}

export default Profile
