import Products from '../static-content/index.json';
export const getDataApi = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Products);
        }, 300);
    });
}

