let dummyData = [
  'Leonor@kellie.org',
  'ElmoreProsacco@willie.com',
  'Raleigh@silas.org',
  'Laisha@silas.org',
  'Merle@modesto.net',
  'ElmoreProsacco@Laisha.us',
  'ElmoreProsacco@erik.us',
  'JaclynKutch@erik.us',
  'Laisha@jactinthe.info',
  'Felicita@jon.com',
];

document.querySelector('.search-btn').addEventListener('click', () => {
  const searchData = document.querySelector('.search-input').value;
  const ajaxUrl = 'http://127.0.0.1:3000/ajax_send_search';
  const fetchUrl = 'http://127.0.0.1:3000/fetch_send_search';
  // sendAjax(ajaxUrl, searchData);
  sendFetch(fetchUrl, searchData);
});

const sendAjax = (url, data) => {
  data = JSON.stringify({ data });
  const xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(data);
  xhr.addEventListener('load', () => {
    document.querySelector('.ajax-result').innerHTML = ``;
    const result = JSON.parse(xhr.responseText);
    console.log('result : ', result);
    if (result.message !== 'ok') return;
    result.data.map((data) => {
      document.querySelector('.ajax-result').innerHTML += `${data}<br>`;
    });
  });
};

const sendFetch = async (url, data) => {
  data = JSON.stringify({ data });
  const option = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json;charset=utf-8',
    },
    body: data,
  };
  const response = await fetch(url, option);
  let responseJson = response.json();

  responseJson.then((res) => {
    const message = res.message;
    const data = res.data;
    if (message !== 'ok') return;
    data.map((el) => {
      document.querySelector('.fetch-result').innerHTML += `${el}<br>`;
    });
  });
};
