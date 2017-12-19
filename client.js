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
  var div = $('<div class="generate">');
  counter += 1;
  div.append('<p id="count">' + counter + '</p>');
  div.append('<button id="swap">Swap</button><button id="delete">Delete</button>');
  $('body').append(div);
}

function yellowBG() {
  console.log('yellowBG');
  $(this).parent().toggleClass('swap');
}

function deleteDiv() {
  $(this).parent().remove();
}
