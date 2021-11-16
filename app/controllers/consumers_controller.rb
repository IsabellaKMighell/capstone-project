class ConsumersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        consumer = Consumer.create!(consumer_params)
        session[:consumer_id] = consumer.id
        render json: consumer ,status: :created
    end

    def update
        consumer = Consumer.update!(location_params)
        render json: consumer ,status: :ok
    end

    private

    def consumer_params
        params.permit(:username, :password, :first_name, :last_name, :avatar)
    end
    def location_params
        params.permit(:latitude, :longitude)
    end
end
