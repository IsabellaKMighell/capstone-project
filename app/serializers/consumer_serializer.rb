class ConsumerSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :longitude, :latitude
end
