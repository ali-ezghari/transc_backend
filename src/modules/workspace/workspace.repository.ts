import pool from "../../config/database";

export async function findByUserId(userId: string) {
  const query = `SELECT w.id, w.name, w.description, w.created_by, w.created_at FROM workspaces w JOIN workspace_members wm ON wm.workspace_id = w.id WHERE wm.user_id = $1`;
  const result = await pool.query(query, [userId]);
  return result.rows;
}
