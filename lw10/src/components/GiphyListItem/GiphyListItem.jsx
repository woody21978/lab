import React from 'react';
import { view } from '@risingstack/react-easy-state';
import './GiphyListItem.scss';
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll.js';

function GiphyListItem(props) {
	const count = props.count;
	let template;
	if (count > 0) {
		const data = props.data;
		const colors = ['lime', 'purple', '#6633CC', '#66FFFF', '#CCFF00'];
		template = data.map(function (item, index) {
			const style = {
				height: `${item.height}px`,
			};
			for (let i = 0; i < data.length; i++) {
				const randomColor = colors[Math.floor(Math.random() * colors.length)];
				style.backgroundColor = randomColor;
			}
			return (
				<div className="card">
					<div className="card__gif">
						<img src={item.img} alt="GIF" style={style} />
					</div>
					<div className="card-text">
						<p className="card-text__title">{item.title}</p>
						<a href={item.url} className="card-text__link">
							Ссылка
						</a>
					</div>
				</div>
			);
		});
	} else {
		template = <p>Загрузка...</p>;
	}
	return (
		<div
			className="cards"
			onScroll={(event) => {
				InfiniteScroll(event);
			}}>
			{template}
		</div>
	);
}

export default view(GiphyListItem);
