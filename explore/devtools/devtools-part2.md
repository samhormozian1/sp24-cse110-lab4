1. The bug in the code was that num1 and num2 which are the parameters of the function are being taken as strings instead of numbers, so when they were added tehy were concatnated. For example 2+2 which should be 4 became 22.
2. To convert string operations to integers, we can use the parseFloat function in order to convert num1 and num2 to float numbers which makes sure it uses arithmatic instead of concatnation. Picture is fix.png at expand/screenshots/fix.png