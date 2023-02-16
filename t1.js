
var homePageData = function () {

  var g = localStorage.getItem('toDos')

  if (!g == '' || !g == null || !g == 'undefined') {

    var toDos = JSON.parse(g);




    for (const key of toDos) {

      var newElementObj = document.createElement('textarea');
      var newElementEditObj = document.createElement('button');
      var newElementUpdateObj = document.createElement('button');

      var newElementEditNodeObj = document.createTextNode('EDIT')

      newElementEditObj.setAttribute("id","edit");

      var newElementUpdateNodeObj = document.createTextNode('UPDATE')


      newElementObj.style.display = 'inline';
      newElementObj.style.width = '70%'

      var newElementNodeObj = document.createTextNode(key.desc)
      newElementObj.setAttribute("readOnly", "true")
      var cardObj = document.getElementById('card');

      newElementObj.appendChild(newElementNodeObj);

      newElementEditObj.appendChild(newElementEditNodeObj);
      newElementUpdateObj.appendChild(newElementUpdateNodeObj);
      cardObj.appendChild(newElementObj);
      cardObj.appendChild(newElementEditObj)
      cardObj.appendChild(newElementUpdateObj)

      newElementObj.classList.add('card1');

      //  console.log(key.desc)

    }

  }

}


homePageData();


var add_btn = function () {

  var desc = document.getElementById('desc').value;

  var obj1 = {

    desc: desc,
    id: Math.trunc(Math.random() * 1000)

  }

  var f = localStorage.getItem('toDos')

  if (f == null) {
    var toDos = [];


    toDos.push(obj1);

    localStorage.setItem('toDos', JSON.stringify(toDos));

    var newElementObj = document.createElement('textarea');
    var newElementEditObj = document.createElement('button');
    var newElementUpdateObj = document.createElement('button');

    var newElementEditNodeObj = document.createTextNode('EDIT')

    newElementEditObj.setAttribute("id","edit");
    var newElementUpdateNodeObj = document.createTextNode('UPDATE')
    newElementObj.style.display = 'inline';
    newElementObj.style.width = '70%'

    var newElementNodeObj = document.createTextNode(obj1.desc)
    newElementObj.setAttribute("readOnly", "true")
    var cardObj = document.getElementById('card');

    newElementObj.appendChild(newElementNodeObj);

    newElementEditObj.appendChild(newElementEditNodeObj);
    newElementUpdateObj.appendChild(newElementUpdateNodeObj);
    cardObj.appendChild(newElementObj);
    cardObj.appendChild(newElementEditObj)
    cardObj.appendChild(newElementUpdateObj)

    newElementObj.classList.add('card1');


  }
  else {

    var toDos = JSON.parse(f);
    console.log(toDos);

    toDos.push(obj1)

    localStorage.setItem('toDos', JSON.stringify(toDos));

    var newElementObj = document.createElement('textarea');
    var newElementEditObj = document.createElement('button');
    var newElementUpdateObj = document.createElement('button');

    var newElementEditNodeObj = document.createTextNode('EDIT')

    newElementEditObj.setAttribute("id","edit");
    var newElementUpdateNodeObj = document.createTextNode('UPDATE')
    newElementObj.style.display = 'inline';
    newElementObj.style.width = '70%'

    var newElementNodeObj = document.createTextNode(obj1.desc)
    newElementObj.setAttribute("readOnly", "true")
    var cardObj = document.getElementById('card');

    newElementObj.appendChild(newElementNodeObj);

    newElementEditObj.appendChild(newElementEditNodeObj);
    newElementUpdateObj.appendChild(newElementUpdateNodeObj);
    cardObj.appendChild(newElementObj);
    cardObj.appendChild(newElementEditObj)
    cardObj.appendChild(newElementUpdateObj)

    newElementObj.classList.add('card1');


  }



}







