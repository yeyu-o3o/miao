var yeyu_o3o = {
  compact: function (array) {
    var res = []
    for (var i = 0; i < array.length; i++) {
      if (array[i] == false || array[i] == null || array[i] == 0 || array[i] == '' || array[i] == undefined || array[i] == NaN) {

      } else {
        res.push(array[i])
      }
    }
    return array
  }

}


// https://www.lodashjs.com/
