class UsersController < ApplicationController
  protect_from_forgery

  def new
    @user = User.new
  end

  def create
    @user = User.create(username: user_params[:username],
                        password: user_params[:password],
                           email: user_params[:email],
                     facebook_id: user_params[:facebook_id],
                     picture_url: user_params[:picture_url])

    if @user.save
      if user_params[:friends]
        user_params[:friends].each do |key, value|
          friend = User.find_by(facebook_id: value[:id])
          if friend
            Friendship.create(user: @user, friend: friend)
            Friendship.create(user: friend, friend: @user)
          end
        end
      end
      session[:user_id] = @user.id
      render :json => @user
    else
      render :json => @user.errors.full_messages
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :facebook_id, :friends, :picture_url).tap do |whitelisted|
      whitelisted[:friends] = params[:user][:friends]
    end
  end


end
