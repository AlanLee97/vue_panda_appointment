import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        storeIsLogin:false
    },
    mutations:{
        setLoginState(state, loginState){
            state.storeIsLogin = loginState;
            console.log("store: " + state.storeIsLogin);
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
