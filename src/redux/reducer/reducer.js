const initialState = {
    articles: [{ title: "Java", id: 1 }, { title: "Android", id: 1 }],
}

function rootReducer(state = initialState, action) {
    // switch (action.type) {
    //     case "ADD_ARTICLE":
    //         return Object.assign({}, state, {
    //             articles: state.articles.concat(action.payload)
    //         });
    //     default:
    //         return null;
    // }

    if (action.type === "ADD_ARTICLE") {
        // Wrong way
        // state.articles.push(action.payload);
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }

    return state;
}

export default rootReducer;