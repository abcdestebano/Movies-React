import axios from 'axios'
import { ENDPOINT_API } from '../config'

/**
 *
 *
 * @export
 * @param {*} type
 * @param {*} query
 */
export async function getMoviesBySearch(type, query, page) {
   const url = `${ENDPOINT_API}type=${type}&s=${query}&page=${page}`
   try {
      const { data } = await axios.get(url)
      return data
   } catch (error) {
      throw new Error(error)
   }
}

/**
 *
 *
 * @export
 * @param {*} id
 * @returns
 */
export async function getMovieById(id) {
   const url = `${ENDPOINT_API}&i=${id}`
   try {
      const { data } = await axios.get(url)
      return data
   } catch (error) {
      throw new Error(error)
   }
}