# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "seeding consumers"
30.times do
    Consumer.create!(username: Faker::FunnyName.two_word_name, password: "test")
end

puts "seeding businesses"

business_one = Business.create!(name: "Starbucks", longitude: -73.99614, latitude: 40.730152, address: "25 Union Square W, New York, NY 10003", image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png")
business_two = Business.create!(name: "Sticky's", longitude: -73.9920, latitude: 40.7588, address: "24 E 23rd St, New York, NY 10010", image: "https://images.stickys.com/stickys-finger-joint_logo.png")

business_three = Business.create!(name: "NYC DMV", longitude:	-73.935242 , latitude:40.730610 , address:"145 W 30th St, New York, NY 10001" , image: "https://static-assets.ny.gov/sites/all/themes/ny_gov/images/nygov-logo.png")

business_four = Business.create!(name:"260 Sample Sale" , longitude: -73.986742, latitude: 40.745017, address:"261 Fifth Avenue New York, NY 10016" , image: "https://images.squarespace-cdn.com/content/v1/5eb46b958647180c34995e1c/1614373189357-7KSXN54A8BNTWH6LEOAN/260-Logo-LARGE_Black.png?format=1500w")

business_five = Business.create!(name:"MACE Cocktail Bar" , longitude:-73.998681 , latitude:40.733473 , address:"35 W. 8th Street New York 10011" , image: "https://images.squarespace-cdn.com/content/v1/607733688463f53c8ff482a3/1620405858658-XDKY0F9NBF1R2UI9L8QI/MACE_logo-full_white_WEB.png?format=1500w")

puts "seeding lines"

puts "seeding line for business one"
line_item_one = Line.create!(consumer_id:1 , business_id: 1 , distance: 100 )
line_item_two = Line.create!(consumer_id:2 , business_id: 1 , distance: 100 )
line_item_three = Line.create!(consumer_id:3 , business_id: 1 , distance: 100 )
line_item_four = Line.create!(consumer_id: 4 , business_id: 1 , distance: 100 )

puts "seeding line for business two"
line_item_five = Line.create!(consumer_id:5 , business_id: 2 , distance: 100 )
line_item_six = Line.create!(consumer_id:6, business_id: 2 , distance: 100 )
line_item_seven = Line.create!(consumer_id:7 , business_id: 2 , distance: 100 )
line_item_eight = Line.create!(consumer_id: 8 , business_id: 2 , distance: 100 )

puts "seeding line for business three"
line_item_nine = Line.create!(consumer_id:9 , business_id: 3 , distance: 100 )
line_item_ten = Line.create!(consumer_id:10, business_id: 3 , distance: 100 )
line_item_eleven = Line.create!(consumer_id:11 , business_id: 3 , distance: 100 )
line_item_twelve = Line.create!(consumer_id: 12 , business_id: 3 , distance: 100 )

puts "seeding line for business four"
line_item_thirteen = Line.create!(consumer_id:13 , business_id: 4 , distance: 100 )
line_item_fourteen = Line.create!(consumer_id:14, business_id: 4, distance: 100 )
line_item_fifteen = Line.create!(consumer_id:15 , business_id: 4 , distance: 100 )
line_item_sixteen = Line.create!(consumer_id: 16 , business_id: 4 , distance: 100 )

puts "seeding line for business five"
line_item_seventeen = Line.create!(consumer_id: 17 , business_id: 5 , distance: 100 )
line_item_eighteen = Line.create!(consumer_id:18, business_id: 5 , distance: 100 )
line_item_nineteen = Line.create!(consumer_id:19 , business_id: 5 , distance: 100 )
line_item_twenty = Line.create!(consumer_id: 20 , business_id: 5 , distance: 100 )