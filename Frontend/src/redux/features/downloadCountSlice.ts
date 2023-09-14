
// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { getDownloadCount } from '../../utils/supabase'

// interface DownloadsState {
//   counts: Record<string, number>
// }

// const initialState: DownloadsState = {
//   counts: {},
// }

// export const downloadsSlice = createSlice({
//   name: 'downloads',
//   initialState,
//   reducers: {
//     setDownloadCount: (state, action: PayloadAction<{ itemId: string; count: number }>) => {
//       state.counts[action.payload.itemId] = action.payload.count
//     },
//   },
// })

// export const { setDownloadCount } = downloadsSlice.actions

// export const fetchDownloadCount = (itemId: string) => async (dispatch: any) => {
//   const count = await getDownloadCount(itemId)
//   dispatch(setDownloadCount({ itemId, count }))
// }

// export default downloadsSlice.reducer
// ---------------------------------------------------------
// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { supabase } from '../../utils/supabase'


// interface DownloadsState {
//   downloadCounts: any[]
// }

// const initialState: DownloadsState = {
//   downloadCounts: [],
// }

// export const downloadsSlice = createSlice({
//   name: 'downloads',
//   initialState,
//   reducers: {
//     setDownloadCounts: (state, action: PayloadAction<any[]>) => {
//       state.downloadCounts = action.payload
//     },
//   },
// })

// export const { setDownloadCounts } = downloadsSlice.actions

// export const fetchDownloadCounts = () => async (dispatch) => {
//   const { data } = await supabase.from('downloads').select()
//   if (data) {
//     dispatch(setDownloadCounts(data))
//   }
// }

// export default downloadsSlice.reducer

// ---------------------------------------------------------
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { supabase } from '../../utils/supabase'

interface DownloadCount {
  item_id: string
  count: number
}

interface DownloadsState {
  downloadCounts: DownloadCount[]
}

const initialState: DownloadsState = {
  downloadCounts: [],
}

export const downloadsSlice = createSlice({
  name: 'downloads',
  initialState,
  reducers: {
    setDownloadCounts: (state, action: PayloadAction<DownloadCount[]>) => {
      state.downloadCounts = action.payload
    },
    incrementDownloadCount: (state, action: PayloadAction<string>) => {
      const itemId = action.payload
      const index = state.downloadCounts.findIndex(item => item.item_id === itemId)
      if (index !== -1) {
        state.downloadCounts[index].count += 1
      } else {
        state.downloadCounts.push({ item_id: itemId, count: 1 })
      }
    },
  },
})

export const { setDownloadCounts, incrementDownloadCount } = downloadsSlice.actions

export const fetchDownloadCounts = () => async (dispatch) => {
  const { data } = await supabase.from('downloads').select()
  if (data) {
    dispatch(setDownloadCounts(data))
  }
}

export default downloadsSlice.reducer
