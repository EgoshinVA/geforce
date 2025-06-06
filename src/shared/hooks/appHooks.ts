import { AppDispatch, AppStore, RootState } from '@/shared/store/store'
import { useDispatch, useSelector, useStore } from 'react-redux'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = () => useStore<AppStore>()