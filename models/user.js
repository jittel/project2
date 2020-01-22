module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        // Giving the User model a username of type STRING with a minimum length
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [12]
            }
        },
        // Giving the User model a password of type STRING with a minimum length
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        },
        // Giving the User model a email of type STRING with a minimum length
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            }
        }

    });
    User.associate = function(models) {
        // We're saying that a Users should belong to an Author
        // A User can't be created without an Author due to the foreign key constraint
        User.hasMany(models.Task, {
          foreignKey: {
            allowNull: false
          }
        });
        User.belongsToMany(models.Task,{through:"UserTask"})
      };
    
      return User;
    };
    