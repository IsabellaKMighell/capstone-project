class CreateBusinessUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :business_users do |t|
      t.string :first_name
      t.string :last_name
      t.string :username
      t.string :password_digest
      t.string :avatar
      t.belongs_to :business, null: false, foreign_key: true

      t.timestamps
    end
  end
end
