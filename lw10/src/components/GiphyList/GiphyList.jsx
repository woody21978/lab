import React, { useEffect } from 'react';
import { view } from '@risingstack/react-easy-state';
import state from '../../store.js';
import GiphyListItem from '../GiphyListItem/GiphyListItem.jsx';
import requestApi from '../../action/getGifs.js';

function GiphyList() {
	useEffect(() => {
		if (state.offset === 1) {
			(async () => {
				await requestApi(state.q, state.limit, state.offset);
				state.countGifs = state.gifs.length;
			})();
		}
	}, []);
	return <GiphyListItem count={state.countGifs} data={state.gifs} />;
}

export default view(GiphyList);
