class BusinessesController < ApplicationController
    skip_before_action :authorize, only: :index
    def index
        businesses = Business.all 
        render json: businesses, status: :ok
    end
    def show
        business = Business.find_by(id: params[:id])
        render json: business, status: :ok
    end
end
