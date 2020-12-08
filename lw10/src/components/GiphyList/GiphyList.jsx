import React, { useEffect } from 'react';
import { view } from '@risingstack/react-easy-state';
import './GiphyList.scss';
import state from '../../store';
import GiphyListItem from '../GiphyListItem/GiphyListItem';
import requestApi from '../../action/getGifs';
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll';

function GiphyList() {
	useEffect(() => {
		if (state.offset === 1) {
			(async () => {
				await requestApi(state.q, state.limit, state.offset);
				state.countGifs = state.gifs.length;
			})();
		}
	}, []);
	return (
		<div
			className="cards"
			onScroll={(event) => {
				InfiniteScroll(event);
			}}
		>
			{state.gifs.length > 0 ? (
				state.gifs.map((item) => {
					const colors = ['lime', 'purple', '#6633CC', '#66FFFF', '#CCFF00'];
					const style = {
						height: `${item.height}px`,
					};
					for (let i = 0; i < colors.length; i += 1) {
						const randomColor =
							colors[Math.floor(Math.random() * colors.length)];
						style.backgroundColor = randomColor;
					}
					return (
						<GiphyListItem
							img={item.img}
							url={item.url}
							title={item.title}
							style={style}
						/>
					);
				})
			) : (
				<span className="warning">Данных нет</span>
			)}
		</div>
	);
}

export default view(GiphyList);
