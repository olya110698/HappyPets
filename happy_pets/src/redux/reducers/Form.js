import { FormActionTypes } from "../actionTypes";

function Form(state = FormActionTypes.initialFormState, action) {
  switch (action.type) {
    case FormActionTypes.DOG_FORM:
      return { ...state, loading: true };
    case FormActionTypes.CAT_FORM:
      return { ...state, loading: true };
    case FormActionTypes.WALKING_FORM:
      return { ...state, loading: true };
    case FormActionTypes.OVEREXPOSURE_FORM:
      return { ...state, loading: true };
    case FormActionTypes.DATA_FORM:
      return { ...state, loading: true };
    case FormActionTypes.ADDRESS_FORM:
      return { ...state, loading: true };
    case FormActionTypes.KG5_SIZE:
      return { ...state, loading: true };
    case FormActionTypes.KG20_SIZE:
      return { ...state, loading: true };
    case FormActionTypes.KG40_SIZE:
      return { ...state, loading: true };
    case FormActionTypes.KG40PLUS_SIZE:
      return { ...state, loading: true };
    default:
      return state;
  }
}

export default Form;
