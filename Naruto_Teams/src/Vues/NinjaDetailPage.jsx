import React from 'react';
import { NinjaDetailProvider } from '../Controleurs/DetailContext';
import NinjaDetail from './NinjaDetail';

export default function NinjaDetailPage() {
  return (
    <NinjaDetailProvider>
      <NinjaDetail />
    </NinjaDetailProvider>
  );
}
