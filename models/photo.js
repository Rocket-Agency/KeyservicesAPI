const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    photo_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "photo_id"
    },
    photo_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "photo_name"
    },
    photo_description: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "photo_description"
    },
    photo_in_file: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "photo_in_file"
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "created"
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "updated"
    },
    deleted: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "deleted"
    },
    photo_ad_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "photo_ad_id",
      references: {
        key: "ad_id",
        model: "ad_model"
      }
    }
  };
  const options = {
    tableName: "photo",
    comment: "",
    indexes: [{
      name: "ad_id",
      unique: false,
      type: "BTREE",
      fields: ["photo_ad_id"]
    }]
  };
  const PhotoModel = sequelize.define("photo_model", attributes, options);
  return PhotoModel;
};