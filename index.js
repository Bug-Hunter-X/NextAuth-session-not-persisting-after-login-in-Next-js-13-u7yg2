```javascript
// pages/about.js
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]';

export default async function About() {
  const session = await unstable_getServerSession(authOptions);

  if (!session) {
    return <p>Access Denied. Please Login</p>;
  }
  return (
    <div>
      <h1>About Page</h1>
      <p>You are logged in as {session.user.email}</p>
    </div>
  );
}
```
The issue is using `unstable_getServerSession` which is deprecated and is not working reliably with the new app directory. Updating the import path to use `next-auth/next` correctly resolves the issue, ensuring the session data is accessible.  The check for null session object prevents error when there is no session.