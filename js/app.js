const play = (animation) => {
    MotionUI.animateIn('#obj', animation);
}

$('#slide-right').on('click', ()=>{
    play("slide-in-right");
});

$('#slide-left').on('click', ()=>{
    play("slide-in-left");
});

$('#slide-up').on('click', ()=>{
    play("slide-in-up");
});

$('#slide-down').on('click', ()=>{
    play("slide-in-down");
});

$('#fade-in').on('click', ()=>{
    play("fade-in");
});

$('#shake').on('click', ()=>{
    play("shake");

    setTimeout(() => {
        $('#obj').removeClass("shake");
      }, "1000");
});

$('#wiggle').on('click', ()=>{
    play("wiggle");

    setTimeout(() => {
        $('#obj').removeClass("wiggle");
      }, "1000");
});


$('#combine').on('click', ()=>{
    $('#obj').addClass("combine");
    
    setTimeout(() => {
        $('#obj').removeClass("combine");
      }, "2000");
});


$('#serie').on('click', ()=>{
    $('body').addClass("is-animating");
    
    setTimeout(() => {
        $('body').removeClass("is-animating");
      }, "4000");
});