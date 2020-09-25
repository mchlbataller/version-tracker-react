import create from 'zustand'

const useStore = create(set => ({
    route: null,
    setRoute: (newRoute) => set(() => ({route: newRoute}))
}))

export default useStore