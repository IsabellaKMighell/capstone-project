class Line < ApplicationRecord
  belongs_to :consumer
  belongs_to :business

  validates :distance, numericality: { 
    less_than_or_equal_to: 2700, 
    message: "too far from business"
  }
  validates :consumer_id, uniqueness: true
  validates :business_id, presence: true

  def initialize(attributes=nil)
    attr_with_defaults = {:checked_in => 0, :time => 30}.merge(attributes)
    super(attr_with_defaults)
  end
end
