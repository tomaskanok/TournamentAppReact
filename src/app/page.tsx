"use client";
import { Inter } from 'next/font/google'
import { useState } from 'react';
import Fighter from './Fighter';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [fighters, setFighters] = useState([
    {
      "name": "John Smith",
      "wins": 8,
      "losses": 2,
      "gym": "Team Alpha Male",
      "weight": 93,
      "gender": "male"
    },
    {
      "name": "Mike Johnson",
      "wins": 6,
      "losses": 4,
      "gym": "Jackson Wink MMA",
      "weight": 93,
      "gender": "male"
    }
  ]);

  return (
    <main className="">
      <div className='flex justify-center divide-x'>
        <div className='flex'>
          <Fighter
            name={fighters[0].name}
            record={fighters[0].wins + "-" + fighters[0].losses}
            corner="blue" />
          <div className='mx-8'>Light heavyweight</div>
          <Fighter
            name={fighters[1].name}
            record={fighters[1].wins + "-" + fighters[1].losses}
            corner="red" />
        </div>        

        <div className='flex'>
          <Fighter
            name={fighters[0].name}
            record={fighters[0].wins + "-" + fighters[0].losses}
            corner="blue" />
          <div className='mx-8'>Light heavyweight</div>
          <Fighter
            name={fighters[1].name}
            record={fighters[1].wins + "-" + fighters[1].losses}
            corner="red" />
        </div>        
      </div>

    </main>
  )
}
