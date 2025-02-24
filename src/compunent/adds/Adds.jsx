import { logEvent } from "firebase/analytics"
import analytics from "../../firebase"

const Adds = () => {
  return (
    <div
      className='w-full flex justify-center'
    >

      <img
        onClick={() => {
          logEvent(analytics, `click on adds`)
        }}
        className='rounded-xl w-10/12 sm:w-5/12 md:h-[200px]'
        src="/daily.png" />
    </div>
  )
}

export default Adds