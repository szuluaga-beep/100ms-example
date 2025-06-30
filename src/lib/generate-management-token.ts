
import jwt from 'jsonwebtoken';
import { v4 as uuid4 } from 'uuid';

export function generateManagementToken() {
    const appSecret = process.env.HMS_SECRET as string;
    const payload = {
        access_key: process.env.HMS_ACCESS_KEY as string,
        type: 'management',
        version: 2,
        iat: Math.floor(Date.now() / 1000),
        nbf: Math.floor(Date.now() / 1000)
    };

    const managementToken = jwt.sign(
        payload,
        appSecret,
        {
            algorithm: 'HS256',
            expiresIn: '24h',
            jwtid: uuid4()
        },

    );
    return managementToken;
}