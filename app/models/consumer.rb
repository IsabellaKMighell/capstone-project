class Consumer < ApplicationRecord
    has_secure_password
    has_many :lines
    has_many :businesses, through: :lines

    def initialize(attributes=nil)
        attr_with_defaults = {:longitude => 0.0, :latitude=> 0.0, :title => "consumer"}.merge(attributes)
        super(attr_with_defaults)
    end
end
