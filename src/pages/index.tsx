import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Items from '@/components/Items'
import { useState } from 'react'


export default function Home() {
  const [list, setList] = useState<string[]>(['쑥떡', '인절미', '송편', '꿀떡']);
  return (
    <main>
      <Navigation />
      <Items label='BEST ITEMS' title='남대문 떡집의 베스트 10 떡을 맛보세요!' contents={list} />
    </main>
  )
}
