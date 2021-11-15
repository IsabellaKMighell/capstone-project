class BusinessSerializer < ActiveModel::Serializer
  attributes :id, :name, :longitude, :latitude, :address, :image, :guess

  def guess
    self.object.lines.map{|line| line.time}.sum

  end

  

  
end
