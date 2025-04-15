## Налаштування Google OAuth у Supabase

1. Налаштувати проєкт у Google Cloud Console:

- Створити новий проєкт (або відкрити існуючий)
- Перейти до `Credentials → Create Credential → OAuth 2.0 Client IDs`.
- Вказати тип "Web application".
- У полі Authorized redirect URIs додати: `https://brskvxpqvofojrxoxxjb.supabase.co/auth/v1/callback` (NEXT_PUBLIC_SUPABASE_URL/auth/v1/callback)
- Скопіювати Client ID і Client Secret.

2. Увімкнути Google OAuth у Supabase:

- `Supabase Dashboard → Authentication → Sign In / Up → Auth Providers`.
- Знайти `Google → Enable Sign in with Google`.
- Вказати `Client ID` і `Client Secret` із Google Cloud Console
  Налаштуй redirect URL:
- вказати у `Supabase Dashboard → Authentication → URL Configuration → Redirect URLs`:
  - production: `https://bookshop-frontend-qtkz.onrender.com`
  - local: `http://localhost:3000`
- перевірити змінні середовища: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, NEXT_PUBLIC_BASE_URL
