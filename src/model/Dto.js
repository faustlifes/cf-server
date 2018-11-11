import lodash from 'lodash';


const getUserDTO = () => ({
  name: '',
  firstName: '',
  lastName: '',
  email: '',
  password: null,
});

const getNewsDTO = () => ({
  type: null,
  date: null,
  user: null,
  title: '',
  text: '',
});

const merge = (from, to) => {
  if (!to) {
    throw new Error('object "to" should be specified');
  }
  const keys = Object.keys(to).filter(key => from[key]);
  const res = lodash.pick(from, keys);
  return { ...to, ...res };
};

export default {
  getNewsDTO,
  getUserDTO,
  merge,
};
