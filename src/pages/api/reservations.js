import { openDb } from '../../../lib/db';

export default async function handler(req, res) {
  const db = await openDb();

  if (req.method === 'POST') {
    // Create a new reservation
    const { user_id, booking_id, name, email, phone, date, time, guests } = req.body;
    
    try {
      const result = await db.run(
        `INSERT INTO reservations (user_id, booking_id, name, email, phone, date, time, guests) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [user_id || null, booking_id, name, email, phone, date, time, guests]
      );
      
      const newReservation = await db.get(`SELECT * FROM reservations WHERE id = ?`, [result.lastID]);
      res.status(201).json({ message: 'Table reserved successfully', reservation: newReservation });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create reservation' });
    }
  } else if (req.method === 'GET') {
    // Fetch reservations for a specific user or email
    const { user_id, email } = req.query;
    
    try {
      let query = `SELECT * FROM reservations`;
      let params = [];
      
      if (user_id) {
        query += ` WHERE user_id = ?`;
        params.push(user_id);
      } else if (email) {
        query += ` WHERE email = ?`;
        params.push(email);
      }
      
      query += ` ORDER BY created_at DESC`;
      
      const reservations = await db.all(query, params);
      res.status(200).json({ reservations });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch reservations' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
