class ReservationsController < ApplicationController
  ### add "skip_before_action :authorize, only: [:the :different :methods]" if a path does not need/shouldn't have user authentication
  skip_before_action :authorize, only: %i[index create]

  ############################### /reservations
  def index
    render json: Reservation.all
  end

  def create
    reservation = Reservation.create!(reservation_params)
    render json: reservation, status: :created
  end

  def destroy
    reservation = Reservation.find(params[:id])
    reservation.destroy
    head :no_content
  end

  def user_reservations_index
    user = User.find(params[:id])
    reservations = Reservation.where(user_id: user.id)
    render json: reservations
  end

  private

  def reservation_params
    params.permit(
      :reservation_type_id,
      :resource_id,
      :user_id,
      :datetime_start,
      :datetime_end
    )
  end
end
