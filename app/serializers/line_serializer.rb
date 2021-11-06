class LineSerializer < ActiveModel::Serializer
  attributes :id, :checked_in, :distance, :time
  has_one :consumer
  has_one :business
end
