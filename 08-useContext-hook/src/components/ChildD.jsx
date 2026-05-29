import React, {useContext} from 'react'
import ChildC from './ChildC'
import { UserContext } from '../App'

const ChildD = () => {
    const user=useContext(UserContext)
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  )
}

export default ChildD
