class CreateConsumers < ActiveRecord::Migration[6.1]
  def change
    create_table :consumers do |t|
      t.string :first_name
      t.string :last_name
      t.string :username
      t.string :password_digest
      t.string :title
      t.string :avatar

      t.timestamps
    end
  end
end
