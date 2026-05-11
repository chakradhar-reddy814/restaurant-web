import { openDb } from '../../lib/db';

export default async function handler(req, res) {
  const db = await openDb();

  if (req.method === 'POST') {
    // Create a new order
    const { user_id, items, total_amount } = req.body;
    
    try {
      const items_json = JSON.stringify(items);
      const result = await db.run(
        `INSERT INTO orders (user_id, items_json, total_amount) VALUES (?, ?, ?)`,
        [user_id, items_json, total_amount]
      );
      
      const newOrder = await db.get(`SELECT * FROM orders WHERE id = ?`, [result.lastID]);
      res.status(201).json({ message: 'Order created successfully', order: newOrder });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create order' });
    }
  } else if (req.method === 'GET') {
    // Fetch orders for a specific user
    const { user_id } = req.query;
    
    try {
      let query = `SELECT * FROM orders`;
      let params = [];
      
      if (user_id) {
        query += ` WHERE user_id = ?`;
        params.push(user_id);
      }
      
      // Order by latest first
      query += ` ORDER BY created_at DESC`;
      
      const orders = await db.all(query, params);
      
      // Parse the items_json back into an object
      const formattedOrders = orders.map(order => ({
        ...order,
        items: JSON.parse(order.items_json)
      }));
      
      res.status(200).json({ orders: formattedOrders });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch orders' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
