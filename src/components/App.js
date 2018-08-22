import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment,decrement } from '../actions'

class App extends Component {
  // Appの初期化時に行うコールバックがconstructor
  // reduxではコールバックをreducerで行う
  // constructorはいらない

  // constructor(props){
  //   super(props);
  //   this.state = {count : 0};
  // }

  // アクションクリエイターで処理を確保して、アクションクリエイターから処理を呼ぶことで同じ動きを実装する
  // handlePlusButton = () =>{
  //   this.setState({count : this.state.count + 1});
  // }
  
  // handleMinusButton = () => {
  //   this.setState({count : this.state.count - 1});
  // }

//   render(){
//     return(
//       <React.Fragment> 
//         <div>count :{this.state.count}</div>
//         <button onClick = {this.handlePlusButton}>+1</button>
//         <button onClick = {this.handleMinusButton}>+1</button>
//       </React.Fragment>
//     );
// }

render(){
  const props = this.props
  return(
    <React.Fragment> 
      <div>count :{ props.value }</div>
      <button onClick = {props.increment}>+1</button>
      <button onClick = {props.decrement}>+1</button>
    </React.Fragment>
  );
}
}
// stateの情報からコンポーネントに必要な情報を取り出して、コンポーネント内のpropsとしてマッピングする機能がある
// 引数には状態のトップレベルを示すstateを書く
// どういった内容を対応させるのかを関数の戻り値として定義する
const mapStateToProps = (state) => ({value: state.count.value})
//reducerにタイプに応じた対応をさせるのがdispatch関数
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})
export default connect(mapStateToProps,mapDispatchToProps)(App)
