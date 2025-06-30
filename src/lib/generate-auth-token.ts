import jwt from 'jsonwebtoken';
import { v4 as uuid4 } from 'uuid';

export enum Role {
    HOST = 'host',
    GUEST = 'guest',
}

export const generateAuthToken = (roomId: string, userId: string, role: Role) => {

    const app_access_key = process.env.HMS_ACCESS_KEY as string;
    const app_secret = process.env.HMS_SECRET as string;

    const payload = {
        access_key: app_access_key,
        room_id: roomId,
        user_id: userId,
        role: role,
        type: 'app',
        version: 2,
        iat: Math.floor(Date.now() / 1000),
        nbf: Math.floor(Date.now() / 1000)
    };

    const authToken = jwt.sign(
        payload,
        app_secret,
        {
            algorithm: "HS256",
            expiresIn: '24h',
            jwtid: uuid4()
        }
    )

    return authToken;

}