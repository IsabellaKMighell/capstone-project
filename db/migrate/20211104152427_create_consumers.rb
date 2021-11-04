class CreateConsumers < ActiveRecord::Migration[6.1]
  def change
    create_table :consumers do |t|
      t.string :username
      t.string :password_digest
      t.float :longitude
      t.float :latitude

      t.timestamps
    end
  end
end
