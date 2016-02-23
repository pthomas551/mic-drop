var LoginForm = React.createClass({
  getInitialState: function() {
    return {username: '', password: ''};
  },

  handleLogin: function(user) {
    this.props.onUserLogin(user)
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
    var request = $.ajax({
      url: "/sessions",
      dataType: 'json',
      type: 'POST',
      data: {user: this.state},
    });
    request.done(function(responseData){
      if (responseData.username === username){
        this.handleLogin(responseData)
        $("#modal2").closeModal();
        $(".lean-overlay").remove();
      }
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
        <Button onClick={this.props.handleCancelButtonClick}>Cancel</Button>
      </form></div>

    );
  }
});
