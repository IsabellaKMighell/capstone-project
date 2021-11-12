class Line < ApplicationRecord
  belongs_to :consumer
  belongs_to :business

  validates :distance, numericality: { less_than_or_equal_to: 3218.6911}
  validates :consumer_id, presence: true 
  validates :business_id, presence: true

  def initialize(attributes=nil)
    attr_with_defaults = {:checked_in => 0, :time => 360}.merge(attributes)
    super(attr_with_defaults)
  end
end
