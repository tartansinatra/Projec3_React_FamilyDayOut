class CreateActivities < ActiveRecord::Migration
  def change
    create_table :activities do |t|
      t.string :title
      t.integer :min_age
      t.integer :max_age
      t.integer :price
      t.text :weather
      t.text :add1
      t.text :add2
      t.text :add3
      t.text :postcode

      t.timestamps null: false
    end
  end
end
