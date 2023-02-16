


var homePageData = function() {

  var g = localStorage.getItem('toDos')

  if (!g == '' || !g == null || !g == 'undefined') {

    var toDos = JSON.parse(g);


    // console.log(toDos1);

    for (const key of toDos) {

      var newElementObj = document.createElement('textarea');
      newElementObj.style.display='block';
      newElementObj.style.width='100%'
      var headingObj = document.createElement('h3');
      var paraObj = document.createElement('p');
      var cardObj = document.getElementById('card');

      headingObj.innerText = key.title;
      paraObj.innerText = key.desc
      newElementObj.appendChild(headingObj);
      newElementObj.appendChild(paraObj);
      cardObj.appendChild(newElementObj);

      newElementObj.classList.add('card1');

      //  console.log(key.title)

    }

  }

}


homePageData();


var add_btn = function () {

  var title = document.getElementById('title').value;
  var desc = document.getElementById('desc').value;

  var obj1 = {

    title: title,
    desc: desc,
    id: Math.trunc(Math.random() * 1000)

  }

  var f = localStorage.getItem('toDos')

  if (f == null) {
    var toDos = [];


    toDos.push(obj1);

    localStorage.setItem('toDos', JSON.stringify(toDos));


  }
  else {

    var toDos = JSON.parse(f);

    toDos.push(obj1);

    localStorage.setItem('toDos', JSON.stringify(toDos));

    var newElementObj = document.createElement('textarea');
    newElementObj.style.display='block';
    newElementObj.style.width='100%'
    var headingObj = document.createElement('h3');
    var paraObj = document.createElement('p');
    var cardObj = document.getElementById('card');

    headingObj.innerText = key.title;
    paraObj.innerText = key.desc
    newElementObj.appendChild(headingObj);
    newElementObj.appendChild(paraObj);
    cardObj.appendChild(newElementObj);

    newElementObj.classList.add('card1');

  }

}




