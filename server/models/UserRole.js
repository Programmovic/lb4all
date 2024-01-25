const mongoose = require('mongoose');

const userRoleSchema = new mongoose.Schema({
  RoleID: { type: String, required: true, unique: true },
  RoleName: { type: String, required: true },
});

const UserRole = mongoose.model('UserRole', userRoleSchema);

module.exports = UserRole;
