module.exports = function(sequelize, DataTypes) {
    var Picture = sequelize.define("Picture", {
        // Giving the model a Link of type STRING
        link: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    })

    Picture.associate = function(models) {
        // We're saying that a Picture should belong to a Task
        // A Picture can't be created without a task due to the foreign key constraint
        Picture.belongsTo(models.Task, {
            foreignKey: {
                allowNull: false
            }
        });
    };


    return Picture;
};