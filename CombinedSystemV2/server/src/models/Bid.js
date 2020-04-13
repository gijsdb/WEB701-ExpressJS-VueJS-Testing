module.exports = (sequelize, DataTypes) => {
    const Bid = sequelize.define('Bid', {
      bidId: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      amount: DataTypes.INTEGER,
      bidder: DataTypes.STRING,
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: sequelize.NOW
      },
      hopId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false
      }
  })
    return Bid
  }
  