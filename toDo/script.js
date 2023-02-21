var itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []

// console.log(itemsArray)

document.querySelector('#enter').addEventListener('click', () => {

    var item = document.querySelector('#item');
    createItem(item);
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
            </div>
        </div>
        <div class="save-div">

            <button class="saveBtn">Save</button>
           
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




window.addEventListener('load', () => {
    displayItems()
    // displayDate()
})