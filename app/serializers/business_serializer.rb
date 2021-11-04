class BusinessSerializer < ActiveModel::Serializer
  attributes :id, :name, :longitude, :latitude
end
