# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "faker"

puts "Seeding rec centers..."
# Rec centers
RecCenter.create(
  name: "Central Park",
  address: "9651 E. Martin Luther King Jr Blvd. 80238",
  phone: Faker::PhoneNumber.cell_phone,
  description: "Central Park is a Regional Level recreation center located in the northeast area. Its facility features include: Weight and cardio rooms, Gymnasium, Spin studio.",
  opens_at: "08:00:00",
  closes_at: "21:00:00",
  image: "../images/map_image.png"
)
RecCenter.create(
  name: "La Alma",
  address: "1325 W. 11th Ave. 80204",
  phone: Faker::PhoneNumber.cell_phone,
  description: "La Alma is a Neighborhood Level recreation center located in the southwest area. Its facility features include: Multipurpose room, Game room with ping pong, foosball, and a pool table.",
  opens_at: "10:00:00",
  closes_at: "23:00:00",
  image: "../images/map_image.png"
)
RecCenter.create(
  name: "Carla Madison",
  address: "2401 E. Colfax Ave. 80206 ",
  phone: Faker::PhoneNumber.cell_phone,
  description: "Carla Madison is Denver's newest Regional Level Center located in the northeast area. Its facility features include: Weight and cardio room, Group fitness studio, Outdoor climbing wall",
  opens_at: "06:00:00",
  closes_at: "19:00:00",
  image: "../images/map_image.png"
)
RecCenter.create(
  name: "Washington Park",
  address: "701 S. Franklin St. 80209",
  phone: Faker::PhoneNumber.cell_phone,
  description: "Washington Park is a Regional Level recreation center located in the southeast area. Its facility features include: Weight and cardio rooms, Stretching room, Personal training",
  opens_at: "09:00:00",
  closes_at: "22:00:00",
  image: "../images/map_image.png"
)
RecCenter.create(
  name: "Harvey Park",
  address: "2120 S. Tennyson Way, 80219",
  phone: Faker::PhoneNumber.cell_phone,
  description: "Harvey Park is a Local Level recreation center in the southwest area. Its facility features include: Game room with billiards, Fitness room, Gymnasium",
  opens_at: "09:00:00",
  closes_at: "22:00:00",
  image: "../images/map_image.png"
)

puts "Seeding user_types..."

player = UserType.create(user_type: "player")
admin = UserType.create(user_type: "admin")

puts "Seeding users..."
# Users
20.times do
  User.create(
    email_address: Faker::Internet.email,
    password: "123",
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    user_type_id: 1
  )
end
User.create(
  email_address: "admin@admin.com",
  password: "123",
  first_name: "Aloosola",
  last_name: "BullneFever",
  user_type_id: 2
)

puts "Seeding sports type..."
# SportsType
SportsType.create(
  sports_type: "Pickleball",
  image:
    "https://media.istockphoto.com/photos/pickleball-two-paddles-and-a-ball-in-net-shadow-picture-id177208653?k=20&m=177208653&s=612x612&w=0&h=FNtjgKlYGBtdOjGv3dSoixabj0kwhim9tlgYr6W1Wbw="
)
SportsType.create(
  sports_type: "Tennis",
  image:
    "https://media.istockphoto.com/photos/tennis-game-at-night-picture-id917865742?k=20&m=917865742&s=612x612&w=0&h=KrxYRLKT3rTaD7SM4ApxWXQW-jWa-lN2SMDDbrz35Kc="
)
SportsType.create(
  sports_type: "Soccer",
  image:
    "https://media.istockphoto.com/photos/soccer-ball-flew-into-the-goal-soccer-ball-bends-the-net-against-the-picture-id1197582798?k=20&m=1197582798&s=612x612&w=0&h=wnbdKgg3oHpOR7feTYdwk_HPGIorN7qXDtb_9m93FpU="
)
SportsType.create(
  sports_type: "Ultimate",
  image:
    "https://media.istockphoto.com/photos/young-man-catching-frisbee-picture-id182892188?k=20&m=182892188&s=612x612&w=0&h=xg9asGB-INkbkjjs2SDAaOu7pGKnG0lGLPR0GnPexWY="
)
SportsType.create(
  sports_type: "Kickball",
  image:
    "https://media.istockphoto.com/photos/kickball-classic-picture-id172308766?k=20&m=172308766&s=612x612&w=0&h=FRCE0QBikXAyi8hqiszrGu1yPmrMKFtIh3bpMq6mS1Q="
)

puts "Seeding reservation type..."
# Reservation Type
ReservationType.create(reservation_type: "Booking")
ReservationType.create(reservation_type: "Out of service")

puts "Seeding resources..."
# Resources

Resource.create(rec_center_id: 1, name: "Pickleball Pro", sports_type_id: 1)
Resource.create(rec_center_id: 1, name: "Pickleball Beginners", sports_type_id: 1)
Resource.create(rec_center_id: 1, name: "Tennis Friendly", sports_type_id: 2)
Resource.create(rec_center_id: 1, name: "Tennis Pro", sports_type_id: 2)

Resource.create(rec_center_id: 2, name: "Pickleball 1", sports_type_id: 1)
Resource.create(rec_center_id: 2, name: "Pickleball 2", sports_type_id: 1)
Resource.create(rec_center_id: 2, name: "Pickleball 3", sports_type_id: 1)
Resource.create(rec_center_id: 2, name: "Pickleball 4", sports_type_id: 1)

Resource.create(rec_center_id: 3, name: "Pickleball 1", sports_type_id: 1)
Resource.create(rec_center_id: 3, name: "Pickleball 2", sports_type_id: 1)
Resource.create(rec_center_id: 3, name: "Tennis 1", sports_type_id: 2)
Resource.create(rec_center_id: 3, name: "Tennis 2", sports_type_id: 2)
Resource.create(rec_center_id: 3, name: "Tennis 3", sports_type_id: 2)
Resource.create(rec_center_id: 3, name: "Tennis 4", sports_type_id: 2)

Resource.create(rec_center_id: 4, name: "Court 1", sports_type_id: 1)

Resource.create(rec_center_id: 5, name: "Pickleball 1", sports_type_id: 1)
Resource.create(rec_center_id: 5, name: "Pickleball 2", sports_type_id: 1)
Resource.create(rec_center_id: 5, name: "Pickleball 3", sports_type_id: 1)
Resource.create(rec_center_id: 5, name: "Tennis 1", sports_type_id: 2)
Resource.create(rec_center_id: 5, name: "Tennis 2", sports_type_id: 2)

puts "Seeding reservations..."
# Reservations
200.times do
  random_seed = rand(10..17)
  end_time_seed = random_seed + 1
  faker_date = Faker::Date.between(from: Date.today, to: 7.days.from_now)
  start_time = "#{faker_date}T#{random_seed}:00:00"
  end_time = "#{faker_date}T#{end_time_seed}:00:00"

  Reservation.create(
    reservation_type_id: 1,
    resource_id: rand(1..20),
    user_id: rand(1..20),
    datetime_start: start_time,
    datetime_end: end_time
  )
end

puts "Finished seeding"
