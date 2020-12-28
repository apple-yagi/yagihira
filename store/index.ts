import { GetterTree, MutationTree, ActionTree } from 'vuex'

export const state = () => ({
  isDark: false,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  isDark: (state) => state.isDark,
}

export const mutations: MutationTree<RootState> = {
  SET_MODE: (state, mode: boolean) => (state.isDark = mode),
}

export const actions: ActionTree<RootState, RootState> = {
  changeMode({ commit }, { mode }) {
    commit('SET_MODE', mode)
  },
}
