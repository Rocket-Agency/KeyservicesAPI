const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    photo_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "photo_id"
    },
    photo_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "photo_name"
    },
    photo_filename: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "photo_filename"
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
    photo_link: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "photo_link"
    },
    photo_size: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: null,
      field: "photo_size"
    },
    photo_ad_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: null,
      field: "photo_ad_id"
    },
    deleted: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "deleted"
    },
    // photo_ad_id: {
    //   type: DataTypes.INTEGER(11),
    //   allowNull: false,
    //   primaryKey: false,
    //   autoIncrement: false,
    //   comment: null,
    //   field: "photo_ad_id",
    //   references: {
    //     key: "ad_id",
    //     model: "ad_model"
    //   }
    // }
  };
  const options = {
    tableName: "photo",
    comment: "",
    // index: [{
    //   name: "ad_id",
    //   unique: false,
    //   type: "BTREE",
    //   fields: ["photo_ad_id"]
    // }]
  };
  const PhotoModel = sequelize.define("photo_model", attributes, options);
  return PhotoModel;
};