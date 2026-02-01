import { getDBConnection } from '../db.js';

export async function submitConfession(req, res) {
  const { confessionText, type } = req.body;
  const userId = req.session.userId;

  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (!confessionText || !confessionText.trim()) {
    return res.status(400).json({ error: 'Confession text required' });
  }

  try {
    const db = await getDBConnection();

    await db.run(
      `
      INSERT INTO confessions (confession_text, type, identity, created_at)
      VALUES (?, ?, 0, CURRENT_TIMESTAMP)
      `,
      [confessionText.trim(), type]
    );

    res.status(201).json({ message: 'Confession submitted' });
  } catch (err) {
    console.error('submitConfession error:', err);
    res.status(500).json({ error: 'Failed to submit confession' });
  }
}
export async function getAllConfessions(req, res) {
  try {
    const db = await getDBConnection();

    const confessions = await db.all(`
      SELECT
        confess_id,
        confession_text,
        type,
        identity,
        created_at
      FROM confessions
      ORDER BY created_at DESC
    `);

    res.json(confessions);
  } catch (err) {
    console.error('getAllConfessions error:', err);
    res.status(500).json({ error: 'Failed to fetch confessions' });
  }
}

export async function requestIdentityReveal(req, res) {
  const { id } = req.params;
  const userId = req.session.userId;

  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const db = await getDBConnection();

    await db.run(
      `
      UPDATE confessions
      SET identity = 0
      WHERE confess_id = ?
      `,
      [id]
    );

    res.json({ message: 'Identity reveal requested' });
  } catch (err) {
    console.error('requestIdentityReveal error:', err);
    res.status(500).json({ error: 'Failed to request identity reveal' });
  }
}

export async function acceptIdentityReveal(req, res) {
  const { id } = req.params;
  const userId = req.session.userId;

  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const db = await getDBConnection();

    await db.run(
      `
      UPDATE confessions
      SET identity = 1
      WHERE confess_id = ?
      `,
      [id]
    );

    res.json({ message: 'Identity reveal accepted' });
  } catch (err) {
    console.error('acceptIdentityReveal error:', err);
    res.status(500).json({ error: 'Failed to accept identity reveal' });
  }
}


