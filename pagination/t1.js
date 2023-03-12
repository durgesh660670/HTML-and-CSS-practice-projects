var pageArr = localStorage.getItem('pageArr') ? JSON.parse(localStorage.getItem('pageArr')) : [];
var noOfPagePerPage = 10;
var totalPages;




var previousBtnObj = document.querySelector('.previous')
var nextBtnObj = document.querySelector('.next')



previousBtnObj.addEventListener('click', () => {

    if (previousBtnObj.getAttribute("f-index") > 0)
        display(previousBtnObj.getAttribute("f-index") - 1, 5)


})



nextBtnObj.addEventListener('click', () => {

    if (parseInt(nextBtnObj.getAttribute("f-index")) < 4)
        display(parseInt(nextBtnObj.getAttribute("f-index")) + 1, 5)

})


var create = function () {



    for (var i = 0; i < 46; i++) {

        var page = {
            title: 'This is title ',
            desc: 'this is dgdg sgdgs sgsg sgsgs sjjssj sgsgs ssgg'
        }
        page.title = page.title + `${i}`;
        pageArr[i] = page;
    }


    localStorage.setItem('pageArr', JSON.stringify(pageArr));
}



var pagination = function (noOfPagePerPage, totalPages, currentPageIndex) {

    var pageInFodata = {
        noOfPagePerPage: noOfPagePerPage,
        totalPages: totalPages
    }


    return pageInFodata;
}

var pagebutton = function (currentPageIndex, lastPageIndex) {


    var pagButtonObj = document.querySelectorAll('.pageBtn');
    var nextButtonObj = document.querySelector('.next');
    var previousButtonObj = document.querySelector('.previous');

    previousButtonObj.setAttribute("f-index", currentPageIndex)
    nextButtonObj.setAttribute("f-index", currentPageIndex)
    previousButtonObj.setAttribute("l-index", lastPageIndex)
    nextButtonObj.setAttribute("l-index", lastPageIndex)

    if (previousButtonObj.getAttribute("f-index") == 0) {
        previousButtonObj.setAttribute("disabled", true)
        previousButtonObj.style.opacity = 0.2;

    }
    else {
        previousButtonObj.removeAttribute("disabled")
        previousButtonObj.style.opacity = 1;
    }
    if (nextButtonObj.getAttribute("f-index") == lastPageIndex - 1) {
        nextButtonObj.setAttribute("disabled", true)
        nextButtonObj.style.opacity = 0.2;

    }
    else {
        nextButtonObj.removeAttribute("disabled")
        nextButtonObj.style.opacity = 1;
    }

    pagButtonObj.forEach((e, i) => {

        if (pagButtonObj[i].getAttribute("value") == currentPageIndex + 1) {
            pagButtonObj[i].classList.add("active");
        }
    })


    pagButtonObj.forEach((e, i) => {

        pagButtonObj[i].addEventListener('click', () => {

            display(i, pagButtonObj.length)
        })
    })
}

var display = function (currentPageIndex, lastPageIndex) {

    var containerObj = document.querySelector('.container-data');
    var indexObj = document.querySelector('.index');

    var pageArr1 = [];

    pageArr1 = JSON.parse(localStorage.getItem('pageArr'));
    console.log(pageArr1)

    var text = '';

    var totalPages = pageArr1.length / noOfPagePerPage;



    if (totalPages.toString().includes('.')) {
        totalPages = parseInt(pageArr1.length / noOfPagePerPage) + 1;
    }
    else {
        totalPages = parseInt(pageArr1.length / noOfPagePerPage);
    }

    if (currentPageIndex + 1 == lastPageIndex) {
        var pageReminder = totalPages % noOfPagePerPage;
        for (var i = currentPageIndex * noOfPagePerPage; i < currentPageIndex * noOfPagePerPage + pageReminder; i++) {

            text += `<div class="card">
        <h3>${pageArr1[i].title}</h3>
        <p>${pageArr1[i].desc}</p>
      </div> `;

        }
        containerObj.innerHTML = text;

    }
    else {

        for (var i = currentPageIndex * noOfPagePerPage; i < currentPageIndex * noOfPagePerPage + noOfPagePerPage; i++) {

            text += `<div class="card">
            <h3>${pageArr1[i].title}</h3>
            <p>${pageArr1[i].desc}</p>
          </div> `;

        }
        containerObj.innerHTML = text;


    }


    var resultPagination = pagination(noOfPagePerPage, totalPages, currentPageIndex)
    var text1 = '';

    for (var i = 1; i <= resultPagination.totalPages; i++) {

        text1 += `
        <button class='pageBtn' value="${i}">${i}</button>
        `
    }

    indexObj.innerHTML = text1

    pagebutton(currentPageIndex, lastPageIndex)



}



window.addEventListener('load', () => {

    create()
    display(0)
})






