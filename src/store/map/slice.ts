import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './state';

import type { LatLngTuple } from 'leaflet';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { idMaps } from './types';

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setCenter: (state, action: PayloadAction<LatLngTuple>) => {
      state.view.center = action.payload;
    },
    setZoom: (state, action: PayloadAction<number>) => {
      state.view.zoom = action.payload;
    },
    setMapId: (state, action: PayloadAction<idMaps>) => {
      state.view.id = action.payload;
    },
  },
});
