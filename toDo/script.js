var itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []

var noOfPagePerPage = 10;
var totalPages;



var previousBtnObj = document.querySelector('.previous')
var nextBtnObj = document.querySelector('.next')



previousBtnObj.addEventListener('click', () => {

    if (previousBtnObj.getAttribute("f-index") > 0)
        displayItems(previousBtnObj.getAttribute("f-index") - 1, 5)


})



nextBtnObj.addEventListener('click', () => {

    if (parseInt(nextBtnObj.getAttribute("f-index")) < 4)
        displayItems(parseInt(nextBtnObj.getAttribute("f-index")) + 1, 5)

})





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
    if (nextButtonObj.getAttribute("f-index") == lastPageIndex) {
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

            displayItems(i, pagButtonObj.length)
        })
    })
}


// console.log(itemsArray)

document.querySelector('#submit').addEventListener('click', () => {


    var item1 = document.getElementById('item1').value;
    var item2 = displayDate()
    var item = {
        item1: item1,
        item2: item2,
        item3: 'false'
    }
    createItem(item);
})

var hideNewToTOBox = function () {
    var newTB = document.querySelector('.new-to-do-box');
    newTB.style.display = 'none'

}

document.querySelector('#enter').addEventListener('click', () => {


    var toDoList = document.querySelector('.to-do-list');
    toDoList.style.display = 'none'
    var newTB = document.querySelector('.new-to-do-box');
    newTB.style.display = 'block'


})


var createItem = function (item) {

    itemsArray.unshift(item)

    localStorage.setItem('items', JSON.stringify(itemsArray))
    location.reload()

}


