import Vue from 'vue';
import Vuetify, {VFlex, VLayout, VContainer, VImg} from 'vuetify/lib';
import fr from 'vuetify/src/locale/fr';

Vue.use(Vuetify, {
	components: {VFlex, VLayout, VContainer, VImg},
});

export default new Vuetify({
  	theme: {
    	options: {
        	customProperties: true,
      	},
    	themes: {
			light: {
				primary: '#ee44aa',
				secondary: '#424242',
				accent: '#82B1FF',
				error: '#FF5252',
				info: '#2196F3',
				success: '#4CAF50',
				warning: '#FFC107'
			},
    	},
  	},
    lang: {
      locales: { fr },
      current: 'fr',
    },
  	icons: {
    	iconfont: 'md',
  	},
});
