//toggle button
$('.js-toggle').on('click', function () {
  $('.map-base').toggleClass('active');
});


//initialization of speech recognition starts here
const artyom = new Artyom();
var commands = [
{
  indexes: ["juro solemnemente que mis intenciones no son buenas"], 
  action: function () {
    $('.map-base').addClass('active');
  } },
{
  indexes: ["travesura realizada"],
  action: function () {
    $('.map-base').removeClass('active');
  } }];



artyom.addCommands(commands);

function startContinuousArtyom() {
  artyom.fatality();

  setTimeout(function () {
    artyom.initialize({
      lang: "es-SP",
      continuous: true,
      listen: true,
      speed: 1 }).
    then(function () {
      console.log("Ready to work !");
    });
  }, 250);
}

startContinuousArtyom();
//# sourceURL=pen.js