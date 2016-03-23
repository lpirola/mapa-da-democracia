import * as types from '../constants/ActionTypes';

export function saveDeputados(data, tabletop) {
	return { type: types.SAVE_DEPUTADOS, data };
}
