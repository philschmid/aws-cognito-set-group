/** @format */

import {User} from '../models/user'
import {mapper} from '../service/database'

export const createUser = (args: User) => {
  const toSave = Object.assign(new User(), args)
  console.log(toSave)
  return mapper
    .put(toSave)
    .then(objectSaved => {
      return objectSaved
    })
    .catch(err => {
      return err
    })
}
