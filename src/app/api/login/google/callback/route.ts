import {
  createGoogleUserService,
  getAccountByGoogleIdService,
} from '@/backend/services/authenticationService';
import { site } from '@/config/site';
import { googleAuth } from '@/lib/auth';
import { setSession } from '@/lib/session';
import { OAuth2RequestError } from 'arctic';
import { cookies } from 'next/headers';

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const storedState = cookies().get('google_oauth_state')?.value ?? null;
  const codeVerifier = cookies().get('google_code_verifier')?.value ?? null;

  // Validate required parameters and state
  if (
    !code ||
    !state ||
    !storedState ||
    state !== storedState ||
    !codeVerifier
  ) {
    return new Response(null, {
      status: 400,
      statusText: 'Invalid request parameters or state mismatch',
    });
  }

  try {
    // Validate authorization code and obtain tokens
    const tokens = await googleAuth.validateAuthorizationCode(code, codeVerifier);

    // Fetch user information from Google
    const response = await fetch('https://openidconnect.googleapis.com/v1/userinfo', {
      headers: {
        Authorization: `Bearer ${tokens.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user info');
    }

    const googleUser: GoogleUser = await response.json();

    // Check if the user already exists
    const existingAccount = await getAccountByGoogleIdService(googleUser.sub);

    if (existingAccount) {
      // User exists, set session and redirect
      await setSession(existingAccount.userID);
      return new Response(null, {
        status: 302,
        headers: {
          Location: site.afterLoginRedirect,
        },
      });
    }

    // User does not exist, create a new user
    const { id } = await createGoogleUserService(googleUser);
    await setSession(id);

    // Redirect after successful login or registration
    return new Response(null, {
      status: 302,
      headers: {
        Location: site.afterLoginRedirect,
      },
    });
  } catch (e) {
    if (e instanceof OAuth2RequestError) {
      // Handle OAuth2 specific errors
      return new Response(null, {
        status: 400,
        statusText: 'Invalid authorization code',
      });
    }

    // General error handling
    return new Response(null, {
      status: 500,
      statusText: 'Internal server error',
    });
  }
}

export interface GoogleUser {
  sub: string;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  email: string;
  email_verified: boolean;
  locale: string;
}
