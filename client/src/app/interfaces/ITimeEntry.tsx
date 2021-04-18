import React from 'react'

export interface ITimeEntry{
    id : number,
    dateAdded : string,
    projectId : number,
    hours : number,
    description: string
}