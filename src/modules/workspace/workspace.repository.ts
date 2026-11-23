import pool from "../../config/database.ts";

export async function findAllUserWorkspaces(userId: string) {
  const query = `
    SELECT w.id AS workspace_id, w.name, wm.role, wm.joined_at  
    FROM workspace_members AS wm
    INNER JOIN workspaces AS w
    ON w.id = wm.workspace_id
    WHERE wm.user_id = $1
    ORDER BY wm.joined_at ASC;
  `;
  const result = await pool.query(query, [userId]);
  return result.rows;
}

export async function findWorkspaceById(workspaceId: string) {
  const query = `
    SELECT w.id AS workspace_id, w.name, wm.role, wm.joined_at  
    FROM workspace_members AS wm
    INNER JOIN workspaces AS w
    ON w.id = wm.workspace_id
    WHERE w.id = $1
    ORDER BY wm.joined_at ASC;
  `;
  const result = await pool.query(query, [workspaceId]);
  return result.rows;
}
