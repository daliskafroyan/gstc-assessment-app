import { db } from '@/database/db';
import { certificationBodiesTable } from '@/database/schema';
import { SelectCertificationBody, InsertCertificationBody, UpdateCertificationBody } from '@/database/types';
import { eq } from 'drizzle-orm';

export async function createCertificationBody(data: InsertCertificationBody) {
    const [certificationBody] = await db
        .insert(certificationBodiesTable)
        .values(data)
        .returning();
    return certificationBody;
}

export async function updateCertificationBody({ userID, data }: { userID: string, data: UpdateCertificationBody }) {
    return await db
        .update(certificationBodiesTable)
        .set(data)
        .where(eq(certificationBodiesTable.userID, userID));
}

export async function deleteCertificationBody(userID: string) {
    return await db
        .delete(certificationBodiesTable)
        .where(eq(certificationBodiesTable.userID, userID));
}

export async function getCertificationBody(
    userID: string
): Promise<SelectCertificationBody | undefined> {
    return await db.query.certificationBodiesTable.findFirst({
        where: eq(certificationBodiesTable.userID, userID),
    });
}