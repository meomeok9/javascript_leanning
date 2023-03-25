'use strict';
const cl = something => console.log(something);
const btn = document.getElementById('btn-submit');
const inputSear = document.getElementById('input-query');
const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');
const newsContainer = document.getElementById('news-container');
const pageNum = document.getElementById('page-num');
//Version2

const pathV2 = function (q, page) {
  const today = function () {
    const now = new Date();
    const year = String(now.getFullYear());
    const month = `${now.getMonth()}`.padStart(2, '0');
    const date = `${now.getDate()}`.padStart(2, '0');
    const newMonth = parseInt(month) + 1;
    return `${year}-${newMonth}-${date}`;
  };
  const from = today();
  //it happen when first search. page =1
  if (page != undefined)
    return `https://newsapi.org/v2/everything?q=${q}&pageSize=${getNumberItemInPage()}&page=${page}&apiKey=${key}`;
  return `https://newsapi.org/v2/everything?q=${q}&pageSize=${getNumberItemInPage()}&apiKey=${key}`;
};
const getData = async function (q, page) {
  let res, data;
  try {
    res = await fetch(pathV2(q, page));
    if (!res.ok) throw new Error('Cant connect to server');
    data = await res.json();
    return data;
  } catch (err) {
    console.error(err.message);
  }
};
function renderContent(data) {
  const html = `
          <div class="card flex-row flex-wrap">
              <div class="card mb-3" style="">
              <div class="row no-gutters">
                  <div class="col-md-4">
                      <img
                          src="${
                            data.urlToImage === null
                              ? '../FPT.png'
                              : data.urlToImage
                          }"
                          class="card-img"
                          alt="${data.description}"
                      />
                  </div>
                  <div class="col-md-8">
                  <div class="card-body">
                      <h5 class="card-title">${data.title}</h5>
                      <p class="card-text">${data.content}</p>
                      <a href="${data.url}" class="btn btn-primary">View</a>
                  </div>
                  </div>
              </div>
              </div>
          </div>
      
      `;
  newsContainer.insertAdjacentHTML('beforeend', html);
}

const render = function (articles) {
  newsContainer.textContent = '';
  articles.map(data => renderContent(data));
};

const search = async function () {
  // empty value will do nothing
  if (inputSear.value !== '') {
    const data = await getData(inputSear.value);
    render(data.articles);
    btnNext.disabled = false;
  }
};

let currentSearchPage = 1;
const next = async function () {
  currentSearchPage++;
  const data = await getData(inputSear.value, currentSearchPage);
  const nums = Number(getNumberItemInPage());
  const maximumPage =
    Math.floor(data.totalResults / nums) +
    (data.totalResults % nums === 0 ? 0 : 1);
  //disable Next button when page is max
  if (currentSearchPage === maximumPage) btnNext.disabled = true;
  render(data.articles);
  btnPrev.disabled = false;
  pageNum.textContent = currentSearchPage;
};

const prevs = async function () {
  currentSearchPage--;
  const data = await getData(inputSear.value, currentSearchPage);
  // disable Prevbutton when page is min
  if (currentSearchPage === 1) btnPrev.disabled = true;
  render(data.articles);
  pageNum.textContent = currentSearchPage;
};
// disable button when not search
function init() {
  btnNext.disabled = true;
  btnPrev.disabled = true;
}

document.addEventListener('keyup', async function (e) {
  if (e.key === 'Enter' && inputSear !== '') {
    e.preventDefault();
    await search();
  }
});

init();
btnNext.addEventListener('click', next);
btnPrev.addEventListener('click', prevs);
btn.addEventListener('click', search);
