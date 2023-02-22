const controller = {}


controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('select * from persona', (err, persona) => {
            if (err) {
                res.json(err);
            }
            res.render('personas',{
                data: persona
            });
        });
    });
};

module.exports = controller;