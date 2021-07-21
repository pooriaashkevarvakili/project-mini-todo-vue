import { createStore } from 'vuex'

export default createStore({
  state: {
    education:[
      {
        id:1,
        value:'دیپلم'
      },
      {
        id:2,
        value:'کاردانی'
      },
      {
        id:3,
        value:'کارشناسی'
      }
    ],
    madrak:[
      {
        id:'1',
        value:'لیسانس'
      },
      {
        id:2,
        value:'فوق لیسانس'
      },
      {
        id:3,
        value:'دکترا'
      }
    ]
  },
  mutations: {
    setEducation(state,education){
state.education=education
    },
    setMadrak(state,madrak){
      state.madrak=madrak
          }
  },
  actions: {
    getEducation({commit}){
commit('setEducation')
    },
    getMadrak({commit}){
      commit('setMadrak')
          },
  },
  modules: {
  }
})
