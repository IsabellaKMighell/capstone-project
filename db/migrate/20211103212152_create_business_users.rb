class CreateBusinessUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :business_users do |t|
      t.string :username
      t.string :password_digest
      t.string :title
      t.belongs_to :business, null: false, foreign_key: true

      t.timestamps
    end
  end
end
