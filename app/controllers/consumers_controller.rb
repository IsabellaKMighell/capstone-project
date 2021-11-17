class ConsumersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        consumer = Consumer.create!(consumer_params)
        session[:consumer_id] = consumer.id
        render json: consumer ,status: :created
    end

    

    private

    def consumer_params
        params.permit(:username, :password, :first_name, :last_name, :avatar)
    end
    
end
