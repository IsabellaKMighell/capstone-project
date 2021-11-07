class LinesController < ApplicationController
    def create
        line_item = Line.create!(
            consumer_id: @current_user.id,
            business_id: params[:business_id],
            distance: params[:distance]
        )
        render json: line_item, status: :created
    end
end
