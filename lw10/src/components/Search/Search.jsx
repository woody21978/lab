import React from 'react';
import { view } from '@risingstack/react-easy-state';
import state from '../../store';
import './Search.scss';
import requestApi from '../../action/getGifs';

function Search() {
  function changeSearch(e) {
    state.gifs = [];
    state.q = e.target.value;
    state.limit = 12;
    state.offset = 1;
    state.countGifs = 0;
    (async () => {
      await requestApi(state.q, state.limit, state.offset);
      state.countGifs = state.gifs.length;
    })();
  }
  return (
    <div className="search">
      <input
        onChange={changeSearch}
        type="text"
        className="search__input"
        placeholder="Введите название GIF"
        value={state.q}
      />
    </div>
  );
}

export default view(Search);
