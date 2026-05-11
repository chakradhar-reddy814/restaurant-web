import { openDb } from '../../../lib/db';

export default async function handler(req, res) {
  const db = await openDb();

  if (req.method === 'POST') {
    // Register a new user
    const { full_name, email, phone, password_hash } = req.body;
    
    try {
      const result = await db.run(
        `INSERT INTO users (full_name, email, phone, password_hash) VALUES (?, ?, ?, ?)`,
        [full_name, email, phone, password_hash || 'placeholder_hash'] // In production, use bcrypt here
      );
      
      const newUser = await db.get(`SELECT * FROM users WHERE id = ?`, [result.lastID]);
      res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
      if (error.message.includes('UNIQUE constraint failed')) {
        res.status(409).json({ error: 'Email already exists' });
      } else {
        res.status(500).json({ error: 'Failed to create user' });
      }
    }
  } else if (req.method === 'GET') {
    // Fetch all users (or filter by email)
    const { email } = req.query;
    try {
      if (email) {
        const user = await db.get(`SELECT id, full_name, email, phone, created_at FROM users WHERE email = ?`, [email]);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.status(200).json({ user });
      } else {
        const users = await db.all(`SELECT id, full_name, email, phone, created_at FROM users`);
        res.status(200).json({ users });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
