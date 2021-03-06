describe 'adding an event', :type => :feature, :js => true do
  let(:venue) { FactoryGirl.create(:venue) }
  let(:user) { venue.manager }
  let(:user_id) { venue.manager.id }

  def login
    visit '/'
    click_button "Find out what you're doing tonight."
    click_button 'login'
    fill_in 'username', with: user.username
    fill_in 'password', with: user.password
    click_button 'Login'
  end

  it 'shows an add event button when user has proper permissions' do
    login
    expect(page).to have_button('create event')
  end

  it 'opens a form when add event button is clicked' do
    login
    click_button 'create event'
    expect(page).to have_field('name')
  end

  xit 'allows the user to submit event data' do

  end

  xit 'shows an event on map once event is submitted' do

  end

end
