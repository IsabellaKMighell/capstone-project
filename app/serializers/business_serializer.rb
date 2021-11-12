class BusinessSerializer < ActiveModel::Serializer
  attributes :id, :name, :longitude, :latitude, :address, :image, :waittime, :business_line

  def waittime
    self.object.lines.map{|line| line.time}.sum

  end

  def business_line
    self.object.lines
  end

  
end
