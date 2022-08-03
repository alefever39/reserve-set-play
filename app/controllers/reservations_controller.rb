class ReservationsController < ApplicationController
  ### add "skip_before_action :authorize, only: [:the :different :methods]" if a path does not need/shouldn't have user authentication
  skip_before_action :authorize, only: [:index, :create]

  ############################### /reservations
  def index
    render json: Reservation.all
  end

  def create
    resource = Reservation.create!(reservation_params)
    render json: resource, status: :created
  end

  private

  def reservation_params
    params.permit( :reservation_type_id, :resource_id, :user_id, :datetime_start, :datetime_end)
  end

end
