import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'

export default class Facebook extends Component {
    state = {
    isLoggedIn:false,
    userID:'',
    name:'',
    emai:'',
    picture:''

    }
responseFacebook =(response) => {
    console.log(response)
    this.setState({
    isLoggedIn:true,
    name:response.name,
    email:response.email,
    picture:response.picture.data.url

    })

}
componentClicked = () => {
console.log('clicked')

}
    comp
  render() {
      let fbContent
if(this.state.isLoggedIn)
{
    fbContent =
    (
 <div style={{width:'400px', margin:'auto', backgroundColor:'#f4f4f4'}}>
<img src={this.state.picture} alt={this.state.name}/>
<h4>Welcome {this.state.name}</h4>
<h4>Email:{this.state.email}</h4>

</div>

    )



}
else{
    fbContent =(
<FacebookLogin
    appId="800487893490778"
    autoLoad={true}
    fields="name,email,picture"
    onClick={this.componentClicked}
    callback={this.responseFacebook} />
    )

}

    return (
      <div>
{fbContent}
      </div>
    )
  }
}
