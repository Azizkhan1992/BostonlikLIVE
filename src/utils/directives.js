import Vue from 'vue';

import store from '@/plugins/store/store';


// import TokenService from "@/services/TokenService";


const can = {
    install(VueInstance) {
        VueInstance.prototype.can = (permissions) => {
            
            const rolesInStore = store.state.role;
            // console.log(rolesInStore)
           
            if (Array.isArray(permissions)) {
                for (let i = 0; i < permissions.length; i++) {
                    if (rolesInStore.includes(permissions[i])) {

                        return true;
                    } else {
                        continue;
                    }
                }
            } else {


                return rolesInStore.includes(permissions)
            }
        }
    }
}

Vue.use(can)