import express from 'express';
const router = express.Router();
import pool from "../config/db.js";
const db = pool; // Utilise la connexion poolée




// Route stats quotidiennes (dernier 7 jours)
router.get('/stats/daily', async (req, res) => {
  try {
    const [visitorsDailyRows] = await db.query(`
      SELECT DATE_FORMAT(departure_time, '%Y-%m-%d') as day, COUNT(*) as visitors
      FROM visitors
      WHERE DATE(departure_time) >= DATE_SUB(CURDATE(), INTERVAL 6 DAY)
      GROUP BY DATE_FORMAT(departure_time, '%Y-%m-%d')
      ORDER BY day
    `);

    const [appointmentsDailyRows] = await db.query(`
      SELECT DATE_FORMAT(start_time, '%Y-%m-%d') as day, COUNT(*) as appointments
      FROM appointments
      WHERE DATE(start_time) >= DATE_SUB(CURDATE(), INTERVAL 6 DAY)
      GROUP BY DATE_FORMAT(start_time, '%Y-%m-%d')
      ORDER BY day
    `);

    const dailyStats = [];
    for (let i = 6; i >= 0; i--) {
      const day = new Date();
      day.setDate(day.getDate() - i);
      const dayStr = day.toISOString().split('T')[0]; // YYYY-MM-DD

      dailyStats.push({
        day: dayStr,
        visitors: visitorsDailyRows.find(v => v.day === dayStr)?.visitors || 0,
        appointments: appointmentsDailyRows.find(a => a.day === dayStr)?.appointments || 0
      });
    }

    res.json(dailyStats);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur" });
  }
});



// GET /api/stats
router.get('/stats', async (req, res) => {
  try {
    // Chaque query renvoie [rows, fields]
    const [visitorsTodayRows] = await pool.query(
      'SELECT COUNT(*) AS count FROM visitors'
    );
    const [appointmentsRows] = await pool.query(
      'SELECT COUNT(*) AS count FROM appointments'
    );
    const [callsRows] = await pool.query(
      'SELECT COUNT(*) AS count FROM calls'
    );
    const [mailsRows] = await pool.query(
      'SELECT COUNT(*) AS count FROM mail_items'
    );
    const [tasksOpenRows] = await pool.query(
      'SELECT COUNT(*) AS count FROM tasks'
    );
    const [consommationRows] = await pool.query(
      'SELECT COUNT(*) AS count FROM consommation'
    );

    res.json({
      visitorsToday: visitorsTodayRows[0]?.count || 0,
      appointments: appointmentsRows[0]?.count || 0,
      calls: callsRows[0]?.count || 0,
      mails: mailsRows[0]?.count || 0,
      tasksOpen: tasksOpenRows[0]?.count || 0,
      consommation: consommationRows[0]?.count || 0
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

export default router;
