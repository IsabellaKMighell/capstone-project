class BusinessUser < ApplicationRecord
    has_secure_password
    belongs_to :business

    def initialize(attributes=nil)
        attr_with_defaults = {:title => "business_user"}.merge(attributes)
        super(attr_with_defaults)
    end
end
