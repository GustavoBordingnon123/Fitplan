import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface SvgProps{
    color:string,
    size:number,
}


function StatisticsIcon({color, size}: SvgProps) {
  return (
    <Svg
      width={32}
      height={33}
      viewBox="0 0 32 33"
    >
      <Path
        d="M15.884.575c-.052.01-.103.022-.154.039a1.231 1.231 0 00-.96 1.23v1.231H3.691A3.692 3.692 0 000 6.767v16a3.694 3.694 0 003.692 3.693H14.77v.461l-6.693 3.347a1.238 1.238 0 101.077 2.23l5.616-2.808v.462a1.231 1.231 0 002.462 0v-.462l5.616 2.808a1.238 1.238 0 101.077-2.23L17.23 26.92v-.461h11.077A3.694 3.694 0 0032 22.767v-16a3.692 3.692 0 00-3.692-3.692H17.23v-1.23a1.23 1.23 0 00-1.347-1.27zM2.462 6.767h27.076v16H2.462v-16zm23.23 1.231a1.23 1.23 0 00-.73.346l-4.039 4.04-2.807-2.81a1.231 1.231 0 00-1.962.269L12.5 16.228l-1.5-3.77a1.23 1.23 0 00-2.039-.423L5.27 15.727A1.253 1.253 0 007.04 17.5l2.346-2.346 1.77 4.384a1.23 1.23 0 002.23.154l4.116-7.193 2.537 2.54a1.229 1.229 0 001.77 0l4.923-4.924a1.23 1.23 0 00-1.04-2.117z"
        fill={color}
      />
    </Svg>
  )
}

export default StatisticsIcon;