import * as types from '../constants/ActionTypes';
import Tabletop from 'tabletop';
import slugify from 'slugify';

function saveDeputados(data) {
	return { type: types.SAVE_DEPUTADOS, data };
}

function saveDeputado(data) {
	return { type: types.SAVE_DEPUTADO, data };
}

function comissaoDeputados(data) {
	return { type: types.FILTER_COMISSAO_PARLAMENTAR, data: data };
}

export function filterDeputados(data, showComissao=true) {
	return (dispatch) => {
		let filtered = data;

		if (showComissao) {
			filtered = filtered.filter((v) => {
        if (v.politico_comissao == 'sim') {
          return v;
        }
      });
		}

		dispatch(comissaoDeputados(filtered));
	};
}

export function loadDeputados(state={}, name='') {
	return (dispatch) => {
		if (state.data) {
			Tabletop.init({
				key: '1cWg1D5fmG-Y8IFCRm-2CWQt0UZixreH8OS4wu90M_A8',
				callback: (data, tabletop) => {
					dispatch(saveDeputados(data));
					if (name !== '') {
						dispatch(loadDeputado({data}, name));
					}
					//dispatch(orderDeputados(state));
				},
				simpleSheet: true
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
				return (slugify(data['politico_nome']) == name ? data : null);
			});
			dispatch(saveDeputado(selectedParlamentar));
		}
	};
}
