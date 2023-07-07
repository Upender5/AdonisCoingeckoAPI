import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'coins_data'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
        table.string('id').unique().notNullable()
        table.string('symbol').notNullable()
        table.string('name').notNullable()
        table.json('platforms')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
