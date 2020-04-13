module.exports = (sequelize, DataTypes) => {
  const Hop = sequelize.define('Hop', {
    variety: {
      type: DataTypes.STRING,
      unique: true
    },
    weight: DataTypes.FLOAT,
    bitterness: DataTypes.INTEGER,
    sweetness: DataTypes.INTEGER,
    price: DataTypes.FLOAT    
})
  Hop.associate = function (models) {
    models.Hop.belongsTo(models.User, {
      onDelete: "CASCADE",
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
        as: 'User'
      }
    });
  };
  return Hop
}
