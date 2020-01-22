module.exports = function(sequelize, DataTypes) {
  var Tasks = sequelize.define("Tasks", {
    
  });

  Tasks.associate = function(models) {
    // We're saying that a Tasks should belong to an Author
    // A Tasks can't be created without an Author due to the foreign key constraint
    Tasks.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Tasks;
};