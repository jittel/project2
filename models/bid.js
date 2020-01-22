module.exports = function(sequelize, DataTypes) {
    var Bid = sequelize.define("Bid", {
        // Giving the User model a bid price of type FLOAT
        bid_price: {
            type: DataTypes.FLOAT(10, 2),
            allowNull: false,
        },
        // Giving the User model a password of type STRING with a minimum length
        awarded: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    })

    Bid.associate = function(models) {
        // We're saying that a Bid should belong to an user and tasks
        // A Bid can't be created without an user and tasks due to the foreign key constraint
        Bid.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        Bid.belongsTo(models.Tasks, {
            foreignKey: {
                allowNull: false
            }
        });
    };


    return Bid;
};