import React from 'react'
import Part from './Part'

export default function Content({ part1, exerciseNum1, part2, exerciseNum2, part3, exerciseNum3}){
  return (
    <>
      <Part part={part1} exerciseNum={exerciseNum1}/>
      <Part part={part2} exerciseNum={exerciseNum2}/>
      <Part part={part3} exerciseNum={exerciseNum3} />
    </>
  )
}
