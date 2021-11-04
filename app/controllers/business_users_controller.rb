class BusinessUsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        business_user = BusinessUser.create(business_user_params)
        session[:business_user_id] = business_user.id
        render json: business_user ,status: :created
    end

    def show
        render json: @current_user, status: :ok
    end

    private

    def business_user_params
        params.permit(:username, :password)
    end

end
