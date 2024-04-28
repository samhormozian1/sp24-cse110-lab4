1. Line 9 prints ``` values added: 20 ```
2. Line 13 prints ``` final result: 20 ```
3. Line 9 prints ``` values added: 20 ```
4. Line 13 is the reason the code returns an error becuase the variable result is in the global scope while the ``` let ``` command is in the local scope, meaning it is not available for use on line 13
5. The code prints an error becuase the variable ``` result ``` is a ``` const ``` which is illegal to reassign in javascript which means it stops at line 7.
6. The code returns an error becuase of the same reason as question 5, it stops at line 7 becuase it attempts to reassign a ``` const ``` variable.
