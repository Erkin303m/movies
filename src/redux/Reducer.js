const initialState = [
    {
        dataKorzina: []
    }
];

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ALL_DATA":
            let data = [...state];
            data.push(...action.payload);
            return data

        case "LIKE":
            let data2 = [...state];
            data2[action.payload].adult = !data2[action.payload].adult;
            return data2

        case "KORZINA":
            let data3 = [...state];
            data3[0].dataKorzina.push(data3[action.payload]);
            return data3

        default:
            return state
    }
};


export default Reducer