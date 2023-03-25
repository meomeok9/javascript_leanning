'use strict';
const cl = something => console.log(something);
const dgEBI = id => document.getElementById(id);

const newsContainer = dgEBI('news-container');
const btnNexts = document.querySelectorAll('#btn-next');
const btnPrevs = document.querySelectorAll('#btn-prev');
const pageNums = document.querySelectorAll('#page-num');

const pathV1 = function (page) {
  const country = 'us';
  if (page != null)
    return `https://newsapi.org/v2/top-headlines?country=${country}&category=${getCategory()}&pageSize=${getNumberItemInPage()}&page=${page}&&apiKey=${key}`;
  return `https://newsapi.org/v2/top-headlines?country=${country}&category=${getCategory()}&pageSize=${getNumberItemInPage()}&apiKey=${key}`;
};

const getdata = async function (page) {
  let res, data;
  try {
    res = await fetch(pathV1(page));
    //check conect to server
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

const nextFunc = async function () {
  setCurrentPage(1);
  const data = await getdata(getCurrentPage());
  const nums = Number(getNumberItemInPage());
  const maximumPage =
    Math.floor(data.totalResults / nums) +
    (data.totalResults % nums === 0 ? 0 : 1);
  //if cur page = max page cant press next button
  if (getCurrentPage() === maximumPage)
    btnNexts.forEach(btn => (btn.disabled = true));
  render(data.articles);
  pageNums.forEach(el => (el.textContent = getCurrentPage()));
};

const prevFunc = async function () {
  //cant preview when page = 1
  if (getCurrentPage() === 1) return;
  setCurrentPage(-1);
  //after current =2 then -1 after this click then disale prev button
  if (getCurrentPage() === 1) btnPrevs.forEach(btn => (btn.disabled = true));
  const data = await getdata(getCurrentPage());
  render(data.articles);
  pageNums.forEach(el => (el.textContent = getCurrentPage()));
};

btnNexts.forEach(btn => btn.addEventListener('click', nextFunc));
btnPrevs.forEach(btn => btn.addEventListener('click', prevFunc));

const init = async function () {
  try {
    const data = await getdata(getCurrentPage());
    //cl(data);
    render(data.articles);
  } catch (err) {
    console.error(err.message);
  }
};

init();
