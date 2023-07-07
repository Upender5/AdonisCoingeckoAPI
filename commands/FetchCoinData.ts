import { BaseCommand } from '@adonisjs/core/build/standalone'
import axios from 'axios'

export default class FetchCoinData extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'fetch:coin_data'

  /**
   * Command description is displayed in the "help" output
   */
  public static description = 'This command is used to fetech Data from coingo'

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command. Don't forget to call `node ace generate:manifest` 
     * afterwards.
     */
    loadApp: true,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process. Don't forget to call 
     * `node ace generate:manifest` afterwards.
     */
    stayAlive: false,
  }

  public async run() {
    try{
      /**
       * Get the coin data  from coingecko.com
       */
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/list?include_platform=true')
      /**
       * stores responce data inot datd varible
       */
      const data = response.data
      /**
       * import the lucid Database 
       */
      const { default: Database } = await import ('@ioc:Adonis/Lucid/Database')
      /**
       * Insert the data into "coins_data" table
       */
      await Database.table('coins_data').insert(data);
      this.logger.info(data);
      this.logger.info('Coin data fetched and stored in the database successfully.');
    }
    catch(error){
      this.logger.info('An error occurred while fetching and storing coin data:', error)
    }
  }
}
