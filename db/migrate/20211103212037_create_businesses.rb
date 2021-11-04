class CreateBusinesses < ActiveRecord::Migration[6.1]
  def change
    create_table :businesses do |t|
      t.string :name
      t.float :longitude
      t.float :latitude
      t.belongs_to :business_users

      t.timestamps
    end
  end
end
