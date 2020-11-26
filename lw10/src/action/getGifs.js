import state from '../store.js';
async function requestApi(nameGif, limit, offset) {
	let url = new URL(
		'https://api.giphy.com/v1/gifs/search?api_key=FjKcR8w3kgQZ7xvrPlk1TDncvJXJtI1a&rating=g&lang=ru'
	);
	url.searchParams.append('q', nameGif);
	url.searchParams.append('limit', limit);
	url.searchParams.append('offset', offset);
	const response = await fetch(url);
	if (response.ok && response.status === 200) {
		const json = await response.json();
		const data = json.data;
		for (let i = 0; i < data.length; i++) {
			const data_gif = {};
			for (let key in data[i]) {
				data_gif.url = data[i]['url'];
				data_gif.title = data[i]['title'];
				data_gif.img = data[i]['images']['downsized']['url'];
				data_gif.width = data[i]['images']['downsized']['width'];
				data_gif.height = data[i]['images']['downsized']['height'];
			}
			state.gifs.push(data_gif);
		}
		return;
	} else {
		alert('Ошибка HTTP: ' + response.status);
	}
}

export default requestApi;
