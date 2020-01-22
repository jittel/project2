module.exports = function(sequelize, DataTypes) {
  var Tasks = sequelize.define("Tasks", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,60]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    bid_end_time: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    task_start: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    catagory: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    }
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
