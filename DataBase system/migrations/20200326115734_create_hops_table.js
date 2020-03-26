exports.up = function (knex) {
    return knex.schema.createTable('hops', function (t) {
      t.increments('id').primary()
      t.string('variety').notNullable()
      t.integer('amount').notNullable()
      t.integer('bitterness').notNullable()
      t.integer('sweetness').notNullable()
      t.integer('price').notNullable()
      t.timestamps(false, true)
    })
  }

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('hops')
}