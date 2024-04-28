1. ``` 3 ``` is printed because it was is a declared variable, due to this it holds its value and increments by 1 after every interation in the for loop until the restraint of prices.length is met.
2. ``` 150 ``` is printed because it's variable was declared in the for loop, meaning after the for loop finishes it stays. prices at index 2 is so 300 times (discount - [1] = 0.5) which is equal to 150.
3. The function will print ``` 150 ``` becaue ``` Math.round(discountedPrice * 100) / 100 where disocountedPrice = 150 ```
4. Returns the array [50, 100, 150] because the functions return the numbers inside from the old array at 50 percent discount and the original was [100, 200, 300]
5. Error becuase the variable is only avaioable in the local scope and line 12 is outside of that.
6. Error becuase discountedPrice is not allowed to be used at the scope for line 13 becuase it was declared inside the for loop and it is not available outside of it.
7. 150 is printed without erro rbecuase it was declared before the for loop meaning it is a global variable for the function. Meaning it works beucase line 14 is in the function.
8. Function returns the array [50, 100, 150] because the variable discounted is defined using "let" in the function itself so the scope does not affect the code running correctly.
9. Error because the variable i is not available at the scope for line 11.
10. 3 is printed because the array prices has 3 elements meaning its length is 3 which assigns it to the const length.
11. [50, 100, 150] is returned because it does the same thing number 8 does and does not round.
12. Notations
    a. student.name
    b. student["Grad Year"
    c. student.greeting()
    d. student["Favorite Teacher"].name
    e. student.courseLoad[0]
13. Arithmatic
    a. '32'
    b. 1
    c. 3
    d. '3null'
    e. 4
    f. 0
    g. '3undefined'
    h. NaN
14. Comparison
  a. true
  b. false
  c. true
  d. false
  e. false
  f. true
15. The == operator compares 2 values without compriong their data types. The === operator is more streamlined and compares the data types of the values with their values.
16. [answer](https://github.com/samhormozian1/sp24-cse110-lab4/blob/main/expose/javascript/part2-question16.js)
17. The result of modifyArray([1,2,3], doSomething) will be [2,4,6] because the function doSomething returns the double of an integer which is its parameter. So the array [1,2,3] doules and turns into [2,4,6].
18. [answer](https://github.com/samhormozian1/sp24-cse110-lab4/blob/main/expose/javascript/part2-question18.js)
19. The intial output of the code is 1 then 4 becuase they are not affected by the setTimeout function in the code. However the other 2 outputs are, so 3 is then outputted. Then after 1 second (1000 miliseconds) 2 will then get outputted. So the total output of this function is 1, then 4, then 3, then 2.
