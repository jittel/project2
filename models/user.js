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

    return User;
};