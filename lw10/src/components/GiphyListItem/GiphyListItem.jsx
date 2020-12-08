import React from 'react';
import { view } from '@risingstack/react-easy-state';
import './GiphyListItem.scss';

function GiphyListItem(props) {
	const { img, url, title, style } = props;
	return (
		<div className="card">
			<div className="card__gif">
				<img src={img} alt="GIF" style={style} />
			</div>
			<div className="card-text">
				<p className="card-text__title">{title}</p>
				<a href={url} className="card-text__link">
					Ссылка
				</a>
			</div>
		</div>
	);
}

export default view(GiphyListItem);
