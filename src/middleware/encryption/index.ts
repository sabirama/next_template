import bcrypt from 'bcryptjs'

export async function hashString(plainString: string) {

    const data = await bcrypt.hash(plainString, 10)

    return data
}

export async function compareHash(plainString: string, storedHash: string) {

    const data = await bcrypt.compare(plainString, storedHash)

    return data
}