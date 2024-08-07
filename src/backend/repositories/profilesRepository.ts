import { db } from '@/database/db';
import { profilesTable } from '@/database/schema';
import { SelectProfile, UpdateAvatar, UpdateProfile } from '@/database/types';
import { eq } from 'drizzle-orm';

export async function createProfile(
  userID: string,
  firstName?: string,
  image?: string
) {
  const [profile] = await db
    .insert(profilesTable)
    .values({ userID, image, firstName })
    .onConflictDoNothing()
    .returning();
  return profile;
}

export async function updateAvatar({ userID, data }: { userID: string, data: UpdateAvatar }) {
  return await db
    .update(profilesTable)
    .set(data)
    .where(eq(profilesTable.userID, userID));
}

export async function deleteAvatar(userID: string) {
  return await db
    .update(profilesTable)
    .set({ image: null })
    .where(eq(profilesTable.userID, userID));
}

export async function updateProfile({ userID, data }: { userID: string, data: UpdateProfile }) {
  return await db
    .update(profilesTable)
    .set(data)
    .where(eq(profilesTable.userID, userID));
}

export async function getProfile(
  userID: string
): Promise<SelectProfile | undefined> {
  return await db.query.profilesTable.findFirst({
    where: eq(profilesTable.userID, userID),
  });
}
