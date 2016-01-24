

# Ruby Hash loop
warrior = {
	name: "peter",
	age: 101,
	ability: "Fight"
}

warrior.each_pair { |key, value| puts "#{key}: #{value}" }

# Output on the console
# $ Ruby test.rb
# name: peter
# age: 101
# ability: Fight