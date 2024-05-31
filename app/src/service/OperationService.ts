import axios from 'axios'
import { AxiosError } from 'axios'

const operationService = {
  send: async (operation: string) => {
    try {
      const response = await axios.post(`api`,
        {
          operation
        })
      return response.data
    } catch (error: any) {
      if (error instanceof AxiosError) {
        return error.toJSON()
      }
    }

  }
}

export default operationService