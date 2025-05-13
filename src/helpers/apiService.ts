type RequestConfig ={
    url: string,
    method?: 'GET' | "POST";
    body?: any
}

export default class ApiService{
    private loading: boolean

    constructor(){
        this.loading = false
    }

    async fetchData<T>(config: RequestConfig): Promise<T | undefined>{
        this.loading = true
        try{
            const response = await fetch(config.url, {
                method: config.method || "GET",
                body: config.method === "POST" ? JSON.stringify(config.body) : undefined,
                headers: {
                    "Content-Type": "application/json",
                }
            });  if( !response.ok){
                throw new Error(`Error: ${response.statusText}` )
            } return await response.json()
    }catch(error){
        console.log(error)
    }finally{
        this.loading = false
    }
} }