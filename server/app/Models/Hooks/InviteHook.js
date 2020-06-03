'use strict'

const User = use('App/Models/User')

const InviteHook = exports = module.exports = {}

InviteHook.sendInvitationEmail = async (invite) => {
  const { email } = invite
  // verificar se ja existe a conta no servidor
  const invited = await User.findBy('email', email)

  if (invited) {
    await invited.teams().attach(invite.team_id)
  } else {
    console.log('CRIAR CONTA')

    //  envio de email
  }
}
