import * as types from '../constants/ActionTypes';
import Tabletop from 'tabletop';

function saveDeputados(data) {
	return { type: types.SAVE_DEPUTADOS, data };
}

export function showDeputado(name) {

}

export function loadDeputados(state={}) {
		return (dispatch) => {
			if (state.data) {
				Tabletop.init({
					key: '1cWg1D5fmG-Y8IFCRm-2CWQt0UZixreH8OS4wu90M_A8',
					callback: (data, tabletop) => {
						dispatch(saveDeputados(data));
					},
					simpleSheet: true
				});
			} else {
				dispatch(saveDeputados(state.data));
			}
		};
}
