import React from 'react';
import ReactDOM from 'react-dom';
// reduxから提供されている組み込み関数を入れる
import { createStore } from 'redux';
//作成したstoreを全コンポーネントにわたす特殊なコンポーネント
import { Provider } from 'react-redux';

import './index.css';
import reducer from './reducers';
// componentは一つのフォルダ内で一括管理したほうがわかりやすい
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
// アプリ内で唯一　
// アプリ内の全てのstateはココに集約される
const store =  createStore(reducer)
// アプリ内の全てのコンポーネントから参照できるようにする
// 既存のコンポーネントをProviderコンポーネントでラップする。Store属性に渡す。
// propsのバケツリレーを使用しなくて良くなる
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root'));
registerServiceWorker();
