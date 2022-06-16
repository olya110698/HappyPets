import { FormActionTypes } from "../actionTypes";

export function dogForm() {
  return { type: FormActionTypes.DOG_FORM };
}
export function catForm() {
  return { type: FormActionTypes.CAT_FORM };
}
export function walkingForm() {
  return { type: FormActionTypes.WALKING_FORM };
}
export function overexposureForm() {
  return { type: FormActionTypes.OVEREXPOSURE_FORM };
}
export function dataForm() {
  return { type: FormActionTypes.DATA_FORM };
}
export function addressForm() {
  return { type: FormActionTypes.ADDRESS_FORM };
}
export function kg5Form() {
  return { type: FormActionTypes.KG5_SIZE };
}
export function kg20Form() {
  return { type: FormActionTypes.KG20_SIZE };
}
export function kg40Form() {
  return { type: FormActionTypes.KG40_SIZE };
}
export function kg40plusForm() {
  return { type: FormActionTypes.KG40PLUS_SIZE };
}

// // здесь мы вводим побочный эффект
// // лучше всего иметь их рядом с действиями, а не с папкой "effects"
// export function retrieveEpisodes() {
//   return function (dispatch) {
//     // первый вызов приступить к очистке значений
//     dispatch(getEpisodes());
//     // вернуть отправку набора при получении информации (это считается «побочным эффектом»)
//     return dispatch(setEpisodes(episodes));
//   };
// }
