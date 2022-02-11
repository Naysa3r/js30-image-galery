let url = 'https://api.unsplash.com/search/photos?query=nature&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
const parent = document.getElementById('grid');

function showData(data) {
    const el = document.createElement('div');
    el.classList.add('img');
    el.style.backgroundImage = `url(${data})`;
    parent.appendChild(el);
}

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    for (let i = 0; i < data['results'].length; i++) {
        showData(data['results'][i]['urls']['regular']);
    }
    console.log(data['results'].length);

}

function search(query) {
    if(event.key === 'Enter') {
        url = `https://api.unsplash.com/search/photos?query=${query.value}&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`;
        getData();
    }
}

