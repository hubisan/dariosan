"""Project Euler"""
class Euler:
    def __init__(self):
        self.data = []

e = Euler()

def fac(num):
    "return factorial of number num"
    if num == 0:
        return 1
    else:
        return num * fac(num-1)

def sumDigits(num):
    "return sum of all digits in number num"
    s = str(num) # convert number to string of its digits.
    total = 0
    for i in s:
        total += int(i) # sum int value of each digit.
    return total

from random import *

class Greeter
  def initialize(name)
  @name = name.capitalize
  end

  def salute
  puts 'Hello #{@name}'
  end
  end

# Implementation of quicksort
# with python
def quicksort(array):
    _quicksort(array, 0, len(array) - 1)
    
def _quicksort(array, start, stop):
    if stop - start > 0:
        pivot, left, right = array[start], start, stop
        while left <= right:
            while array[left] < pivot:
                left += 1
            while array[right] > pivot:
                right -= 1
            if left <= right:
                array[left], array[right] = array[right], array[left]
                left += 1
                right -= 1
                _quicksort(array, start, right)
                _quicksort(array, left, stop)    
