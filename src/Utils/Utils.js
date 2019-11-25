import React from 'react';
import { format as formatDate } from 'date-fns';


export function NiceDate({ date, format='Do MMMM YYYY' }) {
  return formatDate(date, format)
}