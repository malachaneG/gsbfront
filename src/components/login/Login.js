import React from 'react'
import './Login.css'
import {withRouter} from 'react-router-dom'
import {getToken} from '../../api/auth'

class Login extends React.Component {

    constructor(props) {
        super(props)
    }

    handleChange(e){
        let{name,value} = e.target
        this.setState({
            [name]: value
        })
    }

    async login(){
        let {decoded, token} = await getToken({login: this.state.login, password: this.state.password})
        if (decoded){
            console.log(decoded)
            localStorage.setItem('id', decoded.id)
            localStorage.setItem('token',token)
            this.props.history.push('/bills')
        }
    }
  

    render(){
        return(
    
        <main class="form-signin">

                <img class="mb-4" src="" alt="" width="72" height="57"/>
                <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
                <label for="inputEmail" class="visually-hidden">Email address</label>
                <input type="email" id="inputEmail" name="login" class="form-control" placeholder="login" onChange={(e) => this.handleChange(e)} />
                <label for="inputPassword" class="visually-hidden">Password</label>
                <input type="password" id="inputPassword" class="form-control" name="password" placeholder="Password" onChange={(e) => this.handleChange(e)} required />
                <div class="checkbox mb-3">
                    <label>
                    <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={() => this.login()}>Sign in</button>


            </main>

        )
    }
}

export default withRouter(Login);
