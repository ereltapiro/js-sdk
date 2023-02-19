import {createServer} from "miragejs";

export const createMockServer = () => {
    return createServer({
        routes() {
            this.get("/api/v1/movies", (schema, request) => ({
                date: "1111",
            }))
        },
    })
}

