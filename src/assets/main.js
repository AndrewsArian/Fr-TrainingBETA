const APIYT = 'https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=PLz72LYJWqg3BYyMc0geQjt8DoIRDtnAds&part=snippet&maxResults=50';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e82be558b2mshe055bb32c149208p14d851jsn3504bc6895f2',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlAPI){
    const response= await fetch(urlAPI, options);
    const data = await response.json();
    return data;
}

(async () => {
    try{
        const videos = await fetchData(APIYT)
        let view = `
        ${videos.items.map(video =>`
        <a href="https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}" target="_blank">
            <div class="group relative">
            
                <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt=" ${video.snippet.description}" class="w-full">
                </div>
            
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </div>
            </a>`).slice(0,4).join('')}
        `;
        content.innerHTML = view;
    } catch(error){
        console.log(error);
    }
})();

