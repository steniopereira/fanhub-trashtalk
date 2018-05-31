module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
  post_title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
      }
    },
    post_content: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },

    fan_name: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    team_name: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }

  });

Post.associate = function(models) {
    // Posts belong to an Fans
    // A Post can't be created without a Fan due to the foreign key constraint
    Post.belongsTo(models.Fan, {
      foreignKey: {
        allowNull: false
      }
    });



  };
  
  return Post;
};