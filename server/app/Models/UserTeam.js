'use strict'

const Model = use('Model')

class UserTeam extends Model {
  static get traits () {
    return [
      '@provider:Adonis/Acl/HasRole',
      '@provider:Adonis/Acl/HasPermission'
    ]
  }

  roles () {
    return this.belongsTo('Adonis/Acl/Role')
  }

  perission () {
    return this.belongsTo('Adonis/Acl/Permission')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = UserTeam
