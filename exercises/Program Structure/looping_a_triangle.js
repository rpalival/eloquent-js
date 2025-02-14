/* 
Desired output
#
##
###
####
#####
######
#######
*/
let charString = '#'
while ( charString.length <= 7) {
    console.log(charString);
    charString = charString + '#';
}

/*
TextBook Solution
for (let res = '#; res.length <= 7; res += '#') {
    console.log(res);
}
*/