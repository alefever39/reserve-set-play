class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :reservation_time, :datetime_start, :datetime_end, :rec_center
    # , :rec_center_address, :rec_center_id, :rec_center_phone, :rec_center_description, :rec_center_opens_at, :rec_center_closes_at, :rec_center_image
  has_one :resource
  # has_one :user
  def reservation_time
    "#{self.object.datetime_start.strftime("%a, %b %d, %l %P")} -#{self.object.datetime_end.strftime("%l %P")}"
  end

  def rec_center
    self.object.resource.rec_center
  end

  # def rec_center
  #   "#{self.object.resource.rec_center.name}"
  # end

  # def rec_center_address
  #   "#{self.object.resource.rec_center.address}"
  # end

  # def rec_center_phone
  #   "#{self.object.resource.rec_center.phone}"
  # end

  # def rec_center_description
  #   "#{self.object.resource.rec_center.description}"
  # end

  # def rec_center_opens_at
  #   "#{self.object.resource.rec_center.opens_at}"
  # end

  # def rec_center_closes_at
  #   "#{self.object.resource.rec_center.closes_at}"
  # end

  # def rec_center_image
  #   "#{self.object.resource.rec_center.image}"
  # end

end
