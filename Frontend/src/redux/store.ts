import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import authReducer  from './features/authSlice' 
import folderGridBoxReducer from './features/folderGridBoxSlice'
import rotatingContainerReducer from './features/rotatingContainerSlice'
import titleIconReducer from './features/titleIconSlice'
import folderCardReducer from './features/folderCardSlice'
import legalReducer from './features/LegalSlice'
import epubPreviewReducer from './features/EPUBPreviewSlice'
import officePreviewReducer from './features/officePreviewSlice'
import GridItemReducer from './features/GridItemSlice'
import step2Reducer from './features/step-2Slice'
import step3Reducer from './features/step3Slice'
import shareReducer from './features/shareSlice'
import audioPreviewReducer from './features/audioPreviewSlice'
import fetchOnMountReducer from './features/fetchOnMountSlice'
import useDriveStorageReducer from './features/useDriveStorageSlice'
import  downloadsReducer  from './features/downloadCountSlice'
import idReducer from './features/idSlice'

// import counterReducer from './features/one'
// import {api} from './features/url'
// import configReducer from './features/stepOneSlice'

export const store = configureStore({
  reducer: {  
    // counter: counterReducer, 
    // config: configReducer,
    auth: authReducer, 
    folderGridBox: folderGridBoxReducer,
    rotatingContainer:rotatingContainerReducer,
    titleIcon:titleIconReducer, 
    folderCard:folderCardReducer,
    legal:legalReducer,  
    epubPreview:epubPreviewReducer,
    officePreview:officePreviewReducer,
    // fileContent:fetchOnMountReducer, //not recommended
    // driveStorage:useDriveStorageReducer,  //not recommended
    gridItem:GridItemReducer,
    oAuthStep2:step2Reducer,
    oAuthStep3:step3Reducer,
    share:shareReducer, 
    audioPreview:audioPreviewReducer,
    downloads:downloadsReducer,
    id:idReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector