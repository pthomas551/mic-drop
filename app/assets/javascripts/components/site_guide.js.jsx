var SiteGuide = React.createClass({

  componentDidMount: function() {
    $("#modal5").openModal();
  },

  handleCancelButtonClick: function() {
    $("#modal5").closeModal();
    $(".lean-overlay").hide();
  },

  render: function(){
    return(
      <div>
        <h5 className="site-guide">Mic Drop helps you find cool activities in your area. Log in to RSVP for events and connect with Facebook to see which events your friends are attending. Find out what you're doing tonight.</h5>
        <Button className="btn-flat indigo accent-3 right" onClick={this.handleCancelButtonClick}>Close Window</Button>
      </div>
    );
  }
});
