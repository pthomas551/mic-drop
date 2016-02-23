var CreateEventButton = React.createClass({
  getInitialState: function() {
    return {clicked: false};
  },

  handleClick: function(e) {
    e.preventDefault();
    this.setState({clicked: true});
    $("#modal3").openModal();
  },

  handleCancelButtonClick: function(e) {
    e.preventDefault();
    $("#modal3").closeModal();
    $(".lean-overlay").remove();
    this.setState({clicked: false});
  },

  render: function() {
    var createEventButton = <button className="btn right red accent-2" onClick={this.handleClick}>create event</button>
    var createEventFormDiv = <div id='modal3' className='modal eventForm'><div className="modal-content">
      <EventForm
      handleCancelButtonClick = {this.handleCancelButtonClick}/>
      </div></div>
    var button = (this.state.clicked ? createEventFormDiv : createEventButton);
    return(button);
  }
});
