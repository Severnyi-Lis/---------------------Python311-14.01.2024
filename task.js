window.addEventListener(
    'load',
    kuk
);
function chs(тык){
    тык.currentTarget.style.color = 'red';
    pol_inf.style.color='blue';
    pol_inf_2.style.color='red';
    console.log(ttt,pol_inf,pol_inf_2);
}
function one(тыгыдык){
    тыгыдык.currentTarget.style.backgroundColor='white';
    soup_1.style.backgroundColor='violet';
    console.log(nam,soup_1);
}
function two(hhh){
    hhh.currentTarget.style.backgroundColor='white'
    soup_2.style.backgroundColor='green';
    console.log(surnam,soup_2);
}
function three(lst){
    lst.currentTarget.style.backgroundColor='white';
    soup_3.style.backgroundColor='blue';
    console.log(middle_nam,soup_3);
}
function four(мурмур){
    мурмур.currentTarget.style.backgroundColor='white';
    soup_4.style.backgroundColor='magenta';
    console.log(born,soup_4);
}
function five(сыыыр){
    сыыыр.currentTarget.style.backgroundColor='white';
    soup_5.style.backgroundColor='red';
    console.log(log,soup_5);
}
function six(bro){
    bro.currentTarget.style.backgroundColor='white';
    soup_6.style.backgroundColor='royalblue';
    console.log(post,soup_6);
}
function seven(апчих){
    апчих.currentTarget.style.backgroundColor='white';
    soup_7.style.backgroundColor='lime';
    console.log(log_2,soup_7);
}
function kuk(event_start){
    ttt.addEventListener(
        'click',
        chs
    )
    nam.addEventListener(
        'click',
        one
    )
    surnam.addEventListener(
        'click',
        two
    )
    middle_nam.addEventListener(
        'click',
        three
    )
    born.addEventListener(
        'click',
        four
    )
    log.addEventListener(
        'click',
        five
    )
    post.addEventListener(
        'click',
        six
    )
    log_2.addEventListener(
        'click',
        seven
    )
}