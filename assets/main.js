const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCF53WehY8YIkslIXiWtA4tQ&part=snippet%2Cid&order=date&maxResults=9';

const content = null || document.getElementById('content');

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '7d8a040abcmsh60c28bdd4517380p184656jsn50074f81dc45',
    'x-rapidapi-host': 'youtube-v311.p.rapidapi.com'
  }
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
  try {
    const videos= await fetchData(API);
    let view = `
    ${videos.items.map(video => `
      <div class="group relative">
            <div
              class="p-4 bg-black rounded-xl shadow-lg 
    transition duration-700 ease-in-out transform hover:scale-105 hover:shadow-2xl">
              <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="rounded-lg">
            </div>
            <div class="mt-4 flex justify-between">
              <h3 class="mt-2 text-lg font-bold text-black">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
              </h3>
            </div>
         </div>
      `).slice(0,4).join('')}

    `;
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }

})();