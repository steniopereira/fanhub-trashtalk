  module.exports = function(sequelize, DataTypes) {
    var Fan = sequelize.define("Fan", {
      fan_name: DataTypes.STRING,
      team_aff: DataTypes.TEXT,
      fan_username: DataTypes.STRING
    });

    Fan.associate = function(models) {
      // Associating Fan with Posts
      // When an Fan is deleted, also delete any associated Posts
      Fan.hasMany(models.Post, {
        onDelete: "cascade"
      });
    };

    return Fan;
  };