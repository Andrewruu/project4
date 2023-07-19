class CreateProduct < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.integer :id
      t.decimal :price, precision: 10, scale: 2
      t.text :description
      t.string :image

      t.timestamps
    end
  end
end
