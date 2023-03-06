import React from 'react'

interface Footerdata {
    header: string;
    list: string[]
  }


export const Footerdata = [
    {
        header: 'MEN',
        list : ['All men', 'Shirts', 'Shorts', 'boardshorts','Jackets']
    },
    {
        header: 'WOMEN',
        list : ['All women', 'Dresses', 'Jackets', 'Pants','Shirts']
    },
    {
        header: 'ABOUT',
        list : ['Theme features', 'Contact','Search']
    },
]

const prin = () =>{
    console.log(Footerdata[1])
} 