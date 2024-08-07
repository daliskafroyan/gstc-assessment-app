import { authenticatedAction } from '@/lib/zsa-procedures';
import { getProfileUserService } from '../services/authenticationService';
import { SelectProfile } from '@/database/types';

export type GetProfileUserResponse = Pick<
  SelectProfile, 'image' | 'lastName' | 'firstName' | 'phone'> & { email: string }

export const getProfileUserAction = authenticatedAction.handler(
  async ({ ctx }) => {
    const profile = await getProfileUserService(ctx.user.id);
    if (!profile) throw new Error('Profile not found');
    const { image, lastName, firstName, phone } = profile;
    return {
      image,
      lastName,
      firstName,
      phone,
      email: ctx.user.email,
    } satisfies GetProfileUserResponse;
  }
);
