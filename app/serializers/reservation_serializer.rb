class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :reservation_time, :datetime_start, :datetime_end, :rec_center, :rec_center_address
  has_one :resource
  # has_one :user
  def reservation_time
    "#{self.object.datetime_start.strftime("%l %P")} -#{self.object.datetime_end.strftime("%l %P")}"
  end

  def rec_center
    "#{self.object.resource.rec_center.name}"
  end

  def rec_center_address
    "#{self.object.resource.rec_center.address}"
  end
end
