# SecretSanta
A method to assign secret santas! 

## Useage 
### Commandline: 
Save your names in a names.txt, each on a separate line. 
`npm start`
Output is written to `output/` directory.  Each file is named for the assigned giver and contains the associated reciever. 

### As a module:
    var secretSanta = require('secretsanta');
    var names = ['Alice','Bob','Eve']//...
    console.log(secretSanta(names));


