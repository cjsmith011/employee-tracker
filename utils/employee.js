//get aLL entries
app.get('/api/employees', (req, res) => {
    const sql = `SELECT * FROM employees`;

db.query(sql, (err, rows) => {
    if (err) {
        res.status(500).json({ error: err.message });
        return;
    }
    res.json({
        message: 'success!',
        data: rows
    });
    });
});
//get a single employee by id
app.get('/api/employees/:id', (req, res) => {
    const sql = `SELECT * FROM employees WHERE id = ?`;
    const params = [req.params.id];

db.query(sql, params, (err, row) => {
    if (err) {
     res.status(400).json({ error: err.message });
     return;
    }
    res.json({
        message: 'Success!',
        data: row
    });
    });
});

//delete an entry
app.delete('api/employees/:id', (req, res) => {
    const sql = `DELETE FROM employees WHERE id = ?`;
    const params = [req,params.id];
    
db.query(sql, params, (err, result) => {
    if (err) {
        res.statusMessage(400).json({ error: res.message });
    } else if (!result.affectedRows) {
        res.json({
            message: 'Employee not found, sorry!'
        });
    } else {
        res.json({
            message: 'deleted',
            changes: result.affectedRows,
            id: req.params.id
        });
    }
    });
    });

//create an entry
app.post('/api/employees', ({ body }, res) => {
    const errors = inputCheck(body, 'first_name', 'last_name', 'role_id', 'manager_id');
    if (errors) {
        res.status(400).json({ error: errors });
        return
    }

const sql = `INSERT INTO candidates (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
const params = [body.first_name, body.last_name, body.role_id, body.manager_id];

db.query(sql, params, (err, result) => {
    if (err) {
        res.status(400).json({ error: err.message });
        return;
    }
    res.json({
        message: 'successful!',
        data: body
    });
});