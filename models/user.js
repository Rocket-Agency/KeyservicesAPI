const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "user_id"
    },
    user_last_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "user_last_name"
    },
    user_first_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "user_first_name"
    },
    user_date_of_birth: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "user_date_of_birth"
    },
    user_sexe: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "user_sexe"
    },
    user_photo: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "user_photo"
    },
    user_email: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "user_email"
    },
    user_password: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "user_password"
    },
    user_adresse_txt: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "user_adresse_txt"
    },
    deleted: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "deleted"
    }
  };
  // const options = {
  //   tableName: "user",
  //   timestamps: false,
  //   comment: "",
  //   indexes: [{
  //     name: "group",
  //     unique: false,
  //     type: "BTREE",
  //     fields: ["user_group_id"]
  //   }]
  // };
  const UserModel = sequelize.define("users", attributes);
  return UserModel;
};