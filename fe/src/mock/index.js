import Categories from './categories.json';
import House from './house.json';

const getAPIHouse = () => {
  new Promise((resolve) => {
    return House;
  });
};
const getAPICategories = () => {
  new Promise((resolve) => {
    return House;
  });
};

exports = { getAPIHouse, getAPICategories };
