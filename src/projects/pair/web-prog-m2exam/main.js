let sidebar = document.getElementById('side');

function heartFunction() {
    if(arrState!=10) {
        sidebar.innerHTML += '<div class="messages"><div class="avatar"><img src='+card.src+' alt=""></div><div class="friend"><div class="user">'+username.innerHTML+'</div><div class="text">Say hello!</div></div></div>';
        unmatchFunction();
    }
    
}

let pic_arr = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/7.png','img/8.jpg','img/9.jpg','img/10.jpg','img/none.png'];

let name_arr = ['Chico','Lara','Tasha','Tyler','Alex','Trisha','Rocco','Henry','Ashley','Fred',''];

let age_arr = [', 8',', 6',', 9',', 7',', 12',', 5',', 10',', 17',', 21',', 7',''];

let distance_arr = ['12 kilometers away','30.1 kilometers away','6.7 kilometers away','112 kilometers away','89 kilometers away','4 kilometers away','1.7 kilometers away','99.2 kilometers away','32 kilometers away','69 kilometers away',''];

let card = document.getElementById('user');
let username = document.getElementById('name');
let age = document.getElementById('age');
let distance = document.getElementById('distance');

let arrState = -1;

function unmatchFunction() {
    if(arrState!=10){
        arrState+=1;
        card.src=pic_arr[arrState];
        username.innerHTML=name_arr[arrState];
        age.innerHTML=age_arr[arrState];
        distance.innerHTML=distance_arr[arrState];
    }
}