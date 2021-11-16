class Business < ApplicationRecord
    has_many :business_users
    has_many :lines, dependent: :destroy
    has_many :consumers, through: :lines

    CATEGORIES = ["Food & Drink", "Shopping", "Entertainment", "Productivity", "Health"]
    validates :category, inclusion: {
        in: CATEGORIES,
        message: "must be one of: #{CATEGORIES.join(', ')}"
    }
end
