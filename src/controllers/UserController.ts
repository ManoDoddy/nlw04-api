import { Request, Response } from 'express' 
import { getRepository } from 'typeorm'
import { User } from '../models/User'

class UserController{

    async create(req: Request, res: Response){
        const body = req.body

        const usersRepository = getRepository(User)

        const userExists = await usersRepository.findOne({
            email: body.email
        })

        if(userExists) {
            return res.status(400).json({
                error: "User already exists"
            })
        }

        const user = usersRepository.create({
            name: body.name,
            email: body.email
        })

        await usersRepository.save(user)

        return res.json(user)
    }

}

export { UserController }