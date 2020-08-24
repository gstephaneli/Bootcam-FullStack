import React, { Component } from 'react'
import User from './User';

export default class Users extends Component {
    constructor(){
        super();
        this.state = {
            secondVisible: 0,
        }

        this.interval = null
    }

    componentDidMount(){
        this.interval = setInterval(() =>{
            const {secondVisible} = this.state

            this.setState({
                secondVisible: secondVisible+1
            })
        },1000)

    }


    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render() {

        const {users} = this.props
        const {secondVisible} = this.state

        return (
            <div>
                <p>Componentes visible by seconds  {secondVisible}</p>
                <ul>
                    {users.map(user =>{
                        const {login} = user;
                        return (<li key={login.uuid}>
                            <User user={user}/>
                        </li>)
                    })

                    }
                </ul>
            </div>
        )
    }
}
