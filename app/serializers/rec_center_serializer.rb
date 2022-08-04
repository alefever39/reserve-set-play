class RecCenterSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :phone, :description, :opens_at, :closes_at, :image, :opening_hours

  def opening_hours
    "#{self.object.opens_at.strftime("%l %P")} -#{self.object.closes_at.strftime("%l %P")}"
  end
end
