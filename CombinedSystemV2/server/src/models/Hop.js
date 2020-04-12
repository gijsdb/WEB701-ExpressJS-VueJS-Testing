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
  return Hop
}
