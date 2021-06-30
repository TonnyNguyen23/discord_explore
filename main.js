// Show and Hidden Explore
var btn = document.querySelector('#explore');
var main = document.querySelector('#main');
btn.addEventListener('click', () => {
    if(main.style.display = 'none') {
        main.style.display = 'grid';
    }
})
// Change Color Menu and Content

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const listmenus = $$('.list-menu');
const titles = $$('.title');
const words = $$('.word');
const inputs = $$('input');

listmenus.forEach((listmenu, index) => {
    const title = titles[index];
    const input = inputs[index];
    const word = words[index];
    listmenu.onclick = function() {

        $('.list-menu.active').classList.remove('active');
        $('.title.active').classList.remove('active');
        $('.word.active').classList.remove('active');
        $('input.active').classList.remove('active');
        this.classList.add('active');
        title.classList.add('active');
        input.classList.add('active');
        word.classList.add('active');
    }
});

//Fetch API
var cardAPI = "http://localhost:3000/card";
fetch(cardAPI)
    .then(res => {
        return res.json();
    })
    .then(function(cards) {
        var htmls = cards.map(card => {
            return `
            <div class="card-1 col-span-3">
                <div class="card-picture">
                    <div class="card-img">
                    <img src="${card.img}" alt="">
                    </div>
                    <div class="card-avt">
                    <img src="${card.avt}" alt="">
                    </div>
                </div>

                <div class="card-text">
                    <div class="header-4">
                    ${card.header}
                    </div>
                    <div class="paper">
                    ${card.paper}
                    </div>
                    <div class="online">
                    <div class="left">${card.left}</div>
                    <div class="right">${card.right}</div>
                    </div> 
                </div>
            </div>
            `
        });
        document.querySelector('.card-row').innerHTML = htmls.join('');
    })
    .catch(function(err) {
        alert('URL is not true!')
    })
