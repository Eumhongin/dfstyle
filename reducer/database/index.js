const initialState = {
  character: {
    search: {
      result: undefined,
      timeline: undefined
    },

  },
};
const database = (state = initialState, {
  type,
  payload,
  idx
}) => {
  switch (type) {
    case 'DATABASE/UPDATE/CHARACTER/SEARCH/RESULT':
      return {
        ...state,
        character: {
          ...state.character,
          search: {
            ...state.character.search,
            result: payload,
          },
        },
      };

    default:
      return state;
  }
};
export default database;