var displayItems = function (currentPageIndex, lastPageIndex) {

    var itemsArray1 = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []

    var indexObj = document.querySelector('.index');



    console.log(itemsArray1)

    if (itemsArray1 == undefined) {
        alert('djdj')
    }

    var items = ``;

    var totalPages = itemsArray1.length / noOfPagePerPage;

    

    if (totalPages.toString().includes('.')) {
        totalPages = parseInt(itemsArray1.length / noOfPagePerPage) + 1;
    }
    else {
        totalPages = parseInt(itemsArray1.length / noOfPagePerPage);
    }
    lastPageIndex=totalPages-1;
    if (currentPageIndex == lastPageIndex) {

        var pageReminder = itemsArray1.length % noOfPagePerPage;
        for (var i = currentPageIndex * noOfPagePerPage; i < currentPageIndex * noOfPagePerPage + pageReminder; i++) {

            
            items += ` <div class="item">
            <div class="input-controller">
    
                <textarea name="" id="" cols="30" rows="10" disabled>${itemsArray1[i].item1}</textarea>
                <div class="action-div">
                <i class="fa-sharp fa-solid fa-trash  deleteBtn"></i>
               
                <i class="fa-solid fa-pen-to-square editBtn"></i>
                <i class="fa-regular fa-star starBtn"></i>
                </div>
                
            </div>
            <div class="save-div">
    
                <button class="saveBtn">Save</button>
                <small id="date">Edited:${itemsArray1[i].item2}</small>
               
            </div>
        </div>`;

        }
        document.querySelector('.to-do-list').innerHTML = items;

    }
    else {


        for (var i = currentPageIndex * noOfPagePerPage; i < currentPageIndex * noOfPagePerPage + noOfPagePerPage; i++) {


            items += ` <div class="item">
            <div class="input-controller">
    
                <textarea name="" id="" cols="30" rows="10" disabled>${itemsArray1[i].item1}</textarea>
                <div class="action-div">
                <i class="fa-sharp fa-solid fa-trash  deleteBtn"></i>
               
                <i class="fa-solid fa-pen-to-square editBtn"></i>
                <i class="fa-regular fa-star starBtn"></i>
                </div>
                
            </div>
            <div class="save-div">
    
                <button class="saveBtn">Save</button>
                <small id="date">Edited:</small>
               
            </div>
        </div>`
        }
        document.querySelector('.to-do-list').innerHTML = items;




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



    // document.querySelector('.to-do-list').innerHTML = items;

    deleteListeners()
    editListeners()
    saveListeners()
    starListeners()

}

var deleteListeners = function () {

    var deleteBtnObj = document.querySelectorAll('.deleteBtn');
    deleteBtnObj.forEach((e, i) => {


        e.addEventListener('click', () => {
            deleteItem(i);
        })

    })
}

var deleteItem = function (i) {


    itemsArray.splice(i, 1);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    location.reload()
}



var editListeners = function (searchElementsIndex) {
    var editBtnObj = document.querySelectorAll('.editBtn');
    var saveDivObj = document.querySelectorAll('.save-div')
    var inputsObj = document.querySelectorAll('.input-controller textarea')

    editBtnObj.forEach((e, i) => {


        e.addEventListener('click', () => {

            if (searchElementsIndex) {
                console.log('e:' + e)
                console.log('i:' + i)
                console.log('searchElementsIndex:' + searchElementsIndex)
            }

            saveDivObj[i].style.display = 'block'
            inputsObj[i].disabled = false
        })
    })

}




var saveListeners = function (searchElementsIndex) {

    var saveBtnObj = document.querySelectorAll('.saveBtn')
    var inputsObj = document.querySelectorAll('.input-controller textarea')
    saveBtnObj.forEach((e, i) => {


        e.addEventListener('click', () => {
            if (searchElementsIndex) {
                console.log('e:' + e)
                console.log('i:' + i)
                console.log('searchElementsIndex:' + searchElementsIndex)
                updateItem(inputsObj[i].value, searchElementsIndex)
            }
            else {
                console.log('e:' + e)
                console.log('i:' + i)
                updateItem(inputsObj[i].value, i)
            }

        })
    })
}

var updateItem = function (text, i) {


    itemsArray[i].item1 = text
    itemsArray[i].item2 = displayDate()
    localStorage.setItem('items', JSON.stringify(itemsArray))
    location.reload();
}


var starListeners = function () {

    var starBtnObj = document.querySelectorAll('.starBtn');
    starBtnObj.forEach((e, i) => {


        e.addEventListener('click', () => {
            itemsArray[i].item3 = 'true';
            localStorage.setItem('items', JSON.stringify(itemsArray))
            starBtnObj[i].classList('')
            location.reload()
        })

    })
}

var displayDate = function () {

    var date = new Date().toString()

    date = date.split(" ")


    var dateObj = document.querySelector('.date');

    return `${date[2]}-${date[1]}-${date[3]}-${date[4]}`;
}



var search = function (e) {
    var key = e.keyCode;
    if (key == 13) {

        var itemsIndexResult = [];
        var searchObj = document.getElementById('search').value;
        // console.log(searchObj)
        // console.log(searchObj)
        if (searchObj && searchObj.length != 0) {
            itemsIndexResult = seachingAlgo(searchObj, itemsArray)


            if (itemsIndexResult) {

                var items = '';

                for (var i in itemsIndexResult) {

                    items += ` <div class="item">
                    <div class="input-controller">
            
                        <textarea name="" id="" cols="30" rows="10" disabled>${itemsArray[itemsIndexResult[i]].item1}</textarea>
                        <div class="action-div">
                        <i class="fa-sharp fa-solid fa-trash  deleteBtn"></i>
                       
                        <i class="fa-solid fa-pen-to-square editBtn"></i>
                        <i class="fa-regular fa-star"></i>
                        </div>
                        
                    </div>
                    <div class="save-div">
            
                        <button class="saveBtn">Save</button>
                        <small id="date">Edited:${itemsArray[itemsIndexResult[i]].item2}</small>
                       
                    </div>
                </div>`

                }

                document.querySelector('.to-do-list').innerHTML = items;
            }
            else {
                console.log(itemsIndexResult)
            }
        }
        else {
            console.log(searchObj)
        }
        deleteListeners()
        editListeners(itemsIndexResult)
        saveListeners(itemsIndexResult)
    }


}


var seachingAlgo = function (searchObj, itemsArray) {

    // console.log(searchObj)
    // console.log(itemsArray)
    var itemsIndex = []

    for (var i = 0; i < itemsArray.length; i++) {
        if (itemsArray[i].item1.includes(searchObj))
            itemsIndex.push(i)
    }

    return itemsIndex;
}


const openSidebar = () => {



    let sidebarObj = document.getElementById('side-bar')
    let contentObj = document.getElementById('content')
    let checkObj = document.getElementById('check')

    sidebarObj.style.display = 'none'

    // alert(contentObj);

    contentObj.style.marginLeft = '1%'


}

const closeSidebar = () => {



    let sidebarObj = document.getElementById('side-bar')
    let contentObj = document.getElementById('content')


    sidebarObj.style.display = 'block'

    // alert(contentObj);

    contentObj.style.marginLeft = '20%'
}


window.addEventListener('load', () => {
    displayItems(0,0)
    hideNewToTOBox()
    // displayDate()
})