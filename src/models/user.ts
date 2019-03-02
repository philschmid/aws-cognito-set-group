/** @format */

import {attribute, table, autoGeneratedHashKey, rangeKey} from '@aws/dynamodb-data-mapper-annotations'

@table('userTable')
export class User {
  @autoGeneratedHashKey()
  userid: string

  @attribute({
    // BUT, this also acts as the HashKey for your GSI
    indexKeyConfigurations: {
      NameGsiIndex: 'HASH',
    },
  })
  name: string

  @rangeKey({
    // BUT, this also acts as the HashKey for your GSI
    indexKeyConfigurations: {
      NameGsiIndex: 'RANGE',
    },
  })
  workspace: string

  @attribute()
  email: string
  @attribute()
  UserPoolId: string
  @attribute()
  group: string
  @attribute({defaultProvider: () => new Date()})
  createdAt?: Date
}
