const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    group_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "group_id"
    },
    group_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "group_name"
    }
  };
  const options = {
    tableName: "group",
    comment: "",
    indexes: []
  };
  const GroupModel = sequelize.define("group", attributes, options);
  return GroupModel;
};