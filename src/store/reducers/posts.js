import {
    ADD_POST
} from '../actions/actionTypes'

const initialState = {
    posts: [
        {
            id: Math.random(),
            nickname: 'Rafael Arruda',
            email: 'rafael@mail.com',
            image: require('../../../assets/imgs/fence.jpg'),
            comments: [{
                nickname: 'John Sheldon',
                comment: 'Stunning'
            }, {
                nickname: 'Ana Julia',
                comment: 'Foto linda'
            }]
        }, {
            id: Math.random(),
            nickname: 'Francisco Leando',
            email: 'chick@mail.com',
            image: require('../../../assets/imgs/bw.jpg'),
            comments: []
        }
    ]
};

const reducer = (state = initialState, action) => {
    switch (action) {
        case ADD_POST: 
            return {
                ...state, 
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        default: return state;
    }
}

export default reducer