class Business < ApplicationRecord
    has_many :business_users
    has_many :lines, dependent: :destroy
    has_many :consumers, through: :lines
end
