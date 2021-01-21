/**
 * Exports
*/

export const UserSchema = {
  model: {
    id: 'number',
    email: 'string',
    email_verified_at: 'datetime',
    status: 'enum'
  },

  enum: {
    status: {
      Unverified: 'Unverified',
      Suspended: 'Suspended',
      Ok: 'Ok'
    }
  }
};
