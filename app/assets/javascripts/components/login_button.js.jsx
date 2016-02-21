var LoginButton = React.createClass({
  getInitialState: function() {
    return {clicked: false};
  },

  handleClick: function(e) {
    e.preventDefault();
    this.setState({clicked: true});
    $("#modal2").openModal();
  },

  handleUserLogin: function(user) {
      this.props.onUserLogin(user)
  },

  render: function() {
    var logButton = <button className="btn right red accent-2"  onClick={this.handleClick}>login</button>
    var logFormDiv = <div id='modal2' className='modal loginForm'><div className="modal-content"><LoginForm  onUserLogin = {this.handleUserLogin} /></div></div>
    var button = (this.state.clicked ? logFormDiv : logButton);
    return(
      button
    );
  }
});

