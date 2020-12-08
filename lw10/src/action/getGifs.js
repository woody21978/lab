import state from '../store';

async function requestApi(nameGif, limit, offset) {
	const url = new URL(
		'https://api.giphy.com/v1/gifs/search?api_key=FjKcR8w3kgQZ7xvrPlk1TDncvJXJtI1a&rating=g&lang=ru'
	);
	url.searchParams.append('q', nameGif);
	url.searchParams.append('limit', limit);
	url.searchParams.append('offset', offset);
	const response = await fetch(url);
	if (response.ok && response.status === 200) {
		const json = await response.json();
		const { data } = json;
		for (let i = 0; i < data.length; i += 1) {
			const dataGif = {};
			Object.keys(data[i]).forEach(function getData() {
				dataGif.url = this.url;
				dataGif.title = this.title;
				dataGif.img = this.images.downsized.url;
				dataGif.width = this.images.downsized.width;
				dataGif.height = this.images.downsized.height;
			}, data[i]);
			state.gifs.push(dataGif);
		}
	} else {
		console.log(`Ошибка HTTP: ${response.status}`);
	}
}

export default requestApi;
