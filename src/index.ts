import express, { application, Express } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import axios from 'axios';


const app: Express = express();

app.use(express.json());
app.use(cors());




app.get('/:cep', async (req, res) => {

    try {
        const { cep } = req.params

          interface Cep {
                 state: string;
                 city: string;
                 street: string
             } 

        const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json`)

        res.status(200).send({
            message: 'Sucesso!!',
            data
        })
    } catch (error: any) {
        res.send({ error: error.message })
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});