let url = 'https://api.unsplash.com/search/photos?query=nature&per_page=30&orientation=landscape&client_id=MDoGd6F8J5kOZiqQAttb2VkNC6sxq_O9itoiLW-FIQQ';
const parent = document.getElementById('grid');
const searchBtn = document.getElementById('search');
const clearBtn = document.getElementById('cancel');
const input = document.getElementById('input');
getData();


clearBtn.addEventListener('click', function (event) {
    clearInput();
});
function clearInput() {
    input.value = '';
}

function showData(data) {
    const el = document.createElement('div');
    el.classList.add('img');
    el.style.backgroundImage = `url(${data})`;
    parent.appendChild(el);
}

function removeData() {
    let images = document.getElementsByClassName('img');
    // console.log(images.length);
    while (images.length != 0){
        images[0].parentNode.removeChild(images[0]);
    }
}

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    for (let i = 0; i < data['results'].length; i++) {
        showData(data['results'][i]['urls']['regular']);
    }
    if (document.getElementsByClassName('img').length == 0) {
        const el = document.createElement('div');
        el.classList.add('img');
        el.style.backgroundImage = "url(./assets/403.png)";
        parent.appendChild(el);
    }
    // console.log(data['results'].length);

}

searchBtn.addEventListener('click', function (event) {
    find(input);
});

function search(query) {
    if(event.key === 'Enter') {
        find(query);
    }
}

function find(query) {
    removeData();
    url = `https://api.unsplash.com/search/photos?query=${query.value}&per_page=30&orientation=landscape&client_id=MDoGd6F8J5kOZiqQAttb2VkNC6sxq_O9itoiLW-FIQQ`;
    getData();
}