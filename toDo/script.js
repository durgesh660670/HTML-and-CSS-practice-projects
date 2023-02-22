var itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []

console.log(itemsArray)

document.querySelector('#submit').addEventListener('click', () => {

    var item = document.getElementById('item')
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


    itemsArray.push(item.value)

    localStorage.setItem('items', JSON.stringify(itemsArray))
    location.reload()

}


var displayItems = function () {

    var items = '';

    for (var i in itemsArray) {

        items += ` <div class="item">
        <div class="input-controller">

            <textarea name="" id="" cols="30" rows="10" disabled>${itemsArray[i]}</textarea>
            <div class="action-div">
            <i class="fa-sharp fa-solid fa-trash  deleteBtn"></i>
           
            <i class="fa-solid fa-pen-to-square editBtn"></i>
            <i class="fa-regular fa-star"></i>
            </div>
            
        </div>
        <div class="save-div">

            <button class="saveBtn">Save</button>
            <small>Edited</small>
           
        </div>
    </div>`

    }

    document.querySelector('.to-do-list').innerHTML = items;

    deleteListeners()
    editListeners()
    saveListeners()

}

var deleteListeners = function () {

    var deleteBtnObj = document.querySelectorAll('.deleteBtn');
    deleteBtnObj.forEach((e, i) => {

        // console.log(i)
        e.addEventListener('click', (i) => {
            deleteItem();
        })

    })
}

var deleteItem = function (i) {

    itemsArray.splice(i, 1);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    location.reload()
}



var editListeners = function () {
    var editBtnObj = document.querySelectorAll('.editBtn');
    var saveDivObj = document.querySelectorAll('.save-div')
    var inputsObj = document.querySelectorAll('.input-controller textarea')

    editBtnObj.forEach((e, i) => {

        e.addEventListener('click', () => {

            saveDivObj[i].style.display = 'block'
            inputsObj[i].disabled = false
        })
    })

}



var saveListeners = function () {

    var saveBtnObj = document.querySelectorAll('.saveBtn')
    var inputsObj = document.querySelectorAll('.input-controller textarea')
    saveBtnObj.forEach((e, i) => {

        e.addEventListener('click', () => {
            updateItem(inputsObj[i].value, i)
        })
    })
}

var updateItem = function (text, i) {


    itemsArray[i] = text
    localStorage.setItem('items', JSON.stringify(itemsArray))
    location.reload();
}


function displayDate() {

    var date = new Date().toString()
    date = date.split(" ")


    var dateObj = document.querySelector('.date');

    dateObj.innerHTML = `${date[2]}  ${date[1]} ${date[3]} `;
}



var search = function (e) {
    var key = e.keyCode;
    if (key == 13) {

        var searchObj = document.getElementById('search').value;
        // console.log(searchObj)
        // console.log(searchObj)
        if (searchObj && searchObj.length != 0) {
            var itemsIndexResult = seachingAlgo(searchObj, itemsArray)
            console.log(itemsIndexResult)
            if (itemsIndexResult) {

                var items = '';

                for (var i in itemsIndexResult) {

                    items += ` <div class="item">
                    <div class="input-controller">
            
                        <textarea name="" id="" cols="30" rows="10" disabled>${itemsArray[itemsIndexResult[i]]}</textarea>
                        <div class="action-div">
                        <i class="fa-sharp fa-solid fa-trash  deleteBtn"></i>
                       
                        <i class="fa-solid fa-pen-to-square editBtn"></i>
                        <i class="fa-regular fa-star"></i>
                        </div>
                        
                    </div>
                    <div class="save-div">
            
                        <button class="saveBtn">Save</button>
                        <small>Edited</small>
                       
                    </div>
                </div>`

                }

                document.querySelector('.to-do-list').innerHTML = items;
            }
            else {
                console.log(itemsIndexResult)
            }
        }
        else{
            console.log(searchObj)
        }
        deleteListeners()
        editListeners()
        saveListeners()
    }


}


var seachingAlgo = function (searchObj, itemsArray) {

    // console.log(searchObj)
    // console.log(itemsArray)
    var itemsIndex = []

    for (var i = 0; i < itemsArray.length; i++) {
        if (itemsArray[i].includes(searchObj))
            itemsIndex.push(i)
    }

    return itemsIndex;
}



window.addEventListener('load', () => {
    displayItems()
    hideNewToTOBox()
    // displayDate()
})