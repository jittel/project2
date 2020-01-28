module.exports = function(sequelize, DataTypes) {
    var Bid = sequelize.define("Bid", {
        // Giving the Bid model a bid price of type FLOAT
        bid_price: {
            type: DataTypes.FLOAT(10, 2),
            allowNull: false,
        },
        // Giving the Bid model a awarded of type boolean
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
        Bid.belongsTo(models.Task, {
            foreignKey: {
                allowNull: false
            }
        });
    };


    return Bid;
};