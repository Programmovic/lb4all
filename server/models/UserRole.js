const mongoose = require('mongoose');

const userRoleSchema = new mongoose.Schema({
  RoleID: { type: String, required: true, unique: true },
  RoleName: { type: String, required: true },
}, { timestamps: true });  // Add timestamps to the schema

// Pre-save middleware for auto-incrementing RoleID
userRoleSchema.pre('save', async function (next) {
  try {
    // Auto-increment RoleID if not set (for new documents)
    if (!this.RoleID) {
      this.RoleID = await this.constructor.getNewID('RoleID');
    }

    // Other pre-save logic for the UserRole schema

    next();
  } catch (error) {
    // Handle errors
    throw error;
  }
});

// Static method to get a new ID (RoleID)
userRoleSchema.statics.getNewID = async function (field) {
  const highestDoc = await this.findOne({}, { [field]: 1 }, { sort: { [field]: -1 } });
  return highestDoc ? highestDoc[field] + 1 : 1;
};

const UserRole = mongoose.model('UserRole', userRoleSchema);

module.exports = UserRole;
