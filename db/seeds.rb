# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "seeding consumers"
10.times do
    Consumer.create(username: Faker::Name.name, password: "test")
end

puts "seeding businesses"

business_one = Business.create(name: "Starbucks", longitude: -73.99614, latitude: 40.730152)
business_two = Business.create(name: "Sticky's", longitude: -73.9920, latitude: 40.7588)
business_three = Business.create(name: "Perk Kafe", longitude: -73.9773, latitude: 40.7476)

puts "seeding businesses users"
4.times do 
    BusinessUser.create(username: Faker::Name.name, password: 'test', business_id: business_one.id)
end

3.times do 
    BusinessUser.create(username: Faker::Name.name, password: 'test', business_id: business_two.id)
end

3.times do 
    BusinessUser.create(username: Faker::Name.name, password: 'test', business_id: business_three.id)
end

