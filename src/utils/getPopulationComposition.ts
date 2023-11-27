import { API_KEY, GET_POPULATION_CONFIGURATION_URL } from "./ResasAPI"

const header = {
    'X-API-KEY':API_KEY
} as const 


export const getPopulationConfiguration = async (
    prefCode: number,
    prefName: string,
    check: boolean
):Promise<any[]> => {
    const result = await fetch(
        GET_POPULATION_CONFIGURATION_URL + String(prefCode),
        {
            method: 'GET',
            headers: header
        }
    )
    if (result.status !== 200) throw Error();
    const json = await result.json()
    return json
}