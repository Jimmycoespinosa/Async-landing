// Requiere la instalación del componente tailwindcss (Ayuda a resolver algunos warnings de estilos en el html).
// Comando: npm install -D tailwindcss
// Inicio:  npx tailwindscss init

// Requiere la instalación del componente gh-pages (Ayuda con el despliegue de la app final en git).
// Comando: npm install gh-pages --save-dev
// Cambios en *.json:  Agrega script "deploy".

const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCRayEAEods_IjRmsYObAtTw&part=snippet%2Cid&order=date&maxResults=9';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c9b2447e7bmsh8c8b4c04fd06860p1562b0jsn5e74f727bab2',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

// Función recursiva
(async () =>{
    try{
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
        <div class="group relative"
            <div 
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                <h3 class="text-sm text-gray-700>
                    <span aria-hidden="true" class="absolute inset-0"></span>${video.snippet.title}
                </h3>
            </div>
        </div>
        `).slice(0,4).join('')}
        `;
        content.innerHTML = view;
    }catch(error){
    console.log(error);
    }
})();