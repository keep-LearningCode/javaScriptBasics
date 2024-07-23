{
    let a=1;
    var b=2;
    const c=3;
}
//console.log(a);  // error
console.log(b);
//console.log(c);  //error

function user(){
    const username='ram';
    function userdetails(){
        const website='abc.com';
        console.log(username);
    }
    userdetails();
    //console.log(website)  // error
}
user();