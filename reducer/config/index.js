const initialState = {
  identification: {
    version: '0.0.1-alpha',
    state: 'test',
    apiKey: 'exlublKURdfjHJrGe41zD7dTDsbfKTCF'
  },


};
const config = (state = initialState, {
  type,
  payload
}) => {
  switch (type) {

    default:
      return state;
  }
};
export default config;