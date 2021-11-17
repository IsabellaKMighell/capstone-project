class Consumer < ApplicationRecord
    has_secure_password
    has_many :lines
    has_many :businesses, through: :lines

    

    def initialize(attributes=nil)
        attr_with_defaults = {:title => "consumer", :avatar=>"https://e7.pngegg.com/pngimages/442/477/png-clipart-computer-icons-user-profile-avatar-profile-heroes-profile.png"}.merge(attributes)
        super(attr_with_defaults)
    end


end
