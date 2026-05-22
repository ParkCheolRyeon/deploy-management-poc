import NextAuth from 'next-auth';
import MicrosoftEntraID from 'next-auth/providers/microsoft-entra-id';

const ALLOWED_DOMAIN = '@iscreamarts.onmicrosoft.com';

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [MicrosoftEntraID({})],
  pages: {
    signIn: '/sign-in',
  },
  callbacks: {
    signIn({ user, profile }) {
      // user.email 은 ID token 의 email claim → mail 속성이 비어있으면 undefined.
      // Entra ID 사내 계정은 보통 preferred_username (UPN) 만 채워져옴.
      const raw = user.email ?? profile?.preferred_username;
      if (typeof raw !== 'string') return false;
      return raw.toLowerCase().endsWith(ALLOWED_DOMAIN);
    },
  },
});
