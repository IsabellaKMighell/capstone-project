class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        model = params[:user]
        if model == 'business_user'
            business_user = BusinessUser.find_by(username: params[:username])
            if business_user&.authenticate(params[:password])
                session[:business_user_id] = business_user.id
                render json: business_user, status: :ok
            else
                render json: { errors: "Invalid username or password" }, status: :unauthorized
            end
        else
            consumer = Consumer.find_by(username: params[:username])
            if consumer&.authenticate(params[:password])
                session[:consumer_id] = consumer.id
                session[:user] = model
                render json: consumer, status: :created
            else
                render json: { errors: "Invalid username or password" }, status: :unauthorized
            end
        end
    end

    def show
        render json: @current_user, status: :ok
    end
  
    def destroy
        session.delete :user
        session.delete :business_user_id
        session.delete :consumer_id
        head :no_content
    end
end
