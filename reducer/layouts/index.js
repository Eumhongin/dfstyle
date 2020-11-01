const initialState = {
  toast: {
    isActive: false,
    msg: '',
    type: 'success',
  },
  loading: false,
};
const layouts = (state = initialState, {
  type,
  payload
}) => {
  switch (type) {

    case 'LAYOUTS/LOADING/UPDATE':
      return {
        ...state,
        loading: payload
      }
      case 'LAYOUTS/TOAST/UPDATE':
        return {
          ...state,
          toast: payload,
        };
      default:
        return state;
  }
};
export default layouts;