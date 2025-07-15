import { useDispatch, useSelector } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"
import type { RootState, AppDispatch } from "./store"

// Usá este en lugar de useDispatch()
export const useAppDispatch: () => AppDispatch = useDispatch

// Usá este en lugar de useSelector()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
