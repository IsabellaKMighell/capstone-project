class CreateLines < ActiveRecord::Migration[6.1]
  def change
    create_table :lines do |t|
      t.belongs_to :consumer, null: false, foreign_key: true
      t.belongs_to :business, null: false, foreign_key: true
      t.boolean :checked_in
      t.float :distance
      t.integer :time

      t.timestamps
    end
  end
end
