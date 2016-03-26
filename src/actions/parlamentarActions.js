import * as types from '../constants/ActionTypes';
import Tabletop from 'tabletop';
import slugify from 'slugify';

function saveDeputados(data) {
	return { type: types.SAVE_DEPUTADOS, data };
}

function saveDeputado(data) {
	return { type: types.SAVE_DEPUTADO, data };
}

export function comissaoDeputados(data, showComissao) {
	return { type: types.FILTER_COMISSAO_PARLAMENTAR, data, showComissao };
}

function orderDeputados(data) {
	return { type: types.ORDER_PARLAMENTARES, data };
}

export function loadDeputados(state={}, name='') {
	return (dispatch) => {
		if (state.data) {
			Tabletop.init({
				key: '1H_cnrYN6GjkTNynyL4PpJLMdIP-kaLrrOdtyukrwcAs',
				callback: (data, tabletop) => {
					data = data['Todos os Deputados'].elements;
					dispatch(saveDeputados(data));
					if (name !== '') {
						dispatch(loadDeputado({data}, name));
					}
					dispatch(orderDeputados(data));
					dispatch(comissaoDeputados(data, true));
				}
			});
		} else {
			dispatch(saveDeputados(state.data));
		}
	};
}

export function loadDeputado(state={}, name) {
	return (dispatch) => {
		if (state.data.length === 0) {
			dispatch(loadDeputados(state, name));
		} else if (state.data.length > 1) {
			let selectedParlamentar = [];
			selectedParlamentar = state.data.filter((data) => {
				return (slugify(data['title']) == name ? data : null);
			});
			dispatch(saveDeputado(selectedParlamentar));
		}
	};
}
