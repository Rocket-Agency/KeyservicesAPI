const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    group_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "group_id"
    },
    group_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
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
  const GroupModel = sequelize.define("group_model", attributes, options);
  return GroupModel;
};