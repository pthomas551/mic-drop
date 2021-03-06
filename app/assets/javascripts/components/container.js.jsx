var Container = React.createClass({
  getInitialState: function() {
    var user = false;
    var request = $.ajax({
      url: "/sessions",
      async: false
    });
    request.done(function(responseData){
      user = responseData;
    });
    return { loggedIn: user,
             favs: false
     };
  },

  handleUserLogin: function(user) {
    this.setState({
      loggedIn: user,
    });
    if (!user) {this.setState({favs: false})};
    this.forceUpdate();
  },

  handleEventSubmit: function(eventData) {
    this.onEventSubmit(eventData);
  },

  onEventSubmit: function(eventData) {
    this.refs.googlemap.addEvent();
  },

  handleFilterAction: function() {
    var favs = this.state.favs;
    this.setState({favs: !favs})
  },

  render: function (){
    if (this.state.loggedIn) {
      guide = <div>_</div>
    } else {
      guide = <div id='modal5' className='modal siteGuide valign-wrapper'  >
                <SiteGuide class='valign center-align' />
              </div>
    }
    return(
      <div className="matroshka">
        <NavBar loggedIn = {this.state.loggedIn}
                onUserLogin = {this.handleUserLogin}
                onEventSubmit = {this.handleEventSubmit}
                onFilterAction = {this.handleFilterAction} />
        <GMap loggedIn = {this.state.loggedIn}
              favs = {this.state.favs}
              ref = "googlemap" />
        {guide}
      </div>
    );
  }
});

// yes, future us, matroshka does matter
