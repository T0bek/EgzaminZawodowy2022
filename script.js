let main = document.getElementById('main');
let lan = document.getElementById('lan');
let pek = document.getElementById('pek');
let ser = document.getElementById('ser');
let wen = document.getElementById('wen');
let taj = document.getElementById('taj');
let heart = document.getElementById('heart');
let x=2;

lan.addEventListener('click', function(){
    main.src='lanzarotte.jpg';
});
pek.addEventListener('click', function(){
    main.src='pekin.jpg';
});
ser.addEventListener('click', function(){
    main.src='serengeti.jpg';
});
wen.addEventListener('click', function(){
    main.src='wenecja.jpg';
});
taj.addEventListener('click', function(){
    main.src='tajlandia.jpg';
});
heart.addEventListener('click', function(){
    if(x%2 == 0){
        heart.src = "icon-on.png"
    }
    else{
        heart.src = "icon-off.png"
    }
    x++;
});

// if(qwe%2==0){
//     heart.addEventListener('click', function(){
//         heart.src='icon-on.png';
//     });
//     qwe++;
// }
// else if(qwe%2!=0){
//     heart.addEventListener('click', function(){
//         heart.src='icon-off.png';
//     });
//     qwe++;
// }