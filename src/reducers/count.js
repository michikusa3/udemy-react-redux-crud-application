import { INCREMENT , DECREMENT } from '../actions';

//初期状態のstateを入れる変数
const initialtState = {value : 0};
//stateとactionを引数とする。stateには初めは状態が入ってないのでinitialStateを渡す。
//受け取ったactionのtypeによって、その後の処理が変わる(switch)
export default ( state = initialtState , action  ) => {
    switch (action.type){
        case INCREMENT:
            return {value: state.value + 1} ;
        
        case DECREMENT:
            return {value: state.value - 1} ;
        default:
            return state;
    }
} 