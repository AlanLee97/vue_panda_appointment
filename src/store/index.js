import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        isLogin:false
    },
    mutations:{
        setLoginState(state, loginState){
            state.isLogin = loginState;
            console.log("store: " + state.isLogin);
        }
    },
    actions:{

    },
    getters:{

    },
    modules:{

    }
});


export default store
