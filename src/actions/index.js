//アクションクリエイター
export cosnt INCREMENT = 'INCREMENT';
export cosnt DECREMENT = 'DECREMENT';

export const increment = () => ({
    type : INCREMENT
})

export const decrement = () => ({
    type : DECREMENT
})

