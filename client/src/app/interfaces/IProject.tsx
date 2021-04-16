import React from 'react'
import { ITimeEntry } from './ITimeEntry';

export interface IProject{
    id : number,
    name : string,
    totalHours : number,
    deadline : string,
    timeEntries : ITimeEntry[],
}


