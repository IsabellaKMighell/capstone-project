class CreateBusinessUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :business_users do |t|
      t.string :username
      t.string :password_digest

      t.timestamps
    end
  end
end
