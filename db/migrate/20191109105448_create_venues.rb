class CreateVenues < ActiveRecord::Migration[6.0]
  def change
    create_table :venues do |t|
      t.string :venue_name
      t.string :street_address
      t.string :city
      t.string :state
      t.string :zipcode
      t.string :phoneNumber

      t.timestamps
    end
  end
end
