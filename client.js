$(document).ready(onLoad);
var counter = 0;
function onLoad() {
  console.log('JQ');
  $('body').append('<button>Generate</button>');
  //event listeners
  $('button').on('click', createDiv);
  $('body').on('click', '#swap', yellowBG);
  $('body').on('click', '#delete', deleteDiv);
}

function createDiv() {
  $('body').append('<div id="append"></div>');
  $('#append').append('<p id="count"></p>');
  counter += 1;
  $('#count').text(counter);
  $('#append').append('<div class="generate"><button id="swap">Swap</button><button id="delete">Delete</button></div>');

}

function yellowBG() {
  console.log('yellowBG');
  $(this).parent().toggleClass('swap');
}

function deleteDiv() {
  $(this).parent().remove();
}
