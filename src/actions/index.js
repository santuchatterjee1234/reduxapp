export const increment = (nr) => {
    return {
        type: 'INCREMENT',
        payload: nr
    };
};

export const decrement = (nrs) => {
    return {
        type: 'DECREMENT',
        payloads: nrs
    };
};