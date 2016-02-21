var LoginForm = React.createClass({
  getInitialState: function() {
    return {username: '', password: ''};
  },
  handleUsernameChange: function(e) {
    this.setState({username: e.target.value});
  },
  handlePasswordChange: function(e) {
    this.setState({password: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var username = this.state.username.trim();
    var password = this.state.password.trim();
    if (!username || !password) {
      return;
    }
    //this.props({username: username, email: email, password: password});
    console.log(this.props);
    var request = $.ajax({
      url: "/users/login",
      dataType: 'json',
      type: 'GET',
      data: {user: this.state},
    });
    request.done(function(responseData){
      console.log(responseData)
      this.setState({username: '', password: ''})

    }.bind(this));
  },
  render: function() {
    return (
      <div col s12><form className="loginForm">
        <input
          type="text"
          placeholder="username"
          value={this.state.username}
          onChange={this.handleUsernameChange} />

        <input
          type="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handlePasswordChange} />
        <input type="submit" value="Login" className="btn" onClick={this.handleSubmit} />
      </form></div>

    );
  }
});
//
// var RegistrationForm = React.createClass({
//   getInitialState: function() {
//     return {username: '', password: '', email: ''};
//   },
//   handleUsernameChange: function(e) {
//     this.setState({username: e.target.value});
//   },
//   handleEmailChange: function(e) {
//     this.setState({email: e.target.value});
//   },
//   handlePasswordChange: function(e) {
//     this.setState({password: e.target.value});
//   },
//   handleSubmit: function(e) {
//     e.preventDefault();
//     var username = this.state.username.trim();
//     var email = this.state.email.trim();
//     var password = this.state.password.trim();
//     if (!username || !email || !password) {
//       return;
//     }
//     //this.props({username: username, email: email, password: password});
//     console.log(this.props);
//     var request = $.ajax({
//       url: "/users",
//       dataType: 'json',
//       type: 'POST',
//       data: {user: this.state},
//     });
//     request.done(function(responseData){
//       console.log(responseData)
//       this.setState({username: '', email: '', password: ''})
//
//     }.bind(this));
//   },
//   render: function() {
//     return (
//       <div col s12><form className="registrationForm">
//         <input
//           type="text"
//           placeholder="username"
//           value={this.state.username}
//           onChange={this.handleUsernameChange} />
//         <input
//           type="text"
//           placeholder="email"
//           value={this.state.email}
//           onChange={this.handleEmailChange} />
//         <input
//           type="password"
//           placeholder="password"
//           value={this.state.password}
//           onChange={this.handlePasswordChange} />
//         <input type="submit" value="Register" className="btn" onClick={this.handleSubmit} />
//       </form></div>
//
//     );
//   }
// });
//
//
//
