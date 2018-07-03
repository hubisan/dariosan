# The Greeter class
class Greeter
  def initialize(name)
    @name = name.capitalize
  end

  def salute
    puts 'Hello #{@name}'
  end
end

# Create a new object
g = Greeter.new("world")

# Output "Hello World!"
g.salute

# Sieve of Eratosthenes

def eratosthenes(n)
  nums = [nil, nil, *2..n]
  (2..Math.sqrt(n)).each do |i|
    (i**2..n).step(i){|m| nums[m] = nil } if nums[i]
  end
  nums.compact
end
