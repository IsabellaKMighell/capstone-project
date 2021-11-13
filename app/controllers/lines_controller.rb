class LinesController < ApplicationController
    skip_before_action :authorize, only: :destroy
    def create
        line_item = Line.create!(
            consumer_id: @current_user.id,
            business_id: params[:business_id],
            distance: params[:distance]
        )
        render json: line_item, status: :created
    end

    def destroy
        line_item = Line.find_by(id: params[:id])
        line_item.destroy
        head :no_content
    end
end
