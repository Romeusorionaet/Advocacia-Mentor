'use client'

import { useState, useEffect } from 'react'

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function Countdown() {
  const calculateTimeLeft = () => {
    const deadline = new Date('2024-11-21T11:31:00')
    const now = new Date()
    const difference = deadline.getTime() - now.getTime()

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      }
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>()

  useEffect(() => {
    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!timeLeft) {
    return <p className="mt-16 text-center">Carregando tempo...</p>
  }

  return (
    <div className="rounded-lg bg-orange-100 p-4 text-center text-yellow-800 shadow-md">
      <p className="text-lg font-bold">Oferta válida por:</p>
      <div className="mt-2 flex justify-center space-x-4">
        <div className="text-center">
          <p className="text-2xl font-extrabold">{timeLeft.days}</p>
          <p className="text-sm">Dias</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-extrabold">{timeLeft.hours}</p>
          <p className="text-sm">Horas</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-extrabold">{timeLeft.minutes}</p>
          <p className="text-sm">Minutos</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-extrabold">{timeLeft.seconds}</p>
          <p className="text-sm">Segundos</p>
        </div>
      </div>
    </div>
  )
}
