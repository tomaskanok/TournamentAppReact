"use client";
import { Inter } from 'next/font/google'
import { useState } from 'react';
import Fighter from './Fighter';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [fighters, setFighters] = useState([
    {
      "name": "Daniel Johnson",
      "wins": 3,
      "losses": 3,
      "gym": "American Top Team",
      "weight": 93,
      "gender": "male"
    },
    {
      "name": "Michael Davis",
      "wins": 10,
      "losses": 2,
      "gym": "Blackzilians",
      "weight": 93,
      "gender": "male"
    },
    {
      "name": "David Rodriguez",
      "wins": 7,
      "losses": 4,
      "gym": "Jackson Wink MMA",
      "weight": 93,
      "gender": "male"
    },
    {
      "name": "Jason Lee",
      "wins": 8,
      "losses": 2,
      "gym": "Tristar Gym",
      "weight": 93,
      "gender": "male"
    },
    {
      "name": "Mark Thompson",
      "wins": 9,
      "losses": 1,
      "gym": "Team Quest",
      "weight": 93,
      "gender": "male"
    },
    {
      "name": "Paul Kim",
      "wins": 5,
      "losses": 2,
      "gym": "Alliance MMA",
      "weight": 93,
      "gender": "male"
    },
    {
      "name": "Robert Green",
      "wins": 3,
      "losses": 0,
      "gym": "American Kickboxing Academy",
      "weight": 93,
      "gender": "male"
    },
    {
      "name": "Sean Johnson",
      "wins": 4,
      "losses": 1,
      "gym": "Nova Uniao",
      "weight": 93,
      "gender": "male"
    }
  ]);

  return (
    <main className="pt-5">
      <div className='grid grid-rows-1 justify-center gap-4'>
        <div className='flex p-5 rounded-lg bg-white'>
          <Fighter
            name={fighters[0].name}
            record={fighters[0].wins + "-" + fighters[0].losses}
            corner="blue" />
          <div className='mx-8'>{fighters[0].weight} kg</div>
          <Fighter
            name={fighters[1].name}
            record={fighters[1].wins + "-" + fighters[1].losses}
            corner="red" />
        </div>   

        <div className='flex p-5 rounded-lg bg-white'>
          <Fighter
            name={fighters[2].name}
            record={fighters[2].wins + "-" + fighters[2].losses}
            corner="blue" />
          <div className='mx-8'>{fighters[2].weight} kg</div>
          <Fighter
            name={fighters[3].name}
            record={fighters[3].wins + "-" + fighters[3].losses}
            corner="red" />
        </div>  

        <div className='flex p-5 rounded-lg bg-white'>
          <Fighter
            name={fighters[4].name}
            record={fighters[4].wins + "-" + fighters[4].losses}
            corner="blue" />
          <div className='mx-8'>{fighters[4].weight} kg</div>
          <Fighter
            name={fighters[5].name}
            record={fighters[5].wins + "-" + fighters[5].losses}
            corner="red" />
        </div>  

        <div className='flex p-5 rounded-lg bg-white'>
          <Fighter
            name={fighters[6].name}
            record={fighters[6].wins + "-" + fighters[6].losses}
            corner="blue" />
          <div className='mx-8'>{fighters[6].weight} kg</div>
          <Fighter
            name={fighters[7].name}
            record={fighters[7].wins + "-" + fighters[7].losses}
            corner="red" />
        </div>       
      </div>

    </main>
  )
}
