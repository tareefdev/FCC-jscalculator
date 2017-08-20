$(document).ready(function () {
  var result = ''
  var temp

  function oneOperation() {
      lastOne = result[result.length -1]
      if (lastOne !== '.' && lastOne !== '-' && lastOne !== '+' && lastOne !== '/' && lastOne !== '*') {
        return true;
      } else {
        return false;
      }
    }

$('#js--ac').click(function () {
  result = ''
  $('#js--screen').html('')
})
$('#js--ce').click(function () {
  result = result.slice(0, -1)
  $('#js--screen').html(result)
})
$('#js--seven').click(function () {
  result += '7'
  $('#js--screen').html(result)
})
$('#js--eight').click(function () {
  result += '8'
  $('#js--screen').html(result)
})
$('#js--nine').click(function () {
  result += '9'
  $('#js--screen').html(result)
})
$('#js--four').click(function () {
  result += '4'
  $('#js--screen').html(result)
})
$('#js--five').click(function () {
  result += '5'
  $('#js--screen').html(result)
})
$('#js--six').click(function () {
  result += '6'
  $('#js--screen').html(result)
})
$('#js--one').click(function () {
  result += '1'
  $('#js--screen').html(result)
})
$('#js--two').click(function () {
  result += '2'
  $('#js--screen').html(result)
})
$('#js--three').click(function () {
  result += '3'
  $('#js--screen').html(result)
})
$('#js--zero').click(function () {
  result += '0'
  $('#js--screen').html(result)
})
$('#js--dot').click(function () {
  checkIfDotExist = result[result.length -1]
  if (checkIfDotExist !== '.') {
    result += '.'
    $('#js--screen').html(result)
  }

})
$('#js--subtract').click(function () {
  if (oneOperation() == true) {
    result += '-'
    $('#js--screen').html(result)
    }
})
$('#js--add').click(function () {
  if (oneOperation() == true) {
  result += '+'
  $('#js--screen').html(result)
}
})
$('#js--division').click(function () {
  if (oneOperation() == true) {
  result += '/'
$('#js--screen').html(result)
}
})
$('#js--multiply').click(function () {
  if (oneOperation() == true) {
  result += '*'
  $('#js--screen').html(result)
}
})
$('#js--result').click(function () {
  temp = eval(result)
  if (temp % 1 === 0) {
    $('#js--screen').html(temp)
  } else {
    $('#js--screen').html(temp.toFixed(5))
  }

})
})

function isInt(n) {
   return n % 1 === 0;
}
