module.exports = function(sequelize, DataTypes) {
    var Tasks = sequelize.define("Task", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 60]
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        },
        bid_end_time: {
            type: DataTypes.DATE,
            allowNull: false
        },
        task_start: {
            type: DataTypes.DATE,
            allowNull: false,
            len: [1]
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        initial_price: {
            type: DataTypes.FLOAT(10, 2),
            allowNull: false,
        }
    });

    Tasks.associate = function(models) {
        // We're saying that a Tasks should belong to an Author
        // A Tasks can't be created without an Author due to the foreign key constraint
        Tasks.belongsTo(models.User, {
            foreignKey: {
                allowNull: true
            }
        });
        Tasks.belongsToMany(models.User, { through: "UserTask" });
        // Tasks.belongsToMany(models.Bid, { through: "TaskId" });
        Tasks.hasMany(models.Bid, {
            onDelete: "cascade"
        });
        Tasks.hasMany(models.Picture, {
            onDelete: "cascade"
        });
    };

    return Tasks;
};