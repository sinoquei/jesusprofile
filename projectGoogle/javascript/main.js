$(document).ready(function () {
    $('.header').height($(window).height());

})

$(".navbar a").click(function(){
    $("body,html").animate({
     scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)
    
   })

// music playlist //

const audioInfo = document.getElementById('audio');
audioInfo.addEventListener('playing', function (e) {
    console.log('Audio playback has started ...');
    console.log('Playback started at : ' + e.target.currentTime + ' seconds');
}, false);
audioInfo.addEventListener('pause', function (e) {
    console.log('Audio has been paused ...');
    console.log('Playback paused at : ' + e.target.currentTime + ' seconds');
}, false);

audioInfo.addEventListener('ended', function (e) {
    console.log('Playback has ended');
}, false);
audioInfo.addEventListener('volumechange', function (e) {
    console.log('Volume has changed ...');
    console.log('Volume is now ' + e.target.volume);
}, false);


// random fact generator //

function randomJ() {
const facts = ['I swam competitively for 12 years.', 'I was born in Hermosillo, Sonora.', 'I am a gemini.', 'I live in Texas.', 'My favorite food is pizza.', 'I have two dogs.', 'My smash mains are Ness, Zelda and Samus.', 'I invent cocktails.', 'My pronouns are they/he.', 'I love the beach.'];

const randomFact = Math.floor(Math.random() * (facts.length));
alert(facts[randomFact]);
    
}